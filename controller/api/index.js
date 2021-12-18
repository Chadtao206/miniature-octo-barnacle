const express = require("express");
const router = express.Router();
const studentRoutes = require("./students");

router.use('/students', studentRoutes);

module.exports = router;
