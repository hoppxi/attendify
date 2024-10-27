import express, { urlencoded } from 'express';
import QRCodeRouter from './routes/qrcode.js';
import APIRouter from './routes/api.js';
import Attendance from './models/attendance.js';
import bodyParser from 'body-parser';
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser())
app.use(urlencoded({ extended: true }));

app.use('/qrcode', QRCodeRouter);
app.use('/api', APIRouter);
app.get('/attendance', async (req, res) => {
    const schoolID = req.query.schoolID;
    const response = await Attendance.getTodayAttendance(schoolID);
    res.send(response);
});

app.listen(PORT, () => {
    console.log('[UP] Web Application is running');
});
