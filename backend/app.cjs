const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const QRCode = require("./routes/QRCODE")
const Attendace  = require("./models/Attendance")

app.use(bodyParser())
app.use("/qrcode", QRCode)


app.get("/attendance", async (req,res) => {
    var schoolID = req.query.schoolID
    var response = await Attendace.getTodayAttendance(schoolID)
    res.send(response)
})
app.listen(80, () => {
    console.log("[UP] Web Application is running")
})