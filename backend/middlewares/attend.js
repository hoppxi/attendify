import Jimp from 'jimp';
import { readFileSync } from 'fs';
import { IncomingForm } from 'formidable';
import { QR } from '../models/qr.js';
import { attendStudent } from '../models/attendance.js';
import { getStudentData } from '../models/students.js';
import { errorResponse } from '../helper/error-response.js';

const attendMiddleware = (req, res) => {
    const form = new IncomingForm();

    form.parse(req, async (_err, _fields, files) => {
        const imageFilePath = files.image[0].filepath;
        const buffer = readFileSync(imageFilePath);

        try {
            const image = await Jimp.read(buffer);
            const imageData = {
                data: image.bitmap.data,
                width: image.bitmap.width,
                height: image.bitmap.height,
            };

            // I used the QR class here
            const obfuscatedStudentID = QR.getQrCodeData(imageData);

            if (obfuscatedStudentID) {
                const isStudentAttended = attendStudent(obfuscatedStudentID);

                if (isStudentAttended) {
                    res.json(await getStudentData(obfuscatedStudentID));
                } else {
                    res.json(
                        errorResponse(
                            'QR Code is not recognized, please try again ...'
                        )
                    );
                }
            } else {
                res.json(errorResponse('No QR code found in the image.'));
            }
        } catch (error) {
            console.error('Error reading or processing the image:', error);
            res.json(errorResponse('Failed to process the QR code image.'));
        }
    });
};

export { attendMiddleware };
