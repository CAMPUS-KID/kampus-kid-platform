"use strict";

const { RoleEnum } = require("../../constants");
const { HttpProvider } = require("../../providers");
const { RequestPermissions } = require("../../providers/permissions");

const baseUrl = process.env.MS_GRADES_BASE_URL;

module.exports = {
  createGrades: async (root, { data }) => {
    RequestPermissions(currentUser, [RoleEnum.TEACHER]);
    return await HttpProvider.post(`${baseUrl}/app/grades`, data);
  },
  updateGrades: async (root, { id }) => {
    RequestPermissions(currentUser, [RoleEnum.TEACHER]);
    return await HttpProvider.put(`${baseUrl}/app/grades/${id}`);
  },
  deleteGrades: async (root, { id }) => {
    RequestPermissions(currentUser, [RoleEnum.TEACHER]);
    return await HttpProvider.deleted(`${baseUrl}/app/grades/${id}`);
  },
};
