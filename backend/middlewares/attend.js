import qrCode from 'qrcode-reader';
import { read } from 'jimp';
// import QR from '../models/qr.js';
import { readFileSync } from 'fs';
import { IncomingForm } from 'formidable';
import { attendStudent } from '../models/attendance.js';
import { getStudentData } from '../models/students.js';
import { errorResponse } from '../helper/error-response.js';

const attendMiddleware = (req, res) => {
    const form = new IncomingForm();
    form.parse(req, (_err, _fields, files) => {
        const imageFilePath = files.image[0].filepath;
        const buffer = readFileSync(imageFilePath);

        read(buffer, (err, image) => {
            if (err) console.log(err);
            let qrCodeReader = new qrCode();

            qrCodeReader.callback = async (_err, value) => {
                const obfuscatedStudentID = value.result;
                const isStudentAttended = attendStudent(obfuscatedStudentID);
                if (isStudentAttended) {
                    res.json(await getStudentData(obfuscatedStudentID));
                } else {
                    res.json(
                        errorResponse(
                            'QR Code is not recognized please try again ...'
                        )
                    );
                }
            };

            qrCodeReader.decode(image.bitmap);
        });
    });
}

export { attendMiddleware };