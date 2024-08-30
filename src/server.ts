import express from 'express';
import { join } from 'path';
import findFreePort from 'find-free-port';
import dotenv from 'dotenv';

dotenv.config();
const __rootname = process.cwd();
const server = express();
const webAppRootFolder: string = process.env.WEB_APP_ROOT_FOLDER || 'out';
const staticPath = join(__rootname, webAppRootFolder);
server.use(express.static(staticPath));

server.get('*', (_req, res) => {
    res.sendFile(join(__rootname, 'out', 'index.html'));
});

export function startServer(callback: (port: number) => void) {
    findFreePort(5000, (err, port) => {
        if (err) {
            console.error('Error finding a free port:', err);
            return;
        }

        server.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });

        callback(port);
    });
}
