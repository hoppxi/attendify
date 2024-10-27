import qrCode from 'qrcode-reader';

class QR {

    static qrCodeReader = new qrCode();

    static getQrCodeData(image) {
        this.qrCodeReader.callback = (_err, value) => {
            try {
                console.log(value.result);
                return value;
            } catch (error) {
                console.log(error);
                return 'none';
            }
        };
        return this.qrCodeReader.decode(image.bitmap);
    }
}

export default QR;
