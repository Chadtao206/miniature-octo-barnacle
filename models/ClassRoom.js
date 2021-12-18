const sequelize = require('./connection');
const { Model } = require('sequelize');

class ClassRoom extends Model {}

Student.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    code: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    }
  },
  {
    sequelize,
    modelName: 'class_room',
    timestamps: true,
    freezeTableName: true,
  }
)

module.exports = Student;