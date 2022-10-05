package routes

import (
	"encoding/json"
	"ms_campus_kid_school/src/controllers"
	"ms_campus_kid_school/src/type_defs"
	"net/http"

	"github.com/gorilla/mux"
)

func SetupRoutesForCareers(router *mux.Router) {
	// First enable CORS. If you don't need cors, comment the next line
	enableCORS(router)

	router.HandleFunc("/careers", func(w http.ResponseWriter, _ *http.Request) {

		careers, err := controllers.GetCareers()
		if err == nil {
			respondWithSuccess(careers, w)
		} else {
			respondWithError(err, w)
		}
	}).Methods(http.MethodGet)

	router.HandleFunc("/careers/{id}", func(w http.ResponseWriter, r *http.Request) {
		idAsString := mux.Vars(r)["id"]
		career, err := controllers.GetCareersById(idAsString)
		if err != nil {
			respondWithError(err, w)
		} else {
			respondWithSuccess(career, w)
		}
	}).Methods(http.MethodGet)

	router.HandleFunc("/careers", func(w http.ResponseWriter, r *http.Request) {
		// Declare a var so we can decode json into it
		var career type_defs.Career
		err := json.NewDecoder(r.Body).Decode(&career)
		if err != nil {
			respondWithError(err, w)
		} else {
			err := controllers.CreateCareer(career)
			if err != nil {
				respondWithError(err, w)
			} else {
				respondWithSuccess(true, w)
			}
		}
	}).Methods(http.MethodPost)

	router.HandleFunc("/careers", func(w http.ResponseWriter, r *http.Request) {
		// Declare a var so we can decode json into it
		var career type_defs.Career
		err := json.NewDecoder(r.Body).Decode(&career)
		if err != nil {
			respondWithError(err, w)
		} else {
			err := controllers.UpdateCareer(career)
			if err != nil {
				respondWithError(err, w)
			} else {
				respondWithSuccess(true, w)
			}
		}
	}).Methods(http.MethodPut)

	router.HandleFunc("/careers/{id}", func(w http.ResponseWriter, r *http.Request) {
		idAsString := mux.Vars(r)["id"]
		err := controllers.DeleteCareer(idAsString)
		if err != nil {
			respondWithError(err, w)
		} else {
			respondWithSuccess(true, w)
		}
	}).Methods(http.MethodDelete)
}
