
import { app, BrowserWindow } from 'electron';
import { createWindow } from './windowManager';
import { startServer } from './server';

let startURL: string = '';
let PORT: number = 0;

startServer((port: number) => {
    PORT = port;
    // Using remote server is recommend
    startURL = process.env.REMOTE_SERVER_URL || `http://localhost:${PORT}`;
    app.whenReady().then(() => createWindow(startURL));
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0 && startURL) {
        createWindow(startURL);
    }
});
