export interface Subject {
    id: number,
    name: string,
    description: string,
    code: number
}

export interface GetSubjectsOutput {
    getSubjects: Subject[]
}

export interface GetSubjectByIdOutput {
    getSubjectsById: Subject
}