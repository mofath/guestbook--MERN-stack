const { UserModel } = require('../models/user');
const DBManager = require('../utils/DBManager');
const { serverErrMsg } = require('../utils/data')


const userController = {

    findUserById: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...FIND USER BY ID...");

        const userId = req.userInfo.id;

        DBManager.CONNECT();
        try {
            const userInfo = await UserModel.findById({ _id: userId }).select('-password')
            if (userInfo) {
                DBManager.DISCONNECT();
                return res.status(200).json({
                    message: { msgBody: 'Authenticated', msgError: false },
                    userInfo,
                    isAuthenticated: true,
                })
            } else {
                DBManager.DISCONNECT();
                return res.status(404).json({ message: { msgBody: "User not found ", msgError: true } })
            }
        } 
        catch (err) {
            DBManager.DISCONNECT();
            console.error(err.message);
            next(serverErrMsg)
        }
    },



    modifyUser: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...MODIFY USER...");

        DBManager.CONNECT();
        try {
            const user = await UserModel.findByIdAndDelete(req.params.id)

            if (user) {
                return res.status(200).send("user modified successfully")
            } else {
                return res.status(404).send("No such user");
            }
        } 
        catch (err) {
            DBManager.DISCONNECT();
            console.error(err.message);
            next(serverErrMsg)
        }
    },

};

module.exports = userController;