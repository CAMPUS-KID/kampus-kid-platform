"use strict";

// const env = process.env.NODE_ENV || 'development';
// require('dotenv').config({ path: `./environment/.env.${env}` });

const cors = require("cors");

const { stitchSchemas } = require("@graphql-tools/stitch");
const express = require("express");
const gqlMiddleware = require("express-graphql");

const RealtimeSquema = require("./src/microservices/realtime");
const TransportSquema = require("./src/microservices/transport");
const JoinRoutesSquema = require("./src/microservices/joint-routes");
const UserSquema = require("./src/microservices/user");
const auth = require("./src/microservices/auth");
const SocialSquema = require('./src/microservices/social');

const schema = stitchSchemas({
  subschemas: [
    { schema: RealtimeSquema, batch: true },
    { schema: TransportSquema, batch: true },
    { schema: JoinRoutesSquema, batch: true },
    { schema: UserSquema, batch: true },
    { schema: auth, batch: true },
    { schema: SocialSquema, batch: true },
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
