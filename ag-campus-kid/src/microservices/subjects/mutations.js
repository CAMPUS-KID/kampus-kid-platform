"use strict";

const { HttpProvider } = require("../../providers");

const baseUrl = process.env.MS_SUBJECTS_BASE_URL;

module.exports = {
  createSubject: async (root, { data }) => {
    return await HttpProvider.post(`${baseUrl}/api/course`, data);
  }
};
