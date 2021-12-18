const ClassRoom = require("./ClassRoom");
const Student = require("./Student");

ClassRoom.hasMany(Student, {
  constraints: false
})

Student.belongsTo(ClassRoom, {
  constraints: false
})

module.exports = { Student, ClassRoom };