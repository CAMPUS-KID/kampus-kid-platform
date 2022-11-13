"use strict";

const { HttpProvider } = require("../../providers");
const { RoleEnum } = require("../../constants");
const { RequestPermissions } = require("../../providers/permissions");

const baseUrl = process.env.MS_SCHEDULE_BASE_URL

module.exports = {
    getAllStudents: async () => {
        return await HttpProvider.get(`${baseUrl}/students`);
    },
    getStudentById: async (root,{id}) => {
        return await HttpProvider.get(`${baseUrl}/students/${id}`);
    },
    getAllTeachers: async () => {
        return await HttpProvider.get(`${baseUrl}/teachers`);
    },
    getTeacherById: async (root,{id}) => {
        return await HttpProvider.get(`${baseUrl}/teachers/${id}`)
    },
    getAllGroups: async () => {
        return await HttpProvider.get(`${baseUrl}/groups`)
    },
    getGroupById: async (root,{id}) => {
        return await HttpProvider.get(`${baseUrl}/groups/${id}`)
    },
    getAllSubjectPeriods: async () => {
        return await HttpProvider.get(`${baseUrl}/subject-periods`)
    },
    getSubjectPeriodById: async (root,{id}) => {
        return await HttpProvider.get(`${baseUrl}/subject-periods/${id}`)
    },
    getAllSchedules: async () => {
        return await HttpProvider.get(`${baseUrl}/schedules`)
    },
    getScheduleById: async (root,{id}) => {
        return await HttpProvider.get(`${baseUrl}/schedules/${id}`)
    },
    getAllPeriods: async () => {
        return await HttpProvider.get(`${baseUrl}/periods`)
    },
    getPeriodById: async (root,{id}) => {
        return await HttpProvider.get(`${baseUrl}/periods/${id}`)
    },

}