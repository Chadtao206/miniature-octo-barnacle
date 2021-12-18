const ClassRoom = require("./ClassRoom");
const Student = require("./Student");

Student.belongsTo(ClassRoom, {
  constraints: false
})

ClassRoom.hasMany(Student, {
  constraints: false
})

module.exports = { Student, ClassRoom };