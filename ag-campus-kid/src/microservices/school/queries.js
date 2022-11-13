"use strict";

const { HttpProvider } = require("../../providers");

const baseUrl = process.env.MS_SCHOOL_BASE_URL;

module.exports = {
  //getters
  getSites: async () => {
    return await HttpProvider.get(`${baseUrl}/api/sites`);
  },
  getFaculties: async () => {
    return await HttpProvider.get(`${baseUrl}/api/faculties`);
  },
  getCareers: async () => {
    return await HttpProvider.get(`${baseUrl}/api/careers`);
  },

  //getters by id
  getSiteById: async (root,{ id }) => {
    return await HttpProvider.get(`${baseUrl}/api/sites/${id}`);
  },
  getFacultyById: async (root,{ id }) => {
    return await HttpProvider.get(`${baseUrl}/api/faculties/${id}`);
  },
  getCareerById: async (root,{ id }) => {
    return await HttpProvider.get(`${baseUrl}/api/careers/${id}`);
  }
};
