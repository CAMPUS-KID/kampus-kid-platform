"use strict";

const { HttpProvider } = require("../../providers");
const { RoleEnum } = require("../../constants");
const { RequestPermissions } = require("../../providers/permissions");

const baseUrl = process.env.MS_GRADES_BASE_URL;

module.exports = {
  getGrades: async ({ currentUser }) => {
    RequestPermissions(currentUser, [RoleEnum.TEACHER, RoleEnum.ADMIN, RoleEnum.STUDENT]);
    return await HttpProvider.get(`${baseUrl}/app/grades`);
  },
  getGradeById: async ({ currentUser }, { id }) => {
    RequestPermissions(currentUser, [RoleEnum.TEACHER, RoleEnum.ADMIN, RoleEnum.STUDENT]);
    return await HttpProvider.get(`${baseUrl}/app/grades/${id}`);
  },
};
