const net = require('net')


const HOST = '127.0.0.1'
const POST = 7777

const client = new net.Socket()
const SERVER_NAME = `${HOST}:${POST}`

client.connect(POST, HOST, () => {
    console.log(`成功连接到${SERVER_NAME}`)
    let count = 0
    let timer = setInterval(() => {
        if(count>10){
            client.write(`马冬梅${count}`)
            clearInterval(timer)
            return
        }
        client.write(`马冬梅${count++}`)
    }, 1000);
})

client.on('data', (data) => {
    console.log(`${SERVER_NAME}-${data}`)
})

client.on('close', () => {
    console.log(`${SERVER_NAME}关闭连接 `)
})