const express = require("express")
const Attendace = require("../../models/Attendance")
const router = express()


router.post("/attendManually", async (req,res) => {
    var student_id = req.params.student_id
    var attended = await Attendace.attendStudent(student_id)
    if (attended) {
        res.json({
            "StatusCode": 200,
            "Message": "Student Attended"
        })
    }
    else {
        res.json({
            "StatusCode": 400,
            "Message": "Student Cannot be Attended"
        })
    }

})
router.get("/today", async (req,res) => {
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