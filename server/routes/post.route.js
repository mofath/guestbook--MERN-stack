const router = require('express').Router();


const postController = require('../controllers/post.controller');
const authorize = require('../middlewares/authorize');


// router.get("/");

router.post("/", authorize.requireAuth, postController.submitPost);

// router.delete("/:id");

// router.patch("/:id");

// router.post("/:id/reply");



module.exports = router; 