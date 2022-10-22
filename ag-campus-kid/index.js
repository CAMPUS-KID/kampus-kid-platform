"use strict";

const env = process.env.NODE_ENV || 'development';
require('dotenv').config({ path: `./environment/.env.${env}` });

const cors = require("cors");

const { stitchSchemas } = require("@graphql-tools/stitch");
const express = require("express");
const gqlMiddleware = require("express-graphql");

const auth = require("./src/microservices/auth");
const school = require("./src/microservices/school");
const subjects= require("./src/microservices/subjects");
const grades = require("./src/microservices/grades");

const schema = stitchSchemas({
  subschemas: [
    { schema: auth, batch: true },
    { schema: school, batch: true },
    { schema: subjects, batch: true },
    { schema: grades, batch: true }
  ],
});

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(
  "/api",
  gqlMiddleware({
    schema: schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`);
});
