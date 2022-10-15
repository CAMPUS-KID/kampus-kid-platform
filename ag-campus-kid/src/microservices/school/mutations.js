"use strict";

const { HttpProvider } = require("../../providers");

const baseUrl = process.env.MS_SCHOOL_BASE_URL;

module.exports = {
  createSite: async (root, { data }) => {
    return await HttpProvider.post(`${baseUrl}/api/sites`, data);
  },
  createFaculty: async (root, { data }) => {
    return await HttpProvider.post(`${baseUrl}/api/faculties`, data);
  },
  createCareer: async (root, { data }) => {
    return await HttpProvider.post(`${baseUrl}/api/careers`, data);
  }
};
