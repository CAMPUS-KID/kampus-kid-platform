package main

func createSite(site Site) error {
	bd, err := getDB()
	if err != nil {
		return err
	}
	_, err = bd.Exec("INSERT INTO Site VALUES (?, ?)", site.Id_site, site.Site_name)
	return err
}

func deleteSite(id string) error {

	bd, err := getDB()
	if err != nil {
		return err
	}
	_, err = bd.Exec("DELETE FROM Site WHERE id_site = ?", id)
	return err
}

// It takes the ID to make the update
func updateSite(site Site) error {
	bd, err := getDB()
	if err != nil {
		return err
	}
	_, err = bd.Exec("UPDATE Site SET site_name = ? WHERE id_site = ?", site.Site_name, site.Id_site)
	return err
}
func getSites() ([]Site, error) {
	//Declare an array because if there's error, we return it empty
	sites := []Site{}
	bd, err := getDB()
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
		var site Site
		err = rows.Scan(&site.Id_site, &site.Site_name)
		if err != nil {
			return sites, err
		}
		// and append it to the array
		sites = append(sites, site)
	}
	return sites, nil
}

func getSitesById(id string) (Site, error) {
	var site Site
	bd, err := getDB()
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

func getSitesByName(name string) (Site, error) {
	var site Site
	bd, err := getDB()
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
