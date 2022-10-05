package controllers

import (
	"ms_campus_kid_school/src/connection"
	"ms_campus_kid_school/src/utils"
)

func CreateFaculty(faculty utils.Faculty) error {
	bd, err := connection.GetDB()
	if err != nil {
		return err
	}
	_, err = bd.Exec("INSERT INTO Faculty(Faculty_Name, Faculty_Code, Id_Site) VALUES (?, ?, ?)", faculty.Faculty_Name, faculty.Faculty_Code, faculty.Id_Site)
	return err
}

func DeleteFaculty(id int64) error {

	bd, err := connection.GetDB()
	if err != nil {
		return err
	}
	_, err = bd.Exec("DELETE FROM Faculty WHERE Id_Faculty = ?", id)
	return err
}

// It takes the ID to make the update
func UpdateFaculty(faculty utils.Faculty) error {
	bd, err := connection.GetDB()
	if err != nil {
		return err
	}
	_, err = bd.Exec("UPDATE Faculty SET Faculty_Name = ?, Faculty_Code = ?,  Id_Site = ? WHERE Id_Faculty = ?", faculty.Faculty_Name, faculty.Faculty_Code, faculty.Id_Site, faculty.Id_Faculty)
	return err
}
func GetFacultys() ([]utils.Faculty, error) {
	//Declare an array because if there's error, we return it empty
	facultys := []utils.Faculty{}
	bd, err := connection.GetDB()
	if err != nil {
		return facultys, err
	}
	// Get rows so we can iterate them
	rows, err := bd.Query("SELECT * FROM Faculty")
	if err != nil {
		return facultys, err
	}
	// Iterate rows...
	for rows.Next() {
		// In each step, scan one row
		var faculty utils.Faculty
		err = rows.Scan(&faculty.Id_Faculty, &faculty.Faculty_Name, &faculty.Faculty_Code, &faculty.Id_Site)
		if err != nil {
			return facultys, err
		}
		// and append it to the array
		facultys = append(facultys, faculty)
	}
	return facultys, nil
}

func GetFacultysById(id int64) (utils.Faculty, error) {
	var faculty utils.Faculty
	bd, err := connection.GetDB()
	if err != nil {
		return faculty, err
	}
	row := bd.QueryRow("SELECT * FROM Faculty where id_faculty = ?", id)
	err = row.Scan(&faculty.Id_Faculty, &faculty.Faculty_Name, &faculty.Faculty_Code, &faculty.Id_Site)
	if err != nil {
		return faculty, err
	}
	// Success!
	return faculty, nil
}
