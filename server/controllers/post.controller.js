const DBManager = require('../utils/DBManager');
const { PostModel } = require("../models/post");
const { serverErrMsg } = require('../utils/data');

const postController = {

    submitPost: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...SUBMIT POST...");
        const writer = req.userInfo.id;
        const { postText } = req.body;
        const newPost = new PostModel({ postText, writer });
        try {
            DBManager.CONNECT();
            const newAddedPost = await newPost.save();
            return res.status(201).json({ message: { msgBody: 'Post saved succesfully', msgError: false }, newAddedPost })
        }
        catch (err) {
            DBManager.DISCONNECT();
            console.error(err.message);
            next(serverErrMsg)
        }
    },

};



module.exports = postController;