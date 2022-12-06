import { gql } from "@apollo/client";

export const GetAllStudentsQuery = gql`
  query GetAllStudents {
    getAllStudents {
      id
      name
      email
      faculty
      career
    }
  }
`;

export const GetAllAdminsQuery = gql`
  query GetAllAdmins {
    getAllAdmins {
      id
      name
      email
    }
  }
`;

export const GetAllTeachersQuery = gql`
  query GetAllTeachers {
    getAllTeachers {
      id
      name
      email
      faculty
    }
  }
`;
