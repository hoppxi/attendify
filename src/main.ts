import { app, BrowserWindow } from 'electron';
import * as path from 'path';

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            // Preload can be used to enhance security by separating the Electron API from the renderer
            preload: path.join(__dirname, 'preload.js'), 
        },
    });

    const server: string = process.env.SERVER || "http://localhost:3000";
    const builtPath: string = process.env.BUILTPATH || `file://${path.join(__dirname, '../out/index.html')}`; // copy out folder from next.js build;

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
