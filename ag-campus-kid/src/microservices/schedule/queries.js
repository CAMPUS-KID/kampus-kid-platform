"use strict";

const { HttpProvider } = require("../../providers");
const { RoleEnum } = require("../../constants");
const { RequestPermissions } = require("../../providers/permissions");

const baseUrl = process.env.MS_SCHEDULE_BASE_URL

module.exports = {
    getAllStudents: async () => {
        return await HttpProvider.get(`${baseUrl}/students`);
    },
    getAllTeachers: async () => {
        return await HttpProvider.get(`${baseUrl}/teachers`);
    },
    getStudentById: async (root,{id}) => {
        return await HttpProvider.get(`${baseUrl}/students/${id}`);
    },
}