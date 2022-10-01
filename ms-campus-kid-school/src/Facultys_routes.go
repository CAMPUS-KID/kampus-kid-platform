package main

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

func setupRoutesForFacultys(router *mux.Router) {
	// First enable CORS. If you don't need cors, comment the next line
	enableCORS(router)

	router.HandleFunc("/facultys", func(w http.ResponseWriter, r *http.Request) {

		facultys, err := getFacultys()
		if err == nil {
			respondWithSuccess(facultys, w)
		} else {
			respondWithError(err, w)
		}
	}).Methods(http.MethodGet)

	router.HandleFunc("/facultys/{id}", func(w http.ResponseWriter, r *http.Request) {
		idAsString := mux.Vars(r)["id"]
		faculty, err := getFacultysById(idAsString)
		if err != nil {
			respondWithError(err, w)
		} else {
			respondWithSuccess(faculty, w)
		}
	}).Methods(http.MethodGet)

	router.HandleFunc("/facultys", func(w http.ResponseWriter, r *http.Request) {
		// Declare a var so we can decode json into it
		var faculty Faculty
		err := json.NewDecoder(r.Body).Decode(&faculty)
		if err != nil {
			respondWithError(err, w)
		} else {
			err := createFaculty(faculty)
			if err != nil {
				respondWithError(err, w)
			} else {
				respondWithSuccess(true, w)
			}
		}
	}).Methods(http.MethodPost)

	router.HandleFunc("/facultys", func(w http.ResponseWriter, r *http.Request) {
		// Declare a var so we can decode json into it
		var faculty Faculty
		err := json.NewDecoder(r.Body).Decode(&faculty)
		if err != nil {
			respondWithError(err, w)
		} else {
			err := updateFaculty(faculty)
			if err != nil {
				respondWithError(err, w)
			} else {
				respondWithSuccess(true, w)
			}
		}
	}).Methods(http.MethodPut)

	router.HandleFunc("/facultys/{id}", func(w http.ResponseWriter, r *http.Request) {
		idAsString := mux.Vars(r)["id"]
		err := deleteFaculty(idAsString)
		if err != nil {
			respondWithError(err, w)
		} else {
			respondWithSuccess(true, w)
		}
	}).Methods(http.MethodDelete)
}
