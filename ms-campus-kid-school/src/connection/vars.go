package connection

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
)

var _ = godotenv.Load(".env") // Cargar del archivo llamado ".env"
var (
	ConnectionString = fmt.Sprintf("%s:%s@tcp(%s:%s)/%s",
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_HOST"),
		os.Getenv("DB_PORT"),
		os.Getenv("DB_NAME"))
)
