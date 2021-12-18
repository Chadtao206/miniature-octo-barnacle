const express = require("express");
const { Student } = require("../../models");
const router = express.Router();


router.post('/', async (req, res) => {
  try {
    console.log(Object.keys(req.body))
    if (Object.keys(req.body).length > 2) {
      return res.status(400).json({ error: { message: 'We only accept name and grade.'}})
    }

    Object.keys(req.body).forEach(key => {
      if (key !== 'name' || key !== 'grade') {
        return res.status(400).json({ error: { message: 'We only accept name and grade.'}})
      }
    })

    const studentData = await Student.create(req.body)
    res.status(200).json(studentData)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})



module.exports = router;
