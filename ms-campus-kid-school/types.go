package main

type Site struct {
	Id_site   string `json:"id_site"`
	Site_name string `json:"site_name"`
}

type Faculty struct {
	Id_faculty   string `json:"id_faculty"`
	Faculty_name string `json:"faculty_name"`
	Id_site      string `json:"id_site"`
}

type Career struct {
	Id_career   string `json:"id_career"`
	Career_name string `json:"career_name"`
	Id_faculty  string `json:"id_faculty"`
}
