import express, { urlencoded } from 'express';
import QRCodeRouter from './routes/qrcode.js';
import APIRouter from './routes/api.js';
import { getTodayAttendance } from './models/attendance.js';

const app = express();
const PORT = process.env.PORT;

app.use(urlencoded({ extended: true }));

app.use('/qrcode', QRCodeRouter);
app.use('/api', APIRouter);
app.get('/attendance', async (req, res) => {
    const schoolID = req.query.schoolID;
    const response = await getTodayAttendance(schoolID);
    res.send(response);
});

app.listen(PORT, () => {
    console.log('[UP] Web Application is running');
});
