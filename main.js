const { app, BrowserWindow } = require('electron');

require('electron-reload')(__dirname);

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadURL(`file://${__dirname}/src/index.html`);
});
