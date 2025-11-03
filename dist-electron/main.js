"use strict";
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");
let win;
function createWindow() {
  win = new BrowserWindow({
    width: 1100,
    height: 700,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, "preload.js")
    }
  });
  const devUrl = process.env.VITE_DEV_SERVER_URL;
  if (devUrl) {
    win.loadURL(devUrl);
    win.webContents.openDevTools();
  } else
    win.loadFile(path.join(__dirname, "../dist/index.html"));
}
app.whenReady().then(createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin")
    app.quit();
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0)
    createWindow();
});
ipcMain.handle("helloWorld", () => "Hello World!");
