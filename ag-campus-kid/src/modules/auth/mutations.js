"use strict";

const { HttpProvider } = require("../../providers");
const { HttpErrorEnum } = require('../../constants')

const baseUrl = process.env.MS_AUTH_BASE_URL;

module.exports = {
  login: async (root, { data }) => {
    return await HttpProvider.post(`${baseUrl}/auth/login`, data);
  },
  authorize: async ({ currentUser }) => {
    if(!currentUser) throw new Error(HttpErrorEnum.UNAUTHORIZED);
    return currentUser;
  }
};
