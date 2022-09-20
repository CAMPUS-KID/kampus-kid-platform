package main

func createCareer(career Career) error {
	bd, err := getDB()
	if err != nil {
		return err
	}
	_, err = bd.Exec("INSERT INTO Career VALUES (?, ?, ?)", career.Id_career, career.Career_name, career.Id_faculty)
	return err
}

func deleteCareer(id string) error {

	bd, err := getDB()
	if err != nil {
		return err
	}
	_, err = bd.Exec("DELETE FROM Career WHERE id_career = ?", id)
	return err
}

// It takes the ID to make the update
func updateCareer(career Career) error {
	bd, err := getDB()
	if err != nil {
		return err
	}
	_, err = bd.Exec("UPDATE Career SET career_name = ?, id_faculty = ? WHERE id_career = ?", career.Career_name, career.Id_faculty, career.Id_career)
	return err
}
func getCareers() ([]Career, error) {
	//Declare an array because if there's error, we return it empty
	careers := []Career{}
	bd, err := getDB()
	if err != nil {
		return careers, err
	}
	// Get rows so we can iterate them
	rows, err := bd.Query("SELECT id_career, career_name, id_faculty FROM Career")
	if err != nil {
		return careers, err
	}
	// Iterate rows...
	for rows.Next() {
		// In each step, scan one row
		var career Career
		err = rows.Scan(&career.Id_career, &career.Career_name, &career.Id_faculty)
		if err != nil {
			return careers, err
		}
		// and append it to the array
		careers = append(careers, career)
	}
	return careers, nil
}

func getCareersById(id string) (Career, error) {
	var career Career
	bd, err := getDB()
	if err != nil {
		return career, err
	}
	row := bd.QueryRow("SELECT id_career, career_name, id_faculty FROM Career where id_career = ?", id)
	err = row.Scan(&career.Id_career, &career.Career_name, &career.Id_faculty)
	if err != nil {
		return career, err
	}
	// Success!
	return career, nil
}
