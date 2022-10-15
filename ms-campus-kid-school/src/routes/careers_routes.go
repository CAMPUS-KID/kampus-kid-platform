package routes

import (
	"encoding/json"
	"ms_campus_kid_school/src/controllers"
	"ms_campus_kid_school/src/utils"
	"net/http"

	"github.com/gorilla/mux"
)

//function that expose the CAREER CRUD methods with an API REST
func SetupRoutesForCareers(router *mux.Router) {
	// First enable CORS. If you don't need cors, comment the next line
	enableCORS(router)

	router.HandleFunc(apiRoute+"/careers", func(w http.ResponseWriter, _ *http.Request) {

		careers, err := controllers.GetCareers()
		if err == nil {
			respondWithSuccess(careers, w)
		} else {
			respondWithError(err, w)
		}
	}).Methods(http.MethodGet)

	router.HandleFunc(apiRoute+"/careers/{id}", func(w http.ResponseWriter, r *http.Request) {
		idAsString := mux.Vars(r)["id"]

		id, err := utils.StringToInt64(idAsString)
		if err != nil {
			respondWithError(err, w)
			return
		}

		career, err := controllers.GetCareersById(id)
		if err != nil {
			respondWithError(err, w)
		} else {
			respondWithSuccess(career, w)
		}
	}).Methods(http.MethodGet)

	router.HandleFunc(apiRoute+"/careers", func(w http.ResponseWriter, r *http.Request) {
		// Declare a var so we can decode json into it
		var career utils.Career
		err := json.NewDecoder(r.Body).Decode(&career)
		if err != nil {
			respondWithError(err, w)
		} else {
			err := controllers.CreateCareer(&career)
			if err != nil {
				respondWithError(err, w)
			} else {
				respondWithSuccess(career, w)
			}
		}
	}).Methods(http.MethodPost)

	router.HandleFunc(apiRoute+"/careers", func(w http.ResponseWriter, r *http.Request) {
		// Declare a var so we can decode json into it
		var career utils.Career
		err := json.NewDecoder(r.Body).Decode(&career)
		if err != nil {
			respondWithError(err, w)
		} else {
			err := controllers.UpdateCareer(&career)
			if err != nil {
				respondWithError(err, w)
			} else {
				respondWithSuccess(career, w)
			}
		}
	}).Methods(http.MethodPut)

	router.HandleFunc(apiRoute+"/careers/{id}", func(w http.ResponseWriter, r *http.Request) {
		idAsString := mux.Vars(r)["id"]

		id, err := utils.StringToInt64(idAsString)
		if err != nil {
			respondWithError(err, w)
			return
		}

		err = controllers.DeleteCareer(id)
		if err != nil {
			respondWithError(err, w)
		} else {
			respondWithSuccess(true, w)
		}
	}).Methods(http.MethodDelete)
}
