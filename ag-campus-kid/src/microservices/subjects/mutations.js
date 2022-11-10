"use strict";

const { RoleEnum } = require("../../constants");
const { HttpProvider } = require("../../providers");
const { RequestPermissions } = require("../../providers/permissions");

const baseUrl = process.env.MS_SUBJECTS_BASE_URL;

module.exports = {
  createSubject: async ({ currentUser }, { data }) => {
    RequestPermissions(currentUser, [RoleEnum.ADMIN]);
    return await HttpProvider.post(`${baseUrl}/api/course`, data);
  },
  updateSubject: async({ currentUser },{ data }) => {
    RequestPermissions(currentUser, [RoleEnum.ADMIN]);
    return await HttpProvider.put(`${baseUrl}/api/course`, data);
  },
  deleteSubject: async({ currentUser }, {id}) =>{
    RequestPermissions(currentUser, [RoleEnum.ADMIN]);
    return await HttpProvider.deleted(`${baseUrl}/api/course/${id}`);
  },
};
