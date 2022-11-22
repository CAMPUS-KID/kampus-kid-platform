"use strict";

const { HttpProvider } = require("../../providers");
const { RoleEnum } = require("../../constants");
const { RequestPermissions } = require("../../providers/permissions");

const baseUrl = process.env.MS_GRADES_BASE_URL;

module.exports = {
  createGrades: async ({ currentUser }, { data }) => {
    RequestPermissions(currentUser, [RoleEnum.TEACHER, RoleEnum.ADMIN]);
    return await HttpProvider.post(`${baseUrl}/app/grades/`, data);
  },
  updateGrades: async ({ currentUser }, { id }) => {
    RequestPermissions(currentUser, [RoleEnum.TEACHER, RoleEnum.ADMIN]);
    return await HttpProvider.put(`${baseUrl}/app/grades/${id}`);
  },
  deleteGrades: async ({ currentUser }, { id }) => {
    RequestPermissions(currentUser, [RoleEnum.TEACHER, RoleEnum.ADMIN]);
    return await HttpProvider.deleted(`${baseUrl}/app/grades/${id}`);
  },
};
