
const { jwtToken, comparePassword } = require('../utils/helpers');

const authorize = {
    requireAuth: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...REQUIRE AUTH...");

        let token = req.cookies["access_token"];

        if (!token) {
            return res.status(401).json({ message: { msgBody: 'No token, authorization denied', msgError: true } });
        }
        else {
            try {
                decodedToken = await jwtToken.verifyToken(token);
                const { sub: id, username, role } = decodedToken;
                req.userInfo = {id, username, role}
                next();
            } catch (error) {
                return res.status(404).json({ message: { msgBody: 'Token expired or not valid', msgError: true } });
            }
        }
    },



    requireAdmin: (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...REQUIRE ADMIN...");

        if (req.userInfo.role === 'admin') next();
        return res.status(401).json({ message: { msgBody: 'Not authorized', msgError: true } });
    },



    logout: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...LOGOUT REQUEST...");

        res.clearCookie('access_token');
        return res.status(200).json({ message: { msgBody: 'Logout successfully', msgError: false } });
    },
};

module.exports = authorize;