"use strict";
const { contextBridge, ipcRenderer } = require("electron");
contextBridge.exposeInMainWorld("api", {
  getAllRounds: () => ipcRenderer.invoke("getAllRounds")
});
