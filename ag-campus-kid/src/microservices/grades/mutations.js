"use strict";

const { HttpProvider } = require("../../providers");

const baseUrl = process.env.MS_GRADES_BASE_URL;

module.exports = {
  createGrades: async (root, { data }) => {
    return await HttpProvider.post(`${baseUrl}/app/grades`, data);
  },
  updateGrades: async (root, {id}) => {
    return await HttpProvider.put(`${baseUrl}/app/grades/${id}`);
  },
  deleteGrades: async (root, {id}) => {
    return await HttpProvider.deleted(`${baseUrl}/app/grades/${id}`);
  },
};
