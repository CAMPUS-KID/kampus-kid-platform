"use strict";

const { HttpProvider } = require("../../providers");
const { RoleEnum } = require("../../constants");
const { RequestPermissions } = require("../../providers/permissions");

const baseUrl = process.env.MS_SCHEDULE_BASE_URL;

module.exports = {
    createStudent: async ({ currentUser }, { data }) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN]);
        return await HttpProvider.post(`${baseUrl}/student/`, data);
    },
    createTeacher: async ({ currentUser }, { data }) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN]);
        return await HttpProvider.post(`${baseUrl}/teachers/`, data);
    },
};
