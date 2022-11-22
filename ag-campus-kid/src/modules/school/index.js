"use strict";

const { makeExecutableSchema } = require("graphql-tools");
const { readFileSync } = require("fs");
const { join } = require("path");

const Mutation = require("./mutations");
const Query = require("./queries");

const typeDefs = readFileSync(join(__dirname, "schema.graphql"), "utf-8");

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers: { Query, Mutation },
});
