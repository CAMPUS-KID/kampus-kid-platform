# Talkeva API 1.0

[Full deployed project](https://ptpper.com.co/)

## Lets begin

_The following instructions can get the project running on your environment._


### Before

_Follow this steps to be able of see the project running on your local environment._


First, download and install [node.js](https://nodejs.org/en/) 

Install express

```
npm install express --save
```

Install the sequelize command line interface

```
npm install -g sequelize-cli
```

Finally the node module for sequelize

```
npm install --save sequelize
```

Now the database, which is [postgres](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)

We need a postgres module to get connected with node

```
npm install --save pg pg-hstore
```

Finally lets install a node process monitor for the development environment

```
npm install -g nodemon
```

To be able of track the location of the users on the database, you need to install [postgis](https://postgis.net/install/).


### Then, when the environment is prepared


_First, on the back folder lets install the node dependencies_

```
npm install
```

_Before setup postgres, lets create a user_

_for the development environment the default user is root and the default password is 1234_

```
psql postgres postgres
CREATE ROLE root WITH LOGIN PASSWORD '1234';
ALTER ROLE root CREATEDB;
```

_To configure the database run the following scripts depending on your operative system_

_For a windows system run the batch file in the back folder_

```
reboot-database.bat
```
_For a unix based system run the shell script in the back folder_

```
reboot-database.sh
```
_In order to run the application, we need to start the backend server and the angular server_

_In the back folder run_

```
nodemon
```

## Authors 

* **Jhonatan Torres** - [jhonatan247](https://github.com/jhonatan247)
