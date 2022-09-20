package main

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

func setupRoutesForSites(router *mux.Router) {
	// First enable CORS. If you don't need cors, comment the next line
	enableCORS(router)

	router.HandleFunc("/sites", func(w http.ResponseWriter, r *http.Request) {

		sites, err := getSites()
		if err == nil {
			respondWithSuccess(sites, w)
		} else {
			respondWithError(err, w)
		}
	}).Methods(http.MethodGet)

	router.HandleFunc("/sites/{id}", func(w http.ResponseWriter, r *http.Request) {
		idAsString := mux.Vars(r)["id"]
		site, err := getSitesById(idAsString)
		if err != nil {
			respondWithError(err, w)
		} else {
			respondWithSuccess(site, w)
		}
	}).Methods(http.MethodGet)

	router.HandleFunc("/sites", func(w http.ResponseWriter, r *http.Request) {
		// Declare a var so we can decode json into it
		var site Site
		err := json.NewDecoder(r.Body).Decode(&site)
		if err != nil {
			respondWithError(err, w)
		} else {
			err := createSite(site)
			if err != nil {
				respondWithError(err, w)
			} else {
				respondWithSuccess(true, w)
			}
		}
	}).Methods(http.MethodPost)

	router.HandleFunc("/sites", func(w http.ResponseWriter, r *http.Request) {
		// Declare a var so we can decode json into it
		var site Site
		err := json.NewDecoder(r.Body).Decode(&site)
		if err != nil {
			respondWithError(err, w)
		} else {
			err := updateSite(site)
			if err != nil {
				respondWithError(err, w)
			} else {
				respondWithSuccess(true, w)
			}
		}
	}).Methods(http.MethodPut)

	router.HandleFunc("/sites/{id}", func(w http.ResponseWriter, r *http.Request) {
		idAsString := mux.Vars(r)["id"]
		err := deleteSite(idAsString)
		if err != nil {
			respondWithError(err, w)
		} else {
			respondWithSuccess(true, w)
		}
	}).Methods(http.MethodDelete)
}
