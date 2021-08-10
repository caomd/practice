const dgram = require('dgram')
const client = dgram.createSocket('udp4')
const message = Buffer.alloc(5, 'Hello')

// client.send(message, 0, message.length, 4444, 'localhost', (err, bytes) => {
//     console.log(`发送成功${bytes}字节`)//数据全部发送 
// })
client.send(message, 0, 2, 4444, 'localhost', (err, bytes) => {
    console.log(`发送成功${bytes}字节`)//服务端接收He
})

client.on('message', (buffer) => {
    console.log(buffer.toString())
})