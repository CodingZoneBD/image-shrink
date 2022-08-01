const { app, BrowserWindow } = require('electron')

// Set ENV
process.env.NODE_ENV = "development"
// process.env.NODE_ENV = "production"

const isDev = process.env.NODE_ENV !== 'production' ? true : false;
const isMac = process.platform === 'darwin' ? true : false;


let mainWindow;

const createMainWindow = () => {
    const mainWindow = new BrowserWindow({
        title: "Image Shrink",
        width: 400,
        height: 600,
        icon: './assets/img/Icon.png',
        resizable: isDev ? true : false,
    })

    mainWindow.loadFile('./app/index.html')
}

// app.on('ready', createMainWindow)

app.whenReady().then(() => {
    createMainWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
    })
})

app.on('window-all-closed', () => {
    if (!isMac) app.quit()
})

app.allowRenderProcesse = true

