package controllers

import (
	"ms_campus_kid_school/src/connection"
	"ms_campus_kid_school/src/type_defs"
)

func CreateFaculty(faculty type_defs.Faculty) error {
	bd, err := connection.GetDB()
	if err != nil {
		return err
	}
	_, err = bd.Exec("INSERT INTO Faculty VALUES (?, ?, ?)", faculty.Id_faculty, faculty.Faculty_name, faculty.Id_site)
	return err
}

func DeleteFaculty(id string) error {

	bd, err := connection.GetDB()
	if err != nil {
		return err
	}
	_, err = bd.Exec("DELETE FROM Faculty WHERE id_faculty = ?", id)
	return err
}

// It takes the ID to make the update
func UpdateFaculty(faculty type_defs.Faculty) error {
	bd, err := connection.GetDB()
	if err != nil {
		return err
	}
	_, err = bd.Exec("UPDATE Faculty SET faculty_name = ?, id_site = ? WHERE id_faculty = ?", faculty.Faculty_name, faculty.Id_site, faculty.Id_faculty)
	return err
}
func GetFacultys() ([]type_defs.Faculty, error) {
	//Declare an array because if there's error, we return it empty
	facultys := []type_defs.Faculty{}
	bd, err := connection.GetDB()
	if err != nil {
		return facultys, err
	}
	// Get rows so we can iterate them
	rows, err := bd.Query("SELECT id_faculty, faculty_name, id_site FROM Faculty")
	if err != nil {
		return facultys, err
	}
	// Iterate rows...
	for rows.Next() {
		// In each step, scan one row
		var faculty type_defs.Faculty
		err = rows.Scan(&faculty.Id_faculty, &faculty.Faculty_name, &faculty.Id_site)
		if err != nil {
			return facultys, err
		}
		// and append it to the array
		facultys = append(facultys, faculty)
	}
	return facultys, nil
}

func GetFacultysById(id string) (type_defs.Faculty, error) {
	var faculty type_defs.Faculty
	bd, err := connection.GetDB()
	if err != nil {
		return faculty, err
	}
	row := bd.QueryRow("SELECT id_faculty, faculty_name, id_site FROM Faculty where id_faculty = ?", id)
	err = row.Scan(&faculty.Id_faculty, &faculty.Faculty_name, &faculty.Id_site)
	if err != nil {
		return faculty, err
	}
	// Success!
	return faculty, nil
}
