"use strict";

const { HttpProvider } = require("../../providers");

const baseUrl = process.env.MS_SUBJECTS_BASE_URL;

module.exports = {
  createSubject: async (root, { data }) => {
    return await HttpProvider.post(`${baseUrl}/api/course`, data);
  },
  updateSubject: async(root, id,{ data } ) => {
    return await HttpProvider.put(`${baseUrl}/api/course/`+id,data);
  },
  deleteSubject: async(root, id) =>{
    return await HttpProvider.deleted(`${baseUrl}/api/course/`+id);
  },
};
