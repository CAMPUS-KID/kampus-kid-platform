"use strict";

const { HttpProvider } = require("../../providers");
const { RoleEnum } = require("../../constants");
const { RequestPermissions } = require("../../providers/permissions");

const baseUrl = process.env.MS_AUTH_BASE_URL;

module.exports = {
  login: async (root, { data }) => {
    return await HttpProvider.post(`${baseUrl}/auth/login`, data);
  },
  createUser: async ({ currentUser }, { data }) => {
    RequestPermissions(currentUser, [RoleEnum.ADMIN]);
    return await HttpProvider.post(`${baseUrl}/users`, data);
  },
};
