package controllers

import (
	"ms_campus_kid_school/src/connection"
	"ms_campus_kid_school/src/utils"
)

//function that inserts a new field in the table "FACULTY"
func CreateFaculty(faculty utils.Faculty) error {
	db, err := connection.GetDB()
	if err != nil {
		return err
	}
	_, err = db.Exec("INSERT INTO FACULTY(name, code, siteId) VALUES (?, ?, ?)", faculty.Name, faculty.Code, faculty.SiteId)
	return err
}

//function that deletes a row in the table "FACULTY"
func DeleteFaculty(id int64) error {
	db, err := connection.GetDB()
	if err != nil {
		return err
	}
	_, err = db.Exec("DELETE FROM FACULTY WHERE id = ?", id)
	return err
}

//function that updates a row in the table "FACULTY"
func UpdateFaculty(faculty utils.Faculty) error {
	db, err := connection.GetDB()
	if err != nil {
		return err
	}
	_, err = db.Exec("UPDATE FACULTY SET name = ?, code = ?,  siteId = ? WHERE id = ?", faculty.Name, faculty.Code, faculty.SiteId, faculty.Id)
	return err
}

//function that returns all the fields of the table "FACULTY"
func GetFaculties() ([]utils.Faculty, error) {
	//Declare an array because if there's error, we return it empty
	faculties := []utils.Faculty{}
	db, err := connection.GetDB()
	if err != nil {
		return faculties, err
	}
	// Get rows so we can iterate them
	rows, err := db.Query("SELECT * FROM FACULTY")
	if err != nil {
		return faculties, err
	}
	// Iterate rows...
	for rows.Next() {
		// In each step, scan one row
		var faculty utils.Faculty
		err = rows.Scan(&faculty.Id, &faculty.Name, &faculty.Code, &faculty.SiteId)
		if err != nil {
			return faculties, err
		}
		// and append it to the array
		faculties = append(faculties, faculty)
	}
	return faculties, nil
}

//function that returns a field from the table "FACULTY"
func GetFacultiesById(id int64) (utils.Faculty, error) {
	var faculty utils.Faculty
	db, err := connection.GetDB()
	if err != nil {
		return faculty, err
	}
	row := db.QueryRow("SELECT * FROM FACULTY where id = ?", id)
	err = row.Scan(&faculty.Id, &faculty.Name, &faculty.Code, &faculty.SiteId)
	if err != nil {
		return faculty, err
	}

	return faculty, nil
}
