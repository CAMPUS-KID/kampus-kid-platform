"use strict";

const { HttpProvider } = require("../../providers");

const baseUrl = process.env.MS_AUTH_BASE_URL;

module.exports = {
  athorize: async (root, { token }) => {
    return await HttpProvider.postGeneral(`${baseUrl}/test/user`, {}, token);
  },
};
