package controllers

import (
	"ms_campus_kid_school/src/connection"
	"ms_campus_kid_school/src/utils"
)

//function that inserts a new field in the table "SITE"
func CreateSite(site utils.Site) error {
	db, err := connection.GetDB()
	if err != nil {
		return err
	}
	_, err = db.Exec("INSERT INTO SITE(name, code) VALUES (?, ?)", site.Name, site.Code)
	return err
}

//function that deletes a row in the table "SITE"
func DeleteSite(id int64) error {
	db, err := connection.GetDB()
	if err != nil {
		return err
	}
	_, err = db.Exec("DELETE FROM SITE WHERE id = ?", id)
	return err
}

//function that updates a row in the table "SITE"
func UpdateSite(site utils.Site) error {
	db, err := connection.GetDB()
	if err != nil {
		return err
	}
	_, err = db.Exec("UPDATE SITE SET name = ?, code = ? WHERE id = ?", site.Name, site.Code, site.Id)
	return err
}

//function that returns all the fields of the table "SITE"
func GetSites() ([]utils.Site, error) {
	//Declare an array because if there's error, we return it empty
	sites := []utils.Site{}
	db, err := connection.GetDB()
	if err != nil {
		return sites, err
	}
	// Get rows so we can iterate them
	rows, err := db.Query("SELECT * FROM SITE")
	if err != nil {
		return sites, err
	}
	// Iterate rows...
	for rows.Next() {
		// In each step, scan one row
		var site utils.Site
		err = rows.Scan(&site.Id, &site.Name, &site.Code)
		if err != nil {
			return sites, err
		}
		// and append it to the array
		sites = append(sites, site)
	}
	return sites, nil
}

//function that returns a field from the table "SITE"
func GetSitesById(id int64) (utils.Site, error) {
	var site utils.Site
	db, err := connection.GetDB()
	if err != nil {
		return site, err
	}
	row := db.QueryRow("SELECT * FROM SITE where id = ?", id)
	err = row.Scan(&site.Id, &site.Name, &site.Code)
	if err != nil {
		return site, err
	}

	return site, nil
}
