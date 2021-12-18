const { DATABASE_URL } = process.env;
const Sequelize = require('sequelize');

const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
})


module.exports = sequelize;