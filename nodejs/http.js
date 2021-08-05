const http = require('http')
const serverProxy = http.createServer((req, res) => {
    res.end('Heelo world')
})
serverProxy.listen(8888, '127.0.0.1', () => {
    console.log('serverProxy started 8888')
})
// serverProxy.stop()