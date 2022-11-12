import { RoleEnum } from "../enums";

export interface GQLRequest<T = unknown> {
  variables?: GQLRequestVariables<T>;
  context?: {
    headers?: {
      authorization?: string;
    };
  };
}

export interface GQLRequestVariables<T> {
  data: T;
}

export interface CurrentUser {
  isAuthenticated?: boolean;
  email?: string;
  role: RoleEnum;
  accessToken?: string;
}
