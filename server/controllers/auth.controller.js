const { UserModel } = require('../models/user');

const { jwtToken, comparePassword } = require('../utils/helpers');
const DBManager = require('../utils/DBManager');
const { serverErrMsg } = require('../utils/data');

const authController = {
    signUp: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...SIGNUP REQUEST...");

        const { username, password, attendStatus } = req.body;
        console.log(req.body);

        try {
            await DBManager.CONNECT();
            const existingUsername = await UserModel.findOne({ username }).lean();
            if (existingUsername) {
                DBManager.DISCONNECT();
                return res.status(403).json({ message: { msgBody: 'Username is already taken, Try another one', msgError: true } })
            } else {
                const newUser = new UserModel({ username: username.toLowerCase(),password: req.body.password, attendStatus })
                const savedUser = await newUser.save();
                DBManager.DISCONNECT();
                const { password, ...rest } = savedUser._doc;
                const token = jwtToken.createToken({ userId: savedUser._id, username: savedUser.username, role: savedUser.role });
                res.cookie('access_token', token, { httpOnly: true, sameSite: true });
                return res.status(201).json({
                    message: { msgBody: `Account successfully created`, msgError: false },
                    isAuthenticated: true, userInfo: rest
                });
            }
        }
        catch (err) {
            DBManager.DISCONNECT();
            console.error(err.message);
            next(serverErrMsg)
        }
    },



    login: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...LOGIN REQUEST...");

        const { email, password } = req.body;

        try {
            await DBManager.CONNECT();
            const user = await UserModel.findOne({ email });
            if (user) {
                DBManager.DISCONNECT();
                if (comparePassword(password, user.password)) {
                    const { password, ...rest } = user._doc
                    const token = jwtToken.createToken({ userId: user._id, username: user.username, role: user.role });

                    res.cookie('access_token', token, { httpOnly: true, sameSite: true });
                    return res.status(201).json({
                        message: { msgBody: `Welcome, ${user.username}`, msgError: false },
                        isAuthenticated: true, userInfo: rest
                    });
                } else {
                    DBManager.DISCONNECT();
                    return res.status(401).json({
                        message: { msgBody: 'Invalid password', msgError: true },
                        isAuthenticated: false,
                    })
                }
            } else {
                DBManager.DISCONNECT();
                return res.status(401).json({
                    message: { msgBody: 'Invalid email', msgError: true },
                    isAuthenticated: false,
                })
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