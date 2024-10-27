import Attendace from '../models/attendance.js';
import School from '../models/school.js';

const getStudentsMiddleware = async (req, res) => {
    const schoolID = req.query.school_id;
    console.log(schoolID);

    const presentStudents = await Attendace.getPresentStudents(schoolID);
    const total_students = await School.getAllStudentsCount(schoolID);

    res.json({
        total_students: total_students,
        present_students: presentStudents.length,
        absent_students: total_students - presentStudents.length,
    });
};

export { getStudentsMiddleware };
