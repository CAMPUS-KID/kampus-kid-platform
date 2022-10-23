"use strict";

const { HttpProvider } = require("../../providers");

const baseUrl = process.env.MS_GRADES_BASE_URL;

module.exports = {
  getGrades: async () => {
    return await HttpProvider.get(`${baseUrl}/app/grades`);
  },
  getGradeById: async (id) => {
    return await HttpProvider.get(`${baseUrl}/app/grades`+id);
  },
};
