const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = mongoose.Schema(
    {
        receipient: { type: Schema.Types.ObjectId, ref: 'User' },
        sender: { type: Schema.Types.ObjectId, ref: 'User' },
        post: { type: Schema.Types.ObjectId, ref: 'Post' },
        read: {
            type: Boolean,
            enum: [true, false],
            default: false,
        },
    },
    { timestamps: true }
)


const NotificationModel = mongoose.model('Notification', notificationSchema);
module.exports = { NotificationModel };