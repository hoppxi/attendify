const express = require("express")
const Attendace = require("../models/Attendance")
const apiAttendanceRouter = require("./api/attendanceRouter")
const School = require("../models/School")
const router = express()
router.use("/attendance", apiAttendanceRouter)

module.exports = router