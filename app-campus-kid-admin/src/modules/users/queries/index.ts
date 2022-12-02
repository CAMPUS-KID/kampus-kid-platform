import { gql } from "@apollo/client";

export const GetAllStudentsQuery = gql`
    query GetAllStudents{
        getAllStudents{
            id
            name
            email
            faculty
            career
        }
    }
`;