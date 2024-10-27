import jsQR from 'jsqr'; // This library is shorter

class QR {
    static getQrCodeData(imageData) {
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code) {
            console.log('QR code data:', code.data);
            return code.data;
        } else {
            console.log('No QR code found.');
            return false;
        }
    }
}

export { QR };
