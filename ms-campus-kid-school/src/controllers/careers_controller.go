package controllers

import (
	"ms_campus_kid_school/src/connection"
	"ms_campus_kid_school/src/utils"
)

func CreateCareer(career utils.Career) error {
	bd, err := connection.GetDB()
	if err != nil {
		return err
	}
	_, err = bd.Exec("INSERT INTO Career(Career_Name, Id_Faculty) VALUES (?, ?)", career.Career_Name, career.Id_Faculty)
	return err
}

func DeleteCareer(id int64) error {

	bd, err := connection.GetDB()
	if err != nil {
		return err
	}
	_, err = bd.Exec("DELETE FROM Career WHERE Id_Career = ?", id)
	return err
}

// It takes the ID to make the update
func UpdateCareer(career utils.Career) error {
	bd, err := connection.GetDB()
	if err != nil {
		return err
	}
	_, err = bd.Exec("UPDATE Career SET career_Name = ?, Id_Faculty = ? WHERE Id_Career = ?", career.Career_Name, career.Id_Faculty, career.Id_Career)
	return err
}
func GetCareers() ([]utils.Career, error) {
	//Declare an array because if there's error, we return it empty
	careers := []utils.Career{}
	bd, err := connection.GetDB()
	if err != nil {
		return careers, err
	}
	// Get rows so we can iterate them
	rows, err := bd.Query("SELECT * FROM Career")
	if err != nil {
		return careers, err
	}
	// Iterate rows...
	for rows.Next() {
		// In each step, scan one row
		var career utils.Career
		err = rows.Scan(&career.Id_Career, &career.Career_Name, &career.Id_Faculty)
		if err != nil {
			return careers, err
		}
		// and append it to the array
		careers = append(careers, career)
	}
	return careers, nil
}

func GetCareersById(id int64) (utils.Career, error) {
	var career utils.Career
	bd, err := connection.GetDB()
	if err != nil {
		return career, err
	}
	row := bd.QueryRow("SELECT * FROM Career where Id_Career = ?", id)
	err = row.Scan(&career.Id_Career, &career.Career_Name, &career.Id_Faculty)
	if err != nil {
		return career, err
	}
	// Success!
	return career, nil
}
