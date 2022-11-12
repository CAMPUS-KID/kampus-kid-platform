import { RoleEnum } from "../../shared/enums";
import { CurrentUser, GQLRequestVariables } from "../../shared/types";


export interface LoginInput {
    email: string,
    password: string
}

export type LoginVariables = GQLRequestVariables<LoginInput>;

export interface LoginOutput {
    login: CurrentUser
}

export interface AuthorizeOutput {
    authorize: CurrentUser
}