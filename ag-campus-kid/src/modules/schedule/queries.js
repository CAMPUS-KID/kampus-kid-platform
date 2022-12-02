"use strict";

const { HttpProvider } = require("../../providers");
const { RoleEnum } = require("../../constants");
const { RequestPermissions } = require("../../providers/permissions");

const baseUrl = process.env.MS_SCHEDULE_BASE_URL

module.exports = {
    getAllAdmins: async ({ currentUser }) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN]);
        return await HttpProvider.get(`${baseUrl}/admins`);
    },
    getAdminById: async ({ currentUser }, { id }) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN]);
        return await HttpProvider.get(`${baseUrl}/admins/${id}`);
    },
    getAllStudents: async ({ currentUser }) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN]);
        return await HttpProvider.get(`${baseUrl}/students`);
    },
    getStudentById: async ({ currentUser }, { id }) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN, RoleEnum.TEACHER, RoleEnum.STUDENT]);
        return await HttpProvider.get(`${baseUrl}/students/${id}`);
    },
    getAllTeachers: async ({ currentUser }) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN]);
        return await HttpProvider.get(`${baseUrl}/teachers`);
    },
    getTeacherById: async ({ currentUser }, { id }) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN, RoleEnum.TEACHER, RoleEnum.STUDENT]);
        return await HttpProvider.get(`${baseUrl}/teachers/${id}`)
    },
    getAllGroups: async () => {
        return await HttpProvider.get(`${baseUrl}/groups`)
    },
    getGroupById: async (root, { id }) => {
        return await HttpProvider.get(`${baseUrl}/groups/${id}`)
    },
    getAllSubjectPeriods: async () => {
        return await HttpProvider.get(`${baseUrl}/subject-periods`)
    },
    getSubjectPeriodById: async (root, { id }) => {
        return await HttpProvider.get(`${baseUrl}/subject-periods/${id}`)
    },
    getAllSchedules: async ({ currentUser }) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN]);
        return await HttpProvider.get(`${baseUrl}/schedules`)
    },
    getScheduleById: async (root, { id }) => {
        return await HttpProvider.get(`${baseUrl}/schedules/${id}`)
    },
    getAllPeriods: async ({ currentUser }) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN]);
        return await HttpProvider.get(`${baseUrl}/periods`)
    },
    getPeriodById: async (root, { id }) => {
        return await HttpProvider.get(`${baseUrl}/periods/${id}`)
    },
    getAllEnrollments: async ({ currentUser }) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN]);
        return await HttpProvider.get(`${baseUrl}/enrollments`)
    },
    getEnrollmentById: async (root, { id }) => {
        return await HttpProvider.get(`${baseUrl}/enrollments/${id}`)
    },


}