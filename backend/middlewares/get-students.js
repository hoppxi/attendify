import { getPresentStudents } from '../models/attendance.js';
import { getAllStudentsCount } from '../models/school.js';

const getStudentsMiddleware = async (req, res) => {
    const schoolID = req.query.school_id;
    console.log(schoolID);

    const presentStudents = await getPresentStudents(schoolID);
    const total_students = await getAllStudentsCount(schoolID);

    res.json({
        total_students: total_students,
        present_students: presentStudents.length,
        absent_students: total_students - presentStudents.length,
    });
};

export { getStudentsMiddleware };
