const router = require('express').Router();

const validateRegister = require('../middlewares/validator')
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');
const authorize = require('../middlewares/authorize');


router.post('/signup', validateRegister, authController.signUp);

router.post('/login', authController.login);

router.get('/authenticate', authorize.requireAuth, userController.findUserById);

router.get('/logout', authorize.logout);


module.exports = router;
