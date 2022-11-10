module.exports.HttpErrorEnum = {
    UNAUTHORIZED: "UNAUTHORIZED"
}

module.exports.RoleEnum = {
    ADMIN: 'ADMIN',
    STUDENT: 'STUDENT',
    TEACHER: 'TEACHER',
    EXTERNAL_CONSUMER: 'EXTERNAL_CONSUMER',
}

module.exports.HttpErrors = {
    [this.HttpErrorEnum.UNAUTHORIZED]: { message: 'Unauthorized', statusCode: 401 }
}