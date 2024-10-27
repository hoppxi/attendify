
import express from 'express';
import { getStudentsMiddleware } from '../middlewares/get-students.js';

const router = express();

router.get('/attendance/today', async (res, req) => {
    await getStudentsMiddleware(res, req);
});


export default router;
