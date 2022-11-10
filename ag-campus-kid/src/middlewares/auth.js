const { HttpProvider } = require("../providers");

const baseUrl = process.env.MS_AUTH_BASE_URL;

module.exports.AuthMiddleware = async (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
        try {
            const currentUser = await HttpProvider.post(`${baseUrl}/auth/authorize`, undefined, authorization);
            req.currentUser = currentUser;
        } catch {
            res.status(200).json({
                errors: [
                    {
                        message: "Unauthorized",
                        statusCode: 401
                    }
                ],
                data: {
                    createSite: null
                }
            });
            return;
        }
    }
    next();
}