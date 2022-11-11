import { GQLRequest } from "@shared_types";

export default function buildVariables<T = unknown>(data?: T, token?: string): GQLRequest<T> {
    return { variables: data && { data }, context: token && { headers: { authorization: `Bearer ${token}` } } }
}