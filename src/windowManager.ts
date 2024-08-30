import { BrowserWindow } from 'electron';
import { join } from 'path';

export function createWindow(startURL: string) {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            preload: join(process.cwd(), 'preload/preload.js'),
        },
    });

    mainWindow.loadURL(startURL);
}
