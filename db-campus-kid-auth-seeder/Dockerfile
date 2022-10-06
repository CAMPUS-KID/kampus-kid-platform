FROM mongo

COPY roles-seeder.json /roles-seeder.json
CMD mongoimport --host $DB_HOST --port $DB_PORT --authenticationDatabase admin --username $DB_USER --password $DB_PASSWORD --db $DB_NAME --collection roles --type json --file /roles-seeder.json --jsonArray