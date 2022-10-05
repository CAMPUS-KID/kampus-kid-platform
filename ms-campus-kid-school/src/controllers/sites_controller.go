package controllers

import (
	"ms_campus_kid_school/src/connection"
	"ms_campus_kid_school/src/utils"
)

func CreateSite(site utils.Site) error {
	bd, err := connection.GetDB()
	if err != nil {
		return err
	}
	_, err = bd.Exec("INSERT INTO Site(name, code) VALUES (?, ?)", site.Site_Name, site.Site_Code)
	return err
}

func DeleteSite(id int64) error {

	bd, err := connection.GetDB()
	if err != nil {
		return err
	}
	_, err = bd.Exec("DELETE FROM Site WHERE id = ?", id)
	return err
}

// It takes the ID to make the update
func UpdateSite(site utils.Site) error {
	bd, err := connection.GetDB()
	if err != nil {
		return err
	}
	_, err = bd.Exec("UPDATE Site SET name = ?, code = ? WHERE id = ?", site.Site_Name, site.Site_Code, site.Id_Site)
	return err
}
func GetSites() ([]utils.Site, error) {
	//Declare an array because if there's error, we return it empty
	sites := []utils.Site{}
	bd, err := connection.GetDB()
	if err != nil {
		return sites, err
	}
	// Get rows so we can iterate them
	rows, err := bd.Query("SELECT * FROM Site")
	if err != nil {
		return sites, err
	}
	// Iterate rows...
	for rows.Next() {
		// In each step, scan one row
		var site utils.Site
		err = rows.Scan(&site.Id_Site, &site.Site_Name, &site.Site_Code)
		if err != nil {
			return sites, err
		}
		// and append it to the array
		sites = append(sites, site)
	}
	return sites, nil
}

func GetSitesById(id int64) (utils.Site, error) {
	var site utils.Site
	bd, err := connection.GetDB()
	if err != nil {
		return site, err
	}
	row := bd.QueryRow("SELECT * FROM Site where id = ?", id)
	err = row.Scan(&site.Id_Site, &site.Site_Name, &site.Site_Code)
	if err != nil {
		return site, err
	}
	// Success!
	return site, nil
}
