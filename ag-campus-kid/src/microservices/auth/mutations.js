"use strict";

const { HttpProvider } = require("../../providers");

const baseUrl = process.env.MS_AUTH_BASE_URL;

module.exports = {
  login: async (root, { data }) => {
    return await HttpProvider.post(`${baseUrl}/auth/login`, data);
  },
  signup: async (root, { data }) => {
    return await HttpProvider.post(`${baseUrl}/auth/signup`, data);
  },
};
