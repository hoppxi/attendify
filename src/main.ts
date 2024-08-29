import { app, BrowserWindow } from 'electron';
import { join } from 'path';
import dotenv from "dotenv";
import express from 'express';

dotenv.config();
const __rootname = process.cwd();

// Create an Express server for the local out files so that electron can load js and css
const server = express();
const staticPath = join(__rootname, 'out');
server.use(express.static(staticPath));

const PORT: number | string | undefined = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            // Preload can be used to enhance security by separating the Electron API from the renderer
            preload: join(__rootname, 'dist/preload.js'), 
        },
    });

    const startURL: string = `http://localhost:${PORT}`;
    mainWindow.loadURL(startURL);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
