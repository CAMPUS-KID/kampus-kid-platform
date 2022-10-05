package utils

type Site struct {
	Id_Site   int64  `json:"id_site"`
	Site_Name string `json:"site_name"`
	Site_Code string `json:"site_code"`
}

type Faculty struct {
	Id_Faculty   int64  `json:"id_faculty"`
	Faculty_Name string `json:"faculty_name"`
	Faculty_Code string `json:"faculty_code"`
	Id_Site      string `json:"id_site"`
}

type Career struct {
	Id_Career   int64  `json:"id_career"`
	Career_Name string `json:"career_name"`
	Id_Faculty  string `json:"id_faculty"`
}
