import { RoleEnum } from "@shared_enums";
import { GQLRequestVariables } from "@shared_types";

export interface LoginInput {
    email: string,
    password: string
}
export type LoginVariables = GQLRequestVariables<LoginInput>;

export interface CurrentUser {
    email: string,
    role: RoleEnum,
    accessToken: string
}

export interface LoginOutput {
    login: CurrentUser
}

export interface AuthorizeOutput {
    authorize: CurrentUser
}