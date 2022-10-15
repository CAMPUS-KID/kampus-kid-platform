package controllers

import (
	"ms_campus_kid_school/src/connection"
	"ms_campus_kid_school/src/utils"
)

//function that inserts a new field in the table "Faculty"
func CreateFaculty(faculty *utils.Faculty) error {
	db, err := connection.GetDB()
	if err != nil {
		return err
	}
	_, err = db.Exec("INSERT INTO Faculty(name, code, siteId) VALUES (?, ?, ?)", faculty.Name, faculty.Code, faculty.SiteId)

	row := db.QueryRow("SELECT * FROM Faculty where name = ? AND code = ? AND siteId = ?", faculty.Name, faculty.Code, faculty.SiteId)
	err = row.Scan(&faculty.Id, &faculty.Name, &faculty.Code, &faculty.SiteId)
	if err != nil {
		return err
	}

	return err
}

//function that deletes a row in the table "Faculty"
func DeleteFaculty(id int64) error {
	db, err := connection.GetDB()
	if err != nil {
		return err
	}
	_, err = db.Exec("DELETE FROM Faculty WHERE id = ?", id)
	return err
}

//function that updates a row in the table "Faculty"
func UpdateFaculty(faculty *utils.Faculty) error {
	db, err := connection.GetDB()
	if err != nil {
		return err
	}
	_, err = db.Exec("UPDATE Faculty SET name = ?, code = ?,  siteId = ? WHERE id = ?", faculty.Name, faculty.Code, faculty.SiteId, faculty.Id)

	row := db.QueryRow("SELECT * FROM Faculty where id = ?", faculty.Id)
	err = row.Scan(&faculty.Id, &faculty.Name, &faculty.Code, &faculty.SiteId)
	if err != nil {
		return err
	}

	return err
}

//function that returns all the fields of the table "Faculty"
func GetFaculties() ([]utils.Faculty, error) {
	//Declare an array because if there's error, we return it empty
	faculties := []utils.Faculty{}
	db, err := connection.GetDB()
	if err != nil {
		return faculties, err
	}
	// Get rows so we can iterate them
	rows, err := db.Query("SELECT * FROM Faculty")
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

//function that returns a field from the table "Faculty"
func GetFacultiesById(id int64) (utils.Faculty, error) {
	var faculty utils.Faculty
	db, err := connection.GetDB()
	if err != nil {
		return faculty, err
	}
	row := db.QueryRow("SELECT * FROM Faculty where id = ?", id)
	err = row.Scan(&faculty.Id, &faculty.Name, &faculty.Code, &faculty.SiteId)
	if err != nil {
		return faculty, err
	}

	return faculty, nil
}
