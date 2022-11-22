module.exports.HttpErrorEnum = {
    UNAUTHORIZED: "UNAUTHORIZED",
    DUPLICATED_RECORD: "DUPLICATED_RECORD"
}

module.exports.RoleEnum = {
    ADMIN: 'ADMIN',
    STUDENT: 'STUDENT',
    TEACHER: 'TEACHER',
    EXTERNAL_CONSUMER: 'EXTERNAL_CONSUMER',
}

module.exports.HttpErrors = {
    [this.HttpErrorEnum.UNAUTHORIZED]: { message: 'Unauthorized', statusCode: 401 },
    [this.HttpErrorEnum.DUPLICATED_RECORD]: { message: 'The record already exists', statusCode: 400 }
}