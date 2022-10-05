package controllers

import (
	"ms_campus_kid_school/src/connection"
	"ms_campus_kid_school/src/type_defs"
)

func CreateSite(site type_defs.Site) error {
	bd, err := connection.GetDB()
	if err != nil {
		return err
	}
	_, err = bd.Exec("INSERT INTO Site VALUES (?, ?)", site.Id_site, site.Site_name)
	return err
}

func DeleteSite(id string) error {

	bd, err := connection.GetDB()
	if err != nil {
		return err
	}
	_, err = bd.Exec("DELETE FROM Site WHERE id_site = ?", id)
	return err
}

// It takes the ID to make the update
func UpdateSite(site type_defs.Site) error {
	bd, err := connection.GetDB()
	if err != nil {
		return err
	}
	_, err = bd.Exec("UPDATE Site SET site_name = ? WHERE id_site = ?", site.Site_name, site.Id_site)
	return err
}
func GetSites() ([]type_defs.Site, error) {
	//Declare an array because if there's error, we return it empty
	sites := []type_defs.Site{}
	bd, err := connection.GetDB()
	if err != nil {
		return sites, err
	}
	// Get rows so we can iterate them
	rows, err := bd.Query("SELECT id_site, site_name FROM Site")
	if err != nil {
		return sites, err
	}
	// Iterate rows...
	for rows.Next() {
		// In each step, scan one row
		var site type_defs.Site
		err = rows.Scan(&site.Id_site, &site.Site_name)
		if err != nil {
			return sites, err
		}
		// and append it to the array
		sites = append(sites, site)
	}
	return sites, nil
}

func GetSitesById(id string) (type_defs.Site, error) {
	var site type_defs.Site
	bd, err := connection.GetDB()
	if err != nil {
		return site, err
	}
	row := bd.QueryRow("SELECT id_site, site_name FROM Site where id_site = ?", id)
	err = row.Scan(&site.Id_site, &site.Site_name)
	if err != nil {
		return site, err
	}
	// Success!
	return site, nil
}

func GetSitesByName(name string) (type_defs.Site, error) {
	var site type_defs.Site
	bd, err := connection.GetDB()
	if err != nil {
		return site, err
	}
	row := bd.QueryRow("SELECT id_site, site_name FROM Site where site_name = ?", name)
	err = row.Scan(&site.Id_site, &site.Site_name)
	if err != nil {
		return site, err
	}
	// Success!
	return site, nil
}
