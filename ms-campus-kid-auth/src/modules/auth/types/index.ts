import { RoleEnum } from "../enums";

export interface UserOutput {
    email: string,
    role: RoleEnum
}

export interface UserInput {
    email: string,
    password: string,
    role: RoleEnum
}

export interface LoginInput {
    email: string,
    password: string
}

export interface LoginOutput extends UserOutput {
    accessToken: string
}