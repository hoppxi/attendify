import { app, BrowserWindow } from 'electron';
import { join } from 'path';
import dotenv from "dotenv";

dotenv.config();
const __rootname = process.cwd();

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

    const server: string = process.env.SERVER || "http://localhost:3000/settings";
    const builtPath: string = process.env.BUILTPATH || `file://${join(__dirname, '../out/index.html')}`; // copy out folder from next.js build;

    const startURL = app.isPackaged
        ? builtPath // Path to built Next.js app for loacl app
        : server; // Use the Next.js development server URL for development

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
