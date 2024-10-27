const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const QRCodeRouter = require("./routes/QRCODE")
const APIRouter = require("./routes/API")
const Attendace  = require("./models/Attendance")

app.use(bodyParser())
app.use("/qrcode", QRCodeRouter)
app.use("/api", APIRouter)
app.get("/attendance", async (req,res) => {
    var schoolID = req.query.schoolID
    var response = await Attendace.getTodayAttendance(schoolID)
    res.send(response)
})
app.listen(80, () => {
    console.log("[UP] Web Application is running")
})