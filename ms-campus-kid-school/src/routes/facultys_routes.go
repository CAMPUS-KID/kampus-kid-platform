package routes

import (
	"encoding/json"
	"ms_campus_kid_school/src/controllers"
	"ms_campus_kid_school/src/type_defs"
	"net/http"

	"github.com/gorilla/mux"
)

func SetupRoutesForFacultys(router *mux.Router) {
	// First enable CORS. If you don't need cors, comment the next line
	enableCORS(router)

	router.HandleFunc("/facultys", func(w http.ResponseWriter, _ *http.Request) {

		facultys, err := controllers.GetFacultys()
		if err == nil {
			respondWithSuccess(facultys, w)
		} else {
			respondWithError(err, w)
		}
	}).Methods(http.MethodGet)

	router.HandleFunc("/facultys/{id}", func(w http.ResponseWriter, r *http.Request) {
		idAsString := mux.Vars(r)["id"]
		faculty, err := controllers.GetFacultysById(idAsString)
		if err != nil {
			respondWithError(err, w)
		} else {
			respondWithSuccess(faculty, w)
		}
	}).Methods(http.MethodGet)

	router.HandleFunc("/facultys", func(w http.ResponseWriter, r *http.Request) {
		// Declare a var so we can decode json into it
		var faculty type_defs.Faculty
		err := json.NewDecoder(r.Body).Decode(&faculty)
		if err != nil {
			respondWithError(err, w)
		} else {
			err := controllers.CreateFaculty(faculty)
			if err != nil {
				respondWithError(err, w)
			} else {
				respondWithSuccess(true, w)
			}
		}
	}).Methods(http.MethodPost)

	router.HandleFunc("/facultys", func(w http.ResponseWriter, r *http.Request) {
		// Declare a var so we can decode json into it
		var faculty type_defs.Faculty
		err := json.NewDecoder(r.Body).Decode(&faculty)
		if err != nil {
			respondWithError(err, w)
		} else {
			err := controllers.UpdateFaculty(faculty)
			if err != nil {
				respondWithError(err, w)
			} else {
				respondWithSuccess(true, w)
			}
		}
	}).Methods(http.MethodPut)

	router.HandleFunc("/facultys/{id}", func(w http.ResponseWriter, r *http.Request) {
		idAsString := mux.Vars(r)["id"]
		err := controllers.DeleteFaculty(idAsString)
		if err != nil {
			respondWithError(err, w)
		} else {
			respondWithSuccess(true, w)
		}
	}).Methods(http.MethodDelete)
}
