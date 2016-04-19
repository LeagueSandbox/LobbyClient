"use strict";

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;

if (process.argv.join(" ").indexOf("--dev") !== -1) {
    process.env.LOBBYCLIENT_DEV = "true";
}

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

let mainWindow;
app.on("ready", () => {
    mainWindow = new BrowserWindow({ width: 1200, height: 700, frame: false, transparent: true });
    mainWindow.loadURL(`file://${__dirname}/../ui/index.html`);
    mainWindow.openDevTools({ detach: true });

    mainWindow.on("closed", () => {
        mainWindow = null;
    });

    ipc.on("close", () => {
    	mainWindow && mainWindow.close();
    });

    ipc.on("minimize", () => {
    	mainWindow && mainWindow.minimize();
    });
});