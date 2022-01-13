const { app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

let mainWindow;

/**
 * Creates a new Electron Window
 */
createWindow = () => {

  // Declare dimensions for Electron window
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Define Electron app build path
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: 'file',
      slashes: true
    })
  );

  // Initialize DevTools
  mainWindow.webContents.openDevTools();

  // Event listener for when the Electron window is closed
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

/**
 * Event listener for when the application is 'ready'
 * Creates the Electron Window
 */
app.on('ready', createWindow);

/**
 * Event listener for when the application is activated from dock
 * MacOS specific
 */
app.on('activate', () => {
  if(win === null) createWindow();
});

/**
 * Event listener for when all windows are closed.
 * MacOS specific
*/
app.on('window-all-closed', () => {
  if(process.platform === 'darwin') app.quit();
});
