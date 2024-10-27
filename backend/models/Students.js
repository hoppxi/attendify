const { query } = require("../config/mysqlConnection");

class Student {
    
    static decodeStudentID (ID) {
        return ID.replace("s_", "")
    }

    static async getStudentData(obfuscatedStudentID) {
        var studentID = this.decodeStudentID(obfuscatedStudentID)
        var result = await query("select students.id,schools.name,schools.id as school_id,students.first_name,students.father_name,students.birthday,students.email,students.password,students.father_phone_number,students.mother_phone_number,students.gender,students.mother_id,students.father_id from students join schools on students.school_id = schools.id where students.id = ?", [Number(studentID)])
        if (result[0]) {
            return result[0]
        }
        else {
            return false
        }
     }
     
}

module.exports = Student