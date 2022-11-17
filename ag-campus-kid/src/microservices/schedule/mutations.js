"use strict";

const { HttpProvider } = require("../../providers");
const { RoleEnum } = require("../../constants");
const { RequestPermissions } = require("../../providers/permissions");

const baseUrl = process.env.MS_SCHEDULE_BASE_URL;

module.exports = {
    createStudent: async ({ currentUser }, { data }) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN]);
        return await HttpProvider.post(`${baseUrl}/students/`, data);
    },
    updateStudent: async ({ currentUser }, { data },{id}) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN]);
        return await HttpProvider.put(`${baseUrl}/students/${id}`, data);
    },
    deleteStudent: async ({ currentUser }, {id}) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN]);
        return await HttpProvider.deleted(`${baseUrl}/students/${id}`);
    },
    createTeacher: async ({ currentUser }, { data }) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN]);
        return await HttpProvider.post(`${baseUrl}/teachers/`, data);
    },
    updateTeacher: async ({ currentUser }, { data },{id}) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN]);
        return await HttpProvider.put(`${baseUrl}/teachers/${id}`, data);
    },
    deleteTeacher: async ({ currentUser }, {id}) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN]);
        return await HttpProvider.deleted(`${baseUrl}/teachers/${id}`);
    },
    createGroup: async ({ currentUser }, { data }) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN][RoleEnum.TEACHER]);
        return await HttpProvider.post(`${baseUrl}/groups/`, data);
    },
    updateGroup: async ({ currentUser }, { data },{id}) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN][RoleEnum.TEACHER]);
        return await HttpProvider.put(`${baseUrl}/groups/${id}`, data);
    },
    deleteGroup: async ({ currentUser }, {id}) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN]);
        return await HttpProvider.deleted(`${baseUrl}/groups/${id}`);
    },
    createSubjectPeriod: async ({ currentUser }, { data }) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN][RoleEnum.TEACHER]);
        return await HttpProvider.post(`${baseUrl}/subject-periods/`, data);
    },
    updateSubjectPeriod: async ({ currentUser }, { data },{id}) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN][RoleEnum.TEACHER]);
        return await HttpProvider.put(`${baseUrl}/subject-periods/${id}`, data);
    },
    deleteSubjectPeriod: async ({ currentUser }, {id}) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN]);
        return await HttpProvider.deleted(`${baseUrl}/subject-periods/${id}`);
    },
    createSchedule: async ({ currentUser }, { data }) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN][RoleEnum.TEACHER]);
        return await HttpProvider.post(`${baseUrl}/schedules/`, data);
    },
    updateSchedule: async ({ currentUser }, { data },{id}) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN]);
        return await HttpProvider.put(`${baseUrl}/schedules/${id}`, data);
    },
    deleteSchedule: async ({ currentUser }, {id}) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN]);
        return await HttpProvider.deleted(`${baseUrl}/schedules/${id}`);
    },
    createPeriod: async ({ currentUser }, { data }) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN][RoleEnum.TEACHER]);
        return await HttpProvider.post(`${baseUrl}/periods/`, data);
    },
    updatePeriod: async ({ currentUser }, { data },{id}) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN]);
        return await HttpProvider.put(`${baseUrl}/periods/${id}`, data);
    },
    deletePeriod: async ({ currentUser }, {id}) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN]);
        return await HttpProvider.deleted(`${baseUrl}/periods/${id}`);
    },
    createEnrollment: async ({ currentUser }, { data }) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN][RoleEnum.TEACHER][RoleEnum.STUDENT]);
        return await HttpProvider.post(`${baseUrl}/enrollments/`, data);
    },
    updateEnrollment: async ({ currentUser }, { data },{id}) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN][RoleEnum.TEACHER][RoleEnum.STUDENT]);
        return await HttpProvider.put(`${baseUrl}/enrollments/${id}`, data);
    },
    deleteEnrollment: async ({ currentUser }, {id}) => {
        RequestPermissions(currentUser, [RoleEnum.ADMIN][RoleEnum.TEACHER][RoleEnum.STUDENT]);
        return await HttpProvider.deleted(`${baseUrl}/enrollments/${id}`);
    },

};
