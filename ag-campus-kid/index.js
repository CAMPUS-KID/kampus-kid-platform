"use strict";

const env = process.env.NODE_ENV || "development";
require("dotenv").config({ path: `./environment/.env.${env}` });

const cors = require("cors");

const { stitchSchemas } = require("@graphql-tools/stitch");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { HttpErrors } = require("./src/constants");
const { AuthMiddleware } = require("./src/middlewares/auth");
const {
  AuthModule,
  SchoolModule,
  SubjectModule,
  GradeModule,
  ScheduleModule,
  AccountModule
} = require("./src/modules");

const schema = stitchSchemas({
  subschemas: [
    { schema: AuthModule, batch: true },
    { schema: SchoolModule, batch: true },
    { schema: SubjectModule, batch: true },
    { schema: GradeModule, batch: true },
    { schema: ScheduleModule, batch: true },
    { schema: AccountModule, batch: true },
  ],
});

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(AuthMiddleware);
app.use(
  "/api",
  graphqlHTTP(async (request) => ({
    schema: schema,
    graphiql: process.env.NODE_ENV !== "production",
    rootValue: {
      currentUser: request.currentUser,
    },
    customFormatErrorFn: (error) => {
      const httpError = HttpErrors[error.message];
      if (httpError) {
        return httpError;
      }
      return error;
    },
  }))
);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`);
});
