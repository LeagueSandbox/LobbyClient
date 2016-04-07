"use strict";

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

let mainWindow;
app.on("ready", () => {
    mainWindow = new BrowserWindow({ width: 1530, height: 755, frame: false, transparent: true });
    mainWindow.loadURL(`file://${__dirname}/../ui/index.html`);
    mainWindow.openDevTools({ detach: true });

    mainWindow.on("closed", () => {
        mainWindow = null;
    });
});