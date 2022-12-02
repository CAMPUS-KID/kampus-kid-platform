import { gql } from "@apollo/client";

export const GetSitesQuerie = gql`
    query GetSites{
        getSites{
            id
            name
            code
        }
    }
`;

export const GetFacultiesQuery = gql`
    query GetFaculties{
        getFaculties{
            id
            name
            code
            siteId
        }
    }
`;
