const DBManager = require('../utils/DBManager');
const { PostModel } = require("../models/post");
const { serverErrMsg } = require('../utils/data');

const postController = {
    getAllPosts: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...GET ALL POSTS...");

        try {
            DBManager.CONNECT();
            const posts = await PostModel.find({})
                .sort({ 'createdAt': -1 })
                .populate('writer', 'username attendingStatus')
                .populate('replies.writer', 'username attendingStatus')
                .lean();
            DBManager.DISCONNECT();
            return res.status(200).json({ message: { msgBody: 'Posts fetched successfully', msgError: false }, posts })
        }
        catch (err) {
            DBManager.DISCONNECT();
            console.error(err.message);
            next(serverErrMsg)
        }
    },

    addNewPost: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...ADD NEW POST...");
        const writer = req.userInfo.id;
        const { postText } = req.body;
        const newPost = new PostModel({ postText, writer });
        try {
            DBManager.CONNECT();
            const savedPost = await newPost.save();
            const newAddedPost = await savedPost.populate('writer', 'username attendingStatus').execPopulate();
            return res.status(201).json({ message: { msgBody: 'Post saved succesfully', msgError: false }, newAddedPost })
        }
        catch (err) {
            DBManager.DISCONNECT();
            console.error(err.message);
            next(serverErrMsg)
        }
    },


    deletePostById: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...DELETE POST REQUEST...");

        try {
            DBManager.CONNECT();
            const post = await PostModel.findByIdAndDelete(req.params.id)
            if (post) {
                DBManager.DISCONNECT();
                return res.status(200).json({ message: { msgBody: 'Post Deleted successfully', msgError: false } })
            } else {
                DBManager.DISCONNECT();
                return res.status(404).json({ message: { msgBody: 'Post not found', msgError: true } })
            }
        }
        catch (err) {
            DBManager.DISCONNECT();
            console.error(err.message);
            next(serverErrMsg)
        }
    },

    updatePostById: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...UPDATE POST...");

        try {
            DBManager.CONNECT();
            await PostModel.updateOne(
                { _id: req.params.id },
                {
                    $set: { postText: req.body.newPostText }
                }
            )
            return res.status(201).json({ message: { msgBody: 'Post updated succesfully', msgError: false } })
        }
        catch (err) {
            DBManager.DISCONNECT();
            console.error(err.message);
            next(serverErrMsg)
        }
    },

    addNewReply: async (req, res, next) => {
        console.log('\x1b[33m%s\x1b[0m', "...ADD NEW REPLY...");

        try {
            DBManager.CONNECT();
            const newAddedReply = await PostModel.findByIdAndUpdate(
                { _id: req.params.id },
                {
                    $push: { replies: { writer: req.userInfo.id, replyText: req.body.replyText, replyDate: Date.now() } },
                },
                { new: true }
            )
                .populate("replies.writer", "username attendingStatus")
                .select({ "replies": { "$slice": -1 } })
                .lean();

            DBManager.DISCONNECT();
            return res.status(201).json({
                message: { msgBody: 'Reply succesfully added', msgError: false },
                newReply: newAddedReply.replies[0]
            })
        }
        catch (err) {
            DBManager.DISCONNECT();
            console.error(err.message);
            next(serverErrMsg)
        }
    },
};



module.exports = postController;