package main

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

func setupRoutesForCareers(router *mux.Router) {
	// First enable CORS. If you don't need cors, comment the next line
	enableCORS(router)

	router.HandleFunc("/careers", func(w http.ResponseWriter, r *http.Request) {

		careers, err := getCareers()
		if err == nil {
			respondWithSuccess(careers, w)
		} else {
			respondWithError(err, w)
		}
	}).Methods(http.MethodGet)

	router.HandleFunc("/careers/{id}", func(w http.ResponseWriter, r *http.Request) {
		idAsString := mux.Vars(r)["id"]
		career, err := getCareersById(idAsString)
		if err != nil {
			respondWithError(err, w)
		} else {
			respondWithSuccess(career, w)
		}
	}).Methods(http.MethodGet)

	router.HandleFunc("/careers", func(w http.ResponseWriter, r *http.Request) {
		// Declare a var so we can decode json into it
		var career Career
		err := json.NewDecoder(r.Body).Decode(&career)
		if err != nil {
			respondWithError(err, w)
		} else {
			err := createCareer(career)
			if err != nil {
				respondWithError(err, w)
			} else {
				respondWithSuccess(true, w)
			}
		}
	}).Methods(http.MethodPost)

	router.HandleFunc("/careers", func(w http.ResponseWriter, r *http.Request) {
		// Declare a var so we can decode json into it
		var career Career
		err := json.NewDecoder(r.Body).Decode(&career)
		if err != nil {
			respondWithError(err, w)
		} else {
			err := updateCareer(career)
			if err != nil {
				respondWithError(err, w)
			} else {
				respondWithSuccess(true, w)
			}
		}
	}).Methods(http.MethodPut)

	router.HandleFunc("/careers/{id}", func(w http.ResponseWriter, r *http.Request) {
		idAsString := mux.Vars(r)["id"]
		err := deleteCareer(idAsString)
		if err != nil {
			respondWithError(err, w)
		} else {
			respondWithSuccess(true, w)
		}
	}).Methods(http.MethodDelete)
}
