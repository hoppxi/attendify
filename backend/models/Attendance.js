var {query} = require("../config/mysqlConnection")
const mongoose = require("mongoose")
const Student = require("./Students")
mongoose.connect("mongodb://localhost:27017/attendify")
const AttendanceSchema = mongoose.Schema({
    date: String,
    schools: Map
})

const AttendanceModel = mongoose.model("attendances", AttendanceSchema)

class Attendace {
    static async calculateAbsentStudents(schoolData,schoolID) {
      var students = await query("select * from students where school_id = ?",schoolID)
      var fullAttendance = {"Absent": [], "Present": []}
      var presentStudents = schoolData.Present
    
      students.forEach(student => {
        var studentID = student.id 
        if (presentStudents.includes(studentID)) {
            fullAttendance.Present.push(student)
        }
        else {
            fullAttendance.Absent.push(student)
        }
      });
      return fullAttendance
    }
    static async getTodayAttendance(schoolID) {
        var today = `${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDate()}`
        var AllAttendance = await AttendanceModel.findOne({date: today})
        if (AllAttendance) {
            var schoolData = new Map(AllAttendance.schools).get(schoolID)
            var attendance = await this.calculateAbsentStudents(schoolData,schoolID)
            return attendance      
        }
        else {
            return {"Status": "404", "Message": "Attendance Not Found"}
        }
    }
    
    static async attendStudent(obfuscatedStudentID) {
        var today = `${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDate()}`
        var attendace = await AttendanceModel.findOne({date: today})
        var student = await Student.getStudentData(obfuscatedStudentID)
        if (attendace && student) {
          var previousAttendance = new Map(attendace["schools"])
          var schoolAttendance = previousAttendance.get(String(student.school_id))
          if (!schoolAttendance["Present"].includes(student.id)) {
            schoolAttendance["Present"].push(student.id)
          }
          var result = await AttendanceModel.findOneAndUpdate({date:today}, {schools: previousAttendance}, {new: true})
        }
        else if (student){
            var schoolID = String(student.school_id)
            var attend = AttendanceModel({
                date: today,
                schools: {
                    "1": {
                        "Absent": [],
                        "Present": [student.id],
                        "Late": []
                    }
                }
            })
            attend.save()
            
        }
        else {
            console.log("Student Not Found")
        }
       
    }
}

module.exports = Attendace