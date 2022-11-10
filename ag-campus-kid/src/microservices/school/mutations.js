"use strict";

const { RoleEnum } = require("../../constants");
const { HttpProvider } = require("../../providers");
const { RequestPermissions } = require("../../providers/permissions");

const baseUrl = process.env.MS_SCHOOL_BASE_URL;

module.exports = {
  //Creators
  createSite: async ({ currentUser }, { data }) => {
    RequestPermissions(currentUser, [RoleEnum.ADMIN]);
    return await HttpProvider.post(`${baseUrl}/api/sites`, data);
  },
  createFaculty: async (root, { data }) => {
    return await HttpProvider.post(`${baseUrl}/api/faculties`, data);
  },
  createCareer: async (root, { data }) => {
    return await HttpProvider.post(`${baseUrl}/api/careers`, data);
  },

  //Updaters
  updateSite: async (root, { data }) => {
    return await HttpProvider.put(`${baseUrl}/api/sites`, data);
  },
  updateFaculty: async (root, { data }) => {
    return await HttpProvider.put(`${baseUrl}/api/faculties`, data);
  },
  updateCareer: async (root, { data }) => {
    return await HttpProvider.put(`${baseUrl}/api/careers`, data);
  },

  //Deleters
  deleteSites: async (root, { id }) => {
    return await HttpProvider.deleted(`${baseUrl}/api/sites/${id}`);
  },
  deleteFaculties: async (root, { id }) => {
    return await HttpProvider.deleted(`${baseUrl}/api/faculties/${id}`);
  },
  deleteCareers: async (root, { id }) => {
    return await HttpProvider.deleted(`${baseUrl}/api/careers/${id}`);
  }
};
