"use strict";

const { HttpProvider } = require("../../providers");
const { RoleEnum, HttpErrorEnum } = require("../../constants");
const { RequestPermissions } = require("../../providers/permissions");

const usersBaseUrl = `${process.env.MS_AUTH_BASE_URL}/users`;
const scheduleBaseUrl = process.env.MS_SCHEDULE_BASE_URL;

module.exports = {
  createStudent: async (
    { currentUser },
    { data: { email, password, faculty, career, name } }
  ) => {
    RequestPermissions(currentUser, [RoleEnum.ADMIN]);
    const role = RoleEnum.STUDENT;
    try {
      await HttpProvider.post(usersBaseUrl, { email, password, role });
      return await HttpProvider.post(`${scheduleBaseUrl}/students`, {
        email,
        faculty,
        career,
        name,
      });
    } catch (e) {
      console.log(e)
      throw new Error(HttpErrorEnum.DUPLICATED_RECORD);
    }
  },
  createTeacher: async (
    { currentUser },
    { data: { email, password, faculty, name } }
  ) => {
    RequestPermissions(currentUser, [RoleEnum.ADMIN]);
    const role = RoleEnum.TEACHER;
    try {
      await HttpProvider.post(usersBaseUrl, { email, password, role });
      return await HttpProvider.post(`${scheduleBaseUrl}/teachers`, {
        email,
        faculty,
        name,
      });
    } catch {
      throw new Error(HttpErrorEnum.DUPLICATED_RECORD);
    }
  },
  createAdmin: async ({ currentUser }, { data: { email, password, name } }) => {
    RequestPermissions(currentUser, [RoleEnum.ADMIN]);
    const role = RoleEnum.ADMIN;
    try {
      await HttpProvider.post(usersBaseUrl, { email, password, role });
      return await HttpProvider.post(`${scheduleBaseUrl}/admins`, {
        email,
        name,
      });
    } catch {
      throw new Error(HttpErrorEnum.DUPLICATED_RECORD);
    }
  },
};
