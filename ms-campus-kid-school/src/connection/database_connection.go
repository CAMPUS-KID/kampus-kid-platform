package connection

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

//function that returns the database connection
func GetDB() (*sql.DB, error) {
	return sql.Open("mysql", ConnectionString)
}
