const jimp = require("jimp");
const qrCode = require("qrcode-reader")

class QR {
    
    static async getQrCodeData(buffer) {
        var result = ""
        var qrCodeReader = new qrCode()
        var data = buffer
        var newa = await jimp.read(data, async (err,image) => {
            if (err) console.log(err);
            qrCodeReader.callback = (err,value) => {
               var obfuscatedStudentID = value.result
               result = obfuscatedStudentID
            }
            qrCodeReader.decode(image.bitmap)
            
         })
         console.log(newa)
         return result
    }
}

module.exports = QR