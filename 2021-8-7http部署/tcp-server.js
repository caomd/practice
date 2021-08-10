const net = require('net')
const HOST = '127.0.0.1'
const POST = 7777

//创建一个TCP服务器实例，调用listen函数监听指定端口和ip
//net.createServer有一个参数 是监听连接建立的回调
net.createServer((socket) => {
    const remoteName = `${socket.remoteAddress}:${socket.remotePort}`;
    console.log(`${remoteName} 连接到本服务器`)
    //接收数据
    socket.on('data', (data) => {
        console.log(`${remoteName}-${data}`)
        //给客户端发消息
        socket.write(`你刚才说啥 说的是${data}吗？`)
    })
    socket.on('close', (data) => {
        console.log(`${remoteName} 连接关闭 `)
    })
}).listen(POST, HOST)

console.log(`Server listening on ${HOST}:${POST}`)