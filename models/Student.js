const sequelize = require('./connection');
const { Model } = require('sequelize');

class Student extends Model {}

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
      unique: true
    },

    grade: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },

    class_room_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'class_room',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    modelName: 'student',
    timestamps: true,
    freezeTableName: true,
  }
)

module.exports = Student;