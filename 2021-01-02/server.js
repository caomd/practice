const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
app.use(bodyParser.json())
app.use(cookieParser())//给req加cookie对象，给res加cookie函数
app.use(cors({
    origin: 'http://localhost:5000',
    credentials: true
}))
app.get('/', (req, res) => {
    res.send('hello world')
})
app.get('/api/json', (req, res) => {
    const { page, perPage } = req.query
    const { loginToken } = req.cookies;
    res.json({
        status: 0,
        loginToken
    })
})
app.post('/api/login', (req, res) => {
    const { username, password } = req.body
    //需要进行用户名和密码对鉴权，生成token
    res.cookie('loginToken', username, {
        maxAge: 1000 * 60 * 15,
        httpOnly: true//可以在浏览器中用document.cookie取到值
    })
    res.json({
        status: 0,
        data: username,
        msg: '登录成功'
    })
})
app.listen(8080, () => {
    console.log('start att 8080')
})