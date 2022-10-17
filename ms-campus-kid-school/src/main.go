package main

import (
	"log"
	"net/http"
	"time"

	"ms_campus_kid_school/src/connection"
	"ms_campus_kid_school/src/routes"

	"github.com/gorilla/mux"
)

func main() {
	// Ping database
	db, err := connection.GetDB()
	if err != nil {
		log.Printf("Error with database" + err.Error())
		return
	} else {
		err = db.Ping()
		if err != nil {
			log.Printf("Error making connection to DB. Please check credentials. The error is: " + err.Error())
			return
		}
	}
	// Define routes
	router := mux.NewRouter()
	routes.SetupRoutesForSites(router)
	routes.SetupRoutesForFaculties(router)
	routes.SetupRoutesForCareers(router)

	// Setup and start server
	port := ":4004"

	server := &http.Server{
		Handler: router,
		Addr:    port,
		// timeouts so the server never waits forever...
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}
	log.Printf("Server started at %s", port)
	log.Fatal(server.ListenAndServe())
}
