export interface GQLRequest<T = unknown> {
    variables?: GQLRequestVariables<T>,
    context?: {
        headers?: {
            authorization?: string
        }
    }
}

export interface GQLRequestVariables<T> {
    data: T
}
