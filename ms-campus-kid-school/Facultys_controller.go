package main

func createFaculty(faculty Faculty) error {
	bd, err := getDB()
	if err != nil {
		return err
	}
	_, err = bd.Exec("INSERT INTO Faculty VALUES (?, ?, ?)", faculty.Id_faculty, faculty.Faculty_name, faculty.Id_site)
	return err
}

func deleteFaculty(id string) error {

	bd, err := getDB()
	if err != nil {
		return err
	}
	_, err = bd.Exec("DELETE FROM Faculty WHERE id_faculty = ?", id)
	return err
}

// It takes the ID to make the update
func updateFaculty(faculty Faculty) error {
	bd, err := getDB()
	if err != nil {
		return err
	}
	_, err = bd.Exec("UPDATE Faculty SET faculty_name = ?, id_site = ? WHERE id_faculty = ?", faculty.Faculty_name, faculty.Id_site, faculty.Id_faculty)
	return err
}
func getFacultys() ([]Faculty, error) {
	//Declare an array because if there's error, we return it empty
	facultys := []Faculty{}
	bd, err := getDB()
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
		var faculty Faculty
		err = rows.Scan(&faculty.Id_faculty, &faculty.Faculty_name, &faculty.Id_site)
		if err != nil {
			return facultys, err
		}
		// and append it to the array
		facultys = append(facultys, faculty)
	}
	return facultys, nil
}

func getFacultysById(id string) (Faculty, error) {
	var faculty Faculty
	bd, err := getDB()
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
