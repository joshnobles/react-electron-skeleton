const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
    helloWorld: () => ipcRenderer.invoke('helloWorld')
})