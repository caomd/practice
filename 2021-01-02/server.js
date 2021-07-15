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
// 当省略时使用的默认引擎扩展名   eg： app.set('view engine', 'ejs') //设置模板引擎为 ejs	
app.set('view engine', 'pug');
app.get('/', (req, res) => {
    res.render('index',
        {
            articles: [
                { title: "文章1", imageList: ["https://source.unsplash.com/random/450x300"] },
                { title: "文章2", imageList: ["https://source.unsplash.com/random/450x300"] },
                { title: "文章3", imageList: ["https://source.unsplash.com/random/450x300"] },
                { title: "文章4", imageList: ["https://source.unsplash.com/random/450x300"] },
                { title: "文章5", imageList: ["https://source.unsplash.com/random/450x300"] },
            ]
        }
    )
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