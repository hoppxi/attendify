import express from 'express';
import { attendMiddleware, getInfoMiddleware } from '../middlewares/attend.js';

const router = express();

router.get("/getInfo", getInfoMiddleware)
router.post("/attendStudent", (req,res) => {
    console.log("hello world")
    attendMiddleware(req,res)
});


export default router;
