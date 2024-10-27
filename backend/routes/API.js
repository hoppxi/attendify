const express = require("express")
const Attendace = require("../models/Attendance")
const School = require("../models/School")
const router = express()

router.get("/attendance/today", async (req,res) => {
    var schoolID = req.query.school_id
    console.log(schoolID)
    var presentStudents = await Attendace.getPresentStudents(schoolID)
    var total_students = await School.getAllStudentsCount(schoolID)

    res.json({
        "total_students": total_students,
        "present_students": presentStudents.length,
        "absent_students": total_students - presentStudents.length
    })
})

module.exports = router