import QRCodeReader from 'qrcode-reader';

class QR {
    static async getQrCodeData(imageBuffer) {
        var qrCodeReader = new QRCodeReader()        
        var code = await new Promise((resolve,reject) => {
            qrCodeReader.callback = (err,value) => err != null ? reject(err) : resolve(value)
            qrCodeReader.decode(imageBuffer)
        })
        if (code) {
            console.log('QR code data:', code.result);
            return code.result;
        } else {
            console.log('No QR code found. ' + code);
            return false;
        }
    }
}

export { QR };
