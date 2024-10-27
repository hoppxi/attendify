import express from 'express';
import { attendMiddleware } from '../middlewares/attend.js';

const router = express();

router.post('/attendStudent', (res, req) => {
    attendMiddleware(res, req);
});

export default router;
