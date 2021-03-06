const router = require('express').Router();

const postController = require('../controllers/post.controller');
const notificationController = require('../controllers/notification.controller');
const authorize = require('../middlewares/authorize');


router.get("/", postController.getAllPosts);

router.post("/", authorize.requireAuth, postController.addNewPost);

router.delete("/:id", authorize.requireAuth, postController.deletePostById);

router.patch("/:id", authorize.requireAuth, postController.updatePostById);

router.post("/:id/reply", authorize.requireAuth, postController.addNewReply, notificationController.createNotification);


module.exports = router; 