package controllers

import (
	"ms_campus_kid_school/src/connection"
	"ms_campus_kid_school/src/utils"
)

//function that inserts a new field in the table "CAREER"
func CreateCareer(career utils.Career) error {
	db, err := connection.GetDB()
	if err != nil {
		return err
	}
	_, err = db.Exec("INSERT INTO CAREER(name, facultyId) VALUES (?, ?)", career.Name, career.FacultyId)
	return err
}

//function that deletes a row in the table "CAREER"
func DeleteCareer(id int64) error {
	db, err := connection.GetDB()
	if err != nil {
		return err
	}
	_, err = db.Exec("DELETE FROM CAREER WHERE id = ?", id)
	return err
}

//function that updates a row in the table "CAREER"
func UpdateCareer(career utils.Career) error {
	db, err := connection.GetDB()
	if err != nil {
		return err
	}
	_, err = db.Exec("UPDATE CAREER SET name = ?, facultyId = ? WHERE id = ?", career.Name, career.FacultyId, career.Id)
	return err
}

//function that returns all the fields of the table "CAREER"
func GetCareers() ([]utils.Career, error) {
	careers := []utils.Career{}
	db, err := connection.GetDB()
	if err != nil {
		return careers, err
	}
	// Get rows so we can iterate them
	rows, err := db.Query("SELECT * FROM CAREER")
	if err != nil {
		return careers, err
	}
	// Iterate rows...
	for rows.Next() {
		// In each step, scan one row
		var career utils.Career
		err = rows.Scan(&career.Id, &career.Name, &career.FacultyId)
		if err != nil {
			return careers, err
		}
		// and append it to the array
		careers = append(careers, career)
	}
	return careers, nil
}

//function that returns a field from the table "CAREER"
func GetCareersById(id int64) (utils.Career, error) {
	var career utils.Career
	db, err := connection.GetDB()
	if err != nil {
		return career, err
	}
	row := db.QueryRow("SELECT * FROM CAREER where id = ?", id)
	err = row.Scan(&career.Id, &career.Name, &career.FacultyId)
	if err != nil {
		return career, err
	}

	return career, nil
}
