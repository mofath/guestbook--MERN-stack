  
const JWT = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const config = require('../config')

const jwtToken = {
  JWT_SECRET: config.JWT_SECRET,

  createToken: ({ userId, role, username }) => {
    // payload == claims
    const payload = {
      sub: userId,
      username: username,
      role: role,
      iss: "mofath",
      aud: "guestbook",
      iat: Math.floor(Date.now() / 1000) - 30,
    }
    const expiry = { expiresIn: '48h' }
    return JWT.sign(payload, jwtToken.JWT_SECRET, expiry);
  },

  verifyToken: (token) => {
    return JWT.verify(token, jwtToken.JWT_SECRET);
  }
};


const comparePassword = (password, hash) => bcrypt.compareSync(password, hash);

module.exports = {
  jwtToken,
  comparePassword,
};