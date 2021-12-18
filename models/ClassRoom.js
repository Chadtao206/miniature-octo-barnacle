const sequelize = require('../connection');
const { DataTypes } = require('sequelize');
const { Model } = require('sequelize');

class ClassRoom extends Model {}

ClassRoom.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    code: {
      type: DataTypes.STRING,
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

module.exports = ClassRoom;