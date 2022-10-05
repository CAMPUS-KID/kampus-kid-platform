package routes

import (
	"encoding/json"
	"ms_campus_kid_school/src/controllers"
	"ms_campus_kid_school/src/type_defs"
	"net/http"

	"github.com/gorilla/mux"
)

func SetupRoutesForSites(router *mux.Router) {
	// First enable CORS. If you don't need cors, comment the next line
	enableCORS(router)

	router.HandleFunc("/sites", func(w http.ResponseWriter, r *http.Request) {

		sites, err := controllers.GetSites()
		if err == nil {
			respondWithSuccess(sites, w)
		} else {
			respondWithError(err, w)
		}
	}).Methods(http.MethodGet)

	router.HandleFunc("/sites/{id}", func(w http.ResponseWriter, r *http.Request) {
		idAsString := mux.Vars(r)["id"]
		site, err := controllers.GetSitesById(idAsString)
		if err != nil {
			respondWithError(err, w)
		} else {
			respondWithSuccess(site, w)
		}
	}).Methods(http.MethodGet)

	router.HandleFunc("/sites", func(w http.ResponseWriter, r *http.Request) {
		// Declare a var so we can decode json into it
		var site type_defs.Site
		err := json.NewDecoder(r.Body).Decode(&site)
		if err != nil {
			respondWithError(err, w)
		} else {
			err := controllers.CreateSite(site)
			if err != nil {
				respondWithError(err, w)
			} else {
				respondWithSuccess(true, w)
			}
		}
	}).Methods(http.MethodPost)

	router.HandleFunc("/sites", func(w http.ResponseWriter, r *http.Request) {
		// Declare a var so we can decode json into it
		var site type_defs.Site
		err := json.NewDecoder(r.Body).Decode(&site)
		if err != nil {
			respondWithError(err, w)
		} else {
			err := controllers.UpdateSite(site)
			if err != nil {
				respondWithError(err, w)
			} else {
				respondWithSuccess(true, w)
			}
		}
	}).Methods(http.MethodPut)

	router.HandleFunc("/sites/{id}", func(w http.ResponseWriter, r *http.Request) {
		idAsString := mux.Vars(r)["id"]
		err := controllers.DeleteSite(idAsString)
		if err != nil {
			respondWithError(err, w)
		} else {
			respondWithSuccess(true, w)
		}
	}).Methods(http.MethodDelete)
}
