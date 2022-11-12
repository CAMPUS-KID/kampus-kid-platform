import { GQLRequest } from "../types";

export function buildRequestOptions<T = unknown>(
  data?: T,
  token?: string
): GQLRequest<T> {
  return {
    variables: data && { data },
    context: token
      ? { headers: { authorization: `Bearer ${token}` } }
      : undefined,
  };
}
