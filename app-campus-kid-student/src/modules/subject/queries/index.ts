import { gql } from "@apollo/client";

export const GetAllSubjectsQuery = gql`
    query GetSubjects{
        getSubjects{
            id
            name
            description
            code
        }
    }
`;

export const GetSubjectsByIdQuery = gql`
    query GetSubjectsById($id:Int!){
        getSubjectsById(id:$id){
            id
            name
            description
            code
        }
    }
`
