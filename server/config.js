const config = {
  DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/guestbook',
  JWT_SECRET: process.env.JWT_SECRET || 'mofath',
  PORT: process.env.PORT || 5000
}

module.exports = config;