import { gql } from "@apollo/client";

export const LoginMutation = gql`
    mutation Login($data: LoginInput!) {
        login(data: $data) {
            email
            role
            accessToken
        }
    }
`;

export const AuthorizeMutation = gql`
    mutation Authorize {
        authorize {
            email
            role
            accessToken
        }
    }
`;