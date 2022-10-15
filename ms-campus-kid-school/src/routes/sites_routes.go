package routes

import (
	"encoding/json"
	"ms_campus_kid_school/src/controllers"
	"ms_campus_kid_school/src/utils"
	"net/http"

	"github.com/gorilla/mux"
)

//function that expose the SITE CRUD methods with an API REST
func SetupRoutesForSites(router *mux.Router) {
	// First enable CORS. If you don't need cors, comment the next line
	enableCORS(router)

	router.HandleFunc(apiRoute+"/sites", func(w http.ResponseWriter, _ *http.Request) {

		sites, err := controllers.GetSites()
		if err == nil {
			respondWithSuccess(sites, w)
		} else {
			respondWithError(err, w)
		}
	}).Methods(http.MethodGet)

	router.HandleFunc(apiRoute+"/sites/{id}", func(w http.ResponseWriter, r *http.Request) {
		idAsString := mux.Vars(r)["id"]

		id, err := utils.StringToInt64(idAsString)
		if err != nil {
			respondWithError(err, w)
			return
		}

		site, err := controllers.GetSitesById(id)
		if err != nil {
			respondWithError(err, w)
		} else {
			respondWithSuccess(site, w)
		}
	}).Methods(http.MethodGet)

	router.HandleFunc(apiRoute+"/sites", func(w http.ResponseWriter, r *http.Request) {
		// Declare a var so we can decode json into it
		var site utils.Site
		err := json.NewDecoder(r.Body).Decode(&site)
		if err != nil {
			respondWithError(err, w)
		} else {
			err := controllers.CreateSite(&site)
			if err != nil {
				respondWithError(err, w)
			} else {
				respondWithSuccess(site, w)
			}
		}
	}).Methods(http.MethodPost)

	router.HandleFunc(apiRoute+"/sites", func(w http.ResponseWriter, r *http.Request) {
		// Declare a var so we can decode json into it
		var site utils.Site
		err := json.NewDecoder(r.Body).Decode(&site)
		if err != nil {
			respondWithError(err, w)
		} else {
			err := controllers.UpdateSite(&site)
			if err != nil {
				respondWithError(err, w)
			} else {
				respondWithSuccess(site, w)
			}
		}
	}).Methods(http.MethodPut)

	router.HandleFunc(apiRoute+"/sites/{id}", func(w http.ResponseWriter, r *http.Request) {
		idAsString := mux.Vars(r)["id"]

		id, err := utils.StringToInt64(idAsString)
		if err != nil {
			respondWithError(err, w)
			return
		}

		err = controllers.DeleteSite(id)
		if err != nil {
			respondWithError(err, w)
		} else {
			respondWithSuccess(true, w)
		}
	}).Methods(http.MethodDelete)
}
