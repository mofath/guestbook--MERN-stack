const validator = require('validator');

module.exports = async (req, res, next) => {
    const {username, password} = req.body;
    if (!username) {
        return res.status(400).json({ message: { msgBody: 'Username is required', msgError: true } })
    }
    if (!password) {
        return res.status(400).json({ message: { msgBody: 'Password is required', msgError: true } })
    }
    next();
};