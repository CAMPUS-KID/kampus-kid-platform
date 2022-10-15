"use strict";

const { HttpProvider } = require("../../providers");

const baseUrl = process.env.MS_SCHOOL_BASE_URL;

module.exports = {
  getSites: async () => {
    return await HttpProvider.get(`${baseUrl}/sites`);
  },
};
