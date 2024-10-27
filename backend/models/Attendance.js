import { connect, Schema, model } from 'mongoose';
import { query } from '../config/mysql-connection.js';
import { getStudentData } from './students.js';

const MONGO_DB_URL = process.env.MONGODB_URL;

connect(MONGO_DB_URL);

const AttendanceSchema = Schema({
    date: String,
    schools: Map,
});

const AttendanceModel = model('attendances', AttendanceSchema);

class Attendace {
    static async calculateAbsentStudents(schoolData, schoolID) {
        const students = await query(
            'select * from students where school_id = ?',
            schoolID
        );
        const fullAttendance = { Absent: [], Present: [] };
        const presentStudents = schoolData.Present;

        students.forEach((student) => {
            const studentID = student.id;
            if (presentStudents.includes(studentID)) {
                fullAttendance.Present.push(student);
            } else {
                fullAttendance.Absent.push(student);
            }
        });
        return fullAttendance;
    }

    static async getPresentStudents(schoolID) {
        const today = `${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDate()}`;
        const AllAttendance = await AttendanceModel.findOne({ date: today });

        if (AllAttendance) {
            const schoolData = new Map(AllAttendance.schools).get(schoolID);
            return schoolData['Present'];
        } else {
            return [];
        }
    }

    static async getTodayAttendance(schoolID) {
        const today = `${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDate()}`;
        const AllAttendance = await AttendanceModel.findOne({ date: today });

        if (AllAttendance) {
            const schoolData = new Map(AllAttendance.schools).get(schoolID);
            const attendance = await this.calculateAbsentStudents(
                schoolData,
                schoolID
            );
            return attendance;
        } else {
            return { Status: '404', Message: 'Attendance Not Found' };
        }
    }

    static async attendStudent(obfuscatedStudentID) {
        const today = `${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDate()}`;
        const attendace = await AttendanceModel.findOne({ date: today });
        const student = await getStudentData(obfuscatedStudentID);

        if (attendace && student) {
            const schoolID = String(student.school_id);
            const previousAttendance = new Map(attendace['schools']);
            const schoolAttendance = previousAttendance.get(schoolID);

            if (!schoolAttendance['Present'].includes(student.id)) {
                schoolAttendance['Present'].push(student.id);
            }

            const result = await AttendanceModel.findOneAndUpdate(
                { date: today },
                { schools: previousAttendance },
                { new: true }
            );
        } else if (student) {
            const attend = AttendanceModel({
                date: today,
                schools: {
                    1: {
                        Absent: [],
                        Present: [student.id],
                        Late: [],
                    },
                },
            });
            attend.save();
        } else {
            console.log('Student Not Found');
        }
    }
}

export default Attendace;
