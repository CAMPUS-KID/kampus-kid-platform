import sys
sys.dont_write_bytecode = True

import psycopg2
from psycopg2 import DatabaseError
from decouple import config

def get_connection():
    try:
        return psycopg2.connect(
            port = config('DB_PORT'),
            host = config('DB_HOST'),
            user = config('DB_USER'),
            password = config('DB_PASSWORD'),
            database = config('DB_NAME')
        )
    except DatabaseError as ex:
        raise ex