"use strict";

const { HttpProvider } = require("../../providers");

const baseUrl = process.env.MS_SUBJECTS_BASE_URL;

module.exports = {
  getSubjects: async () => {
    return await HttpProvider.get(`${baseUrl}/api/course`);
  },
};
