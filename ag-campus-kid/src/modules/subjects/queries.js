"use strict";

const { HttpProvider } = require("../../providers");

const baseUrl = process.env.MS_SUBJECTS_BASE_URL;

module.exports = {
  getSubjects: async () => {
    return await HttpProvider.get(`${baseUrl}/api/course`);
  },
  getSubjectsById: async (root,{id}) => {
    return await HttpProvider.get(`${baseUrl}/api/course/${id}`);
  },
  searchSubject: async (root,{query}) => {
    return await HttpProvider.get(`${baseUrl}/api/course/Search?query=${query}`);
  },
};
