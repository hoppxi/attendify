const { query } = require("../config/mysqlConnection");

class School {
    static async getAllStudentsCount(schoolID) {
        var result = await query("select count(id) as total_students from students where school_id = ?", schoolID)
        return result[0]["total_students"]
    }
}

module.exports = School