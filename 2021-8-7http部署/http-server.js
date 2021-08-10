const http = require('http')
http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello world');
}).listen(80, '127.0.0.1');
console.log('Sever is running Port 80')

curl - v http://127.0.0.1:80
//TCP的三次握手
* Trying 127.0.0.1...
* TCP_NODELAY set
    * Connected to 127.0.0.1(127.0.0.1) port 80(#0)
        * //客户端向服务端发送报文
        > GET / HTTP / 1.1
        > Host: 127.0.0.1
            > User - Agent: curl / 7.64.1
                > Accept: */*
> 
//服务端响应客户端内容
< HTTP/1.1 200 OK
< Content-Type: text/plain
< Date: Tue, 10 Aug 2021 11:04:26 GMT
< Connection: keep-alive
< Transfer-Encoding: chunked
< 
* Connection #0 to host 127.0.0.1 left intact
//data
Hello world* Closing connection 0