const { UserModel } = require('../models/user');

const { jwtToken, comparePassword } = require('../utils/helpers');
const DBManager = require('../utils/DBManager');
const { serverErrMsg } = require('../utils/data');

const authController = {
    signUp: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...SIGNUP REQUEST...");

        const { username, password, attendStatus } = req.body;

        try {
            await DBManager.CONNECT();
            const existingUsername = await UserModel.findOne({ username }).lean();
            if (existingUsername) {
                DBManager.DISCONNECT();
                return res.status(403).json({ message: { msgBody: 'Username is already taken, Try another one', msgError: true } })
            } else {
                const newUser = new UserModel({ username: username.toLowerCase(), password, attendStatus })
                await newUser.save();
                DBManager.DISCONNECT();
                return res.status(201).send({ message: { msgBody: 'Account successfully created', msgError: false } });
            }
        }
        catch (err) {
            DBManager.DISCONNECT();
            console.error(err.message);
            next(serverErrMsg)
        }
    },

};

module.exports = authController;