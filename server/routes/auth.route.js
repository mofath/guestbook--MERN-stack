const router = require('express').Router();

const validateRegister = require('../middlewares/validator');
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');
const notificationController = require('../controllers/notification.controller');
const authorize = require('../middlewares/authorize');


router.post('/signup', validateRegister, authController.signUp);

router.post('/login', authController.login, notificationController.getUserNotification);

router.get('/authenticate', authorize.requireAuth, notificationController.getUserNotification);

router.get('/logout', authorize.logout);


module.exports = router;
