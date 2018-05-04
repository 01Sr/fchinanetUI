const {app, BrowserWindow, net,globalShortcut} = require('electron')
const path = require('path')
const url = require('url')

//var定义的为全局变量，let定义的只在代码块内有效
// 保持一个对于 window 对象的全局引用，如果你不这样做，
// 当 JavaScript 对象被垃圾回收， window 会被自动地关闭
let win

//禁用本地缓存
app.commandLine.appendSwitch("--disable-http-cache");
// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
// app.on('ready', createWindow)

app.on('ready', () => {

    createWindow()
    globalShortcut.register('CommandOrControl+d', () => {
        // 打开开发这工具
        win.webContents.isDevToolsOpened()?win.webContents.closeDevTools():win.webContents.openDevTools()
    })
})

// 当窗口关闭时退出
app.on('window-all-closed', () => {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // 在macOS上，当单击dock图标并且没有其他窗口打开时，
    // 通常在应用程序中重新创建一个窗口。
    if (win === null) {
        createWindow()
    }
})

function createWindow() {
    // 创建一个窗口
    win = new BrowserWindow({
        width: 400,
        height: 450,
        // resizable:false,
        center:true,

    })
    // 加在应用的index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))


    //当window被关闭，这个事件会被触发
    win.on('closed', () => {
        // 取消对window对象的引用，如果你的应用支持多窗口的话，
        // 通常会把多个window对象存放在一个数组里面，
        // 与此同次，你应该删除对应的元素
        win = null
    })

    const {ipcMain} = require('electron')
    ipcMain.on('message-dialog', (event, arg) => {
        console.log(arg)  // prints "ping"
        const {dialog} = require('electron')
        console.log(dialog.showMessageBox({
            title:'Test',
            message:arg
        }))
        // event.sender.send('asynchronous-reply', 'pong')
    })
}

function redirectExample() {
    const request = net.request({
        url: 'HTTP://test.f-young.cn/',
        redirect: 'manual'
    })
    request.on('redirect', (statusCode, method, redirectUrl, responseHeaders) => {
        console.log(`STATUS: ${statusCode}`)
        console.log(`REDIRECTURL: ${redirectUrl}`)
        console.log(`HEADERS: ${JSON.stringify(responseHeaders)}`)
        // response.on('data', (chunk) => {
        //     console.log(`BODY: ${chunk}`)
        // })
    })
    request.on('response', (response) => {
        console.log(`STATUS: ${response.statusCode}`)
        console.log(`HEADERS: ${JSON.stringify(response.headers)}`)
        response.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`)
        })
        response.on('end', () => {
            console.log('response请求中没有更多数据。')
        })
    })
    request.end()
}




