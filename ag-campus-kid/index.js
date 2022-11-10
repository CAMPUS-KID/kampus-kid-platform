"use strict";

const env = process.env.NODE_ENV || 'development';
require('dotenv').config({ path: `./environment/.env.${env}` });

const cors = require("cors");

const { stitchSchemas } = require("@graphql-tools/stitch");
const express = require("express");
const { graphqlHTTP } = require('express-graphql');

const auth = require("./src/microservices/auth");
const school = require("./src/microservices/school");
const subjects = require("./src/microservices/subjects");
const grades = require("./src/microservices/grades");
const schedule = require("./src/microservices/schedule")
const { HttpErrors } = require('./src/constants');
const { AuthMiddleware } = require('./src/middlewares/auth');

const schema = stitchSchemas({
  subschemas: [
    { schema: auth, batch: true },
    { schema: school, batch: true },
    { schema: subjects, batch: true },
    { schema: grades, batch: true },
    { schema: schedule, batch: true}
  ],
});

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(AuthMiddleware)
app.use(
  "/api",
  graphqlHTTP(async (request) => ({
    schema: schema,
    graphiql: process.env != 'production',
    rootValue: {
      currentUser: request.currentUser
    },
    customFormatErrorFn: (error) => {
      const httpError = HttpErrors[error.message];
      if (httpError) {
        return httpError;
      }
      return error;
    }
  }))
);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`);
});
