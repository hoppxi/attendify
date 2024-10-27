const express = require("express")
const router = express()
const jimp = require("jimp")
const qrCode = require("qrcode-reader")
const QR = require("../models/QR.cjs")
const fs = require("fs")
const formidable = require("formidable")
const Attendace = require("../models/Attendance")
const Student = require("../models/Students")

function errorResponse(msg) {
    return {"StatusCode": "400", "Message": msg}
}
router.post("/attendStudent", (req,res) => {
    var form = new formidable.IncomingForm()
    form.parse(req,(err,fields,files) => {
        var imageFilePath = files.image[0].filepath
        var buffer = fs.readFileSync(imageFilePath)
        jimp.read(buffer,(err,image) => {
        if (err) console.log(err);
        let qrCodeReader = new qrCode()
        qrCodeReader.callback = async (err,value) => {
           var obfuscatedStudentID = value.result
           var isStudentAttended = Attendace.attendStudent(obfuscatedStudentID)
           if (isStudentAttended) {
            res.json(await Student.getStudentData(obfuscatedStudentID))
           }
           else {
            res.json(errorResponse("QR Code is not recognized please try again ..."))
           }
        }
        qrCodeReader.decode(image.bitmap)
     })
    })
        
})

router.get("/getInfo", (req,res) => {
    var form = new formidable.IncomingForm()
    form.parse(req,(err,fields,files) => {
        var imageFilePath = files.image[0].filepath
        var buffer = fs.readFileSync(imageFilePath)
        QR
        jimp.read(buffer,(err,image) => {
        if (err) console.log(err);
        let qrCodeReader = new qrCode()
        qrCodeReader.callback = async (err,value) => {
           var obfuscatedStudentID = value.result
           if (isStudentAttended) {
            res.json(await Student.getStudentData(obfuscatedStudentID))
           }
           else {
            res.json(errorResponse("QR Code is not recognized please try again ..."))
           }
        }
        qrCodeReader.decode(image.bitmap)
     })
    })
})


module.exports = router