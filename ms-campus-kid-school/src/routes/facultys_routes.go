package routes

import (
	"encoding/json"
	"ms_campus_kid_school/src/controllers"
	"ms_campus_kid_school/src/utils"
	"net/http"

	"github.com/gorilla/mux"
)

//function that expose the FACULTY CRUD methods with an API REST
func SetupRoutesForFaculties(router *mux.Router) {
	// First enable CORS. If you don't need cors, comment the next line
	enableCORS(router)

	router.HandleFunc(apiRoute+"/faculties", func(w http.ResponseWriter, _ *http.Request) {

		faculties, err := controllers.GetFaculties()
		if err == nil {
			respondWithSuccess(faculties, w)
		} else {
			respondWithError(err, w)
		}
	}).Methods(http.MethodGet)

	router.HandleFunc(apiRoute+"/faculties/{id}", func(w http.ResponseWriter, r *http.Request) {
		idAsString := mux.Vars(r)["id"]

		id, err := utils.StringToInt64(idAsString)
		if err != nil {
			respondWithError(err, w)
			return
		}

		faculty, err := controllers.GetFacultiesById(id)
		if err != nil {
			respondWithError(err, w)
		} else {
			respondWithSuccess(faculty, w)
		}
	}).Methods(http.MethodGet)

	router.HandleFunc(apiRoute+"/faculties", func(w http.ResponseWriter, r *http.Request) {
		// Declare a var so we can decode json into it
		var faculty utils.Faculty
		err := json.NewDecoder(r.Body).Decode(&faculty)
		if err != nil {
			respondWithError(err, w)
		} else {
			err := controllers.CreateFaculty(&faculty)
			if err != nil {
				respondWithError(err, w)
			} else {
				respondWithSuccess(faculty, w)
			}
		}
	}).Methods(http.MethodPost)

	router.HandleFunc(apiRoute+"/faculties", func(w http.ResponseWriter, r *http.Request) {
		// Declare a var so we can decode json into it
		var faculty utils.Faculty
		err := json.NewDecoder(r.Body).Decode(&faculty)
		if err != nil {
			respondWithError(err, w)
		} else {
			err := controllers.UpdateFaculty(&faculty)
			if err != nil {
				respondWithError(err, w)
			} else {
				respondWithSuccess(faculty, w)
			}
		}
	}).Methods(http.MethodPut)

	router.HandleFunc(apiRoute+"/faculties/{id}", func(w http.ResponseWriter, r *http.Request) {
		idAsString := mux.Vars(r)["id"]

		id, err := utils.StringToInt64(idAsString)
		if err != nil {
			respondWithError(err, w)
			return
		}
		err = controllers.DeleteFaculty(id)
		if err != nil {
			respondWithError(err, w)
		} else {
			respondWithSuccess(true, w)
		}
	}).Methods(http.MethodDelete)
}
