"use strict";

const { HttpProvider } = require("../../providers");

const baseUrl = process.env.MS_SCHOOL_BASE_URL;

module.exports = {
  createSite: async (root, { data }) => {
    return await HttpProvider.post(`${baseUrl}/sites`, data);
  }
};
