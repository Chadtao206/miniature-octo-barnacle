const { DataTypes } = require('sequelize');
const sequelize = require('../connection')
const { Model } = require('sequelize');

class Student extends Model {}

Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      unique: true
    },

    grade: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    // class_room_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'class_room',
    //     key: 'id'
    //   }
    // }
  },
  {
    sequelize,
    modelName: 'student',
    timestamps: true,
    freezeTableName: true,
  }
)

module.exports = Student;