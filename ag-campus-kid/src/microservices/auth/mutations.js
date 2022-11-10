"use strict";

const { HttpProvider } = require("../../providers");

const baseUrl = process.env.MS_AUTH_BASE_URL;

module.exports = {
  login: async (root, { data }) => {
    return await HttpProvider.post(`${baseUrl}/auth/login`, data);
  },
  createUser: async (root, { data }) => {
    console.log(root)
    return await HttpProvider.post(`${baseUrl}/users`, data);
  },
};
