  
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = mongoose.Schema(
    {
        writer: { type: Schema.Types.ObjectId, ref: 'User' },
        postText: { type: String },
        replies:
            [{
                writer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
                replyText: { type: String },
                replyDate: { type: Date },
            }],
    },
    { timestamps: true }
)


const PostModel = mongoose.model('Post', postSchema);
module.exports = { PostModel }