package utils

//struct that represent the json fields of SITE
type Site struct {
	Id   int64  `json:"id"`
	Name string `json:"name"`
	Code string `json:"code"`
}

//struct that represent the json fields of FACULTY
type Faculty struct {
	Id     int64  `json:"id"`
	Name   string `json:"name"`
	Code   string `json:"code"`
	SiteId int64  `json:"siteId"`
}

//struct that represent the json fields of CAREER
type Career struct {
	Id        int64  `json:"id"`
	Name      string `json:"name"`
	FacultyId int64  `json:"facultyId"`
}
