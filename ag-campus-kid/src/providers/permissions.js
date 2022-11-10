const { HttpErrorEnum } = require("../constants")

module.exports.RequestPermissions = (currentUser, roles) => {
    console.log(currentUser)
    if (!currentUser) throw new Error(HttpErrorEnum.UNAUTHORIZED);
    const isValid = roles.reduce((prev, role) => prev || role == currentUser.role, false);
    if (!isValid) throw new Error(HttpErrorEnum.UNAUTHORIZED);
}