const superagent = require('superagent')
const cheerio = require('cheerio')
const word = '猫咪'//要encodeURIComponent(word)
const headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
    'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"'
}

//提取公共函数
function getValueListByReg(str, key) {
    //实例一个正则表达式
    const reg = new RegExp(`"${key}":"(.*?)"`, 'g');
    const matchResult = str.match(reg)
    const resList = matchResult.map(item => {
        const title = item.match(/:"(.*?)"/g);
        return RegExp.$1;//拿到括号1匹配内容，如果有两个括号拿到括号2匹配内容用$2
    })
    return resList
}

//不要用https
// https://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&word=%E7%8C%AB%E5%92%AA
superagent
    .get(`http://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&word=${encodeURIComponent(word)}`)
    .set('Accept', headers['Accept'])
    .set('Accept-Encoding', headers['Accept-Encoding'])
    .set('Accept-Language', headers['Accept-Language'])
    .set('Cache-Control', headers['Cache-Control'])
    .set('Connection', headers['Connection'])
    .set('User-Agent', headers['User-Agent'])
    .set('sec-ch-ua', headers['sec-ch-ua'])
    .end((err, res) => {
        if (err) {
            console.log(`访问失败-${err}`)
        } else {
            // console.log(res.text)
            const htmlText = res.text;
            const $ = cheerio.load(htmlText)
            // console.log(htmlText)
            // const imageMatches = htmlText.match(/"objURL":"(.*?)",/g)
            // console.log(imageMatches)
            // //console.log(imageMatches)
            // //['"objURL":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-4217705462-A0DB0610273934028258842EFE8E1FEE%2F0%3Ffmt%3Djpg%26size%3D22%26h%3D393%26w%3D640%26ppv%3D1&refer=http%3A%2F%2Fqqpublic.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634198562&t=3bd8ea793cef95dc9ec14e75be95f6a1",',
            // //拿到value值
            // const imageList = imageMatches.map(item => {
            //     const imageUrl = item.match(/:"(.*?)",/g);
            //     return RegExp.$1;//拿到括号1匹配内容，如果有两个括号拿到括号2匹配内容用$2
            // })
            // console.log(imageList, 'imageList')
            //标题名 字段名fromPageTitle
            // const titleMatches = htmlText.match(/"fromPageTitle":"(.*?)",/g)
            // const titleList = titleMatches.map(item => {
            //     const title = item.match(/:"(.*?)",/g);
            //     return RegExp.$1;//拿到括号1匹配内容，如果有两个括号拿到括号2匹配内容用$2
            // })
            // console.log(titleList, 'titleList')
            //使用公共函数
            const imageList = getValueListByReg(htmlText, 'objURL')
            const titleList = getValueListByReg(htmlText, 'fromPageTitle').map(item => item.replace('<strong>', '').replace('<\\/strong>', ''))
            console.log(imageList, 'imageList')
            console.log(titleList, 'titleList')
        }
    })
