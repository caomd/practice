## 1.初始化项目
npm i
## 2.安装项目需要的包
安装superagent,cheerio
## 3.修改package.json scrip
npm run start:node index.js
## 4.访问百度，获取html
const superagent = require('superagent')
const cheerio = require('cheerio')

superagent.get('http://www.baidu.com').end((err, res) => {
    if (err) {
        console.log(`访问失败-${err}`)
    } else {
        console.log(res.text)
    }
})
## 5.解析获取的html 
js
superagent.get('http://www.baidu.com').end((err, res) => {
    if (err) {
        console.log(`访问失败-${err}`)
    } else {
        // console.log(res.text)
        const htmlText = res.text;
        const $ = cheerio.load(htmlText)
        //爬取meta标签内容
        $('meta').each((index, ele) => {
            console.log(index);
            console.log($(ele).attr('content'));
        })
    }
})

## 抓取百度图片
1.检查url
 完整的url
 https://image.baidu.com/search/index?tn=baiduimage&ps=1&ct=201326592&lm=-1&cl=2&nc=1&ie=utf-8&word=%E7%8C%AB%E5%92%AA
 关键url
 https://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&word=%E7%8C%AB%E5%92%AA

tn=baiduimage 百度图片
word=encode('猫咪')
ie=utf-8 内容编码格式

2.检查DOM结构
## 不可以直接访问，带有转义符号，现在访问是400
https:\/\/gimg2.baidu.com\/image_search\/src=http%3A%2F%2Fwww.guojicoffee.com%2Fuploadfile%2F2016%2F1012%2F20161012103408530.jpg&refer=http%3A%2F%2Fwww.guojicoffee.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634192087&t=4d82acd872b69524dd7f62fc70f0b2f3
## 去掉之后可以访问 二次加工
https://gimg2.baidu.com/image_search\/src=http%3A%2F%2Fwww.guojicoffee.com%2Fuploadfile%2F2016%2F1012%2F20161012103408530.jpg&refer=http%3A%2F%2Fwww.guojicoffee.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634192087&t=4d82acd872b69524dd7f62fc70f0b2f3

## 图片的url叫做ObjURL字段，是存在于json当中的
{"ObjURL":"https:\/\/gimg2.baidu.com\/image_search\/src=http%3A%2F%2Fwww.guojicoffee.com%2Fuploadfile%2F2016%2F1012%2F20161012103408530.jpg&refer=http%3A%2F%2Fwww.guojicoffee.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634192087&t=4d82acd872b69524dd7f62fc70f0b2f3","ObjUrl"：...
## 这样的格式
## 正则
/"objURL":"(.*?)",/

## 写代码 访问百度图片
const superagent = require('superagent')
const cheerio = require('cheerio')
const word = '猫咪'//要encodeURIComponent(word)
//不要用https
// https://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&word=%E7%8C%AB%E5%92%AA
superagent.get(`http://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&word=${encodeURIComponent(word)}`).end((err, res) => {
    if (err) {
        console.log(`访问失败-${err}`)
    } else {
        // console.log(res.text)
        const htmlText = res.text;
        const $ = cheerio.load(htmlText)
        console.log(htmlText)
    }
})
## 触发了百度的反爬策略
// <title>百度安全验证</title>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <title>百度安全验证</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
    <meta name="format-detection" content="telephone=no, email=no">
    <link rel="shortcut icon" href="https://www.baidu.com/favicon.ico" type="image/x-icon">
    <link rel="icon" sizes="any" mask href="https://www.baidu.com/img/baidu.svg">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <link rel="stylesheet" href="https://ppui-static-wap.cdn.bcebos.com/static/touch/css/api/mkdjump_0635445.css" />
</head>
<body>
    <div class="timeout hide">
        <div class="timeout-img"></div>
        <div class="timeout-title">网络不给力，请稍后重试</div>
        <button type="button" class="timeout-button">返回首页</button>
    </div>
    <div class="timeout-feedback hide">
        <div class="timeout-feedback-icon"></div>
        <p class="timeout-feedback-title">问题反馈</p>
    </div>

<script src="https://wappass.baidu.com/static/machine/js/api/mkd.js"></script>
<script src="https://ppui-static-wap.cdn.bcebos.com/static/touch/js/mkdjump_fbb9952.js"></script>
</body>
</html>

## 怎么办? 
最大程度模拟浏览器行为!! 尽量和浏览器一致， 尤其是Accept，User-Agent
const superagent = require("superagent");
const cheerio = require("cheerio");
const fs = require('fs');

const word = '猫咪';

const headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
    'sec-ch-ua': '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"'
}


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
            console.log(`访问失败 - ${err}`)
        } else {
            const htmlText = res.text;
            const $ = cheerio.load(htmlText);
            console.log(htmlText);
        }
    });
## 运行可以了 
## 4.获取图片链接列表 要用正则
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
            
            //使用正则
            const imageMatches = htmlText.match(/"objURL":"(.*?)",/g)

            console.log(imageMatches)
            //['"objURL":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-4217705462-A0DB0610273934028258842EFE8E1FEE%2F0%3Ffmt%3Djpg%26size%3D22%26h%3D393%26w%3D640%26ppv%3D1&refer=http%3A%2F%2Fqqpublic.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634198562&t=3bd8ea793cef95dc9ec14e75be95f6a1",',
            '"objURL":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww3.sinaimg.cn%2Fmw690%2F002Qjjnugy1gu9dds5qfij60ro0qotbb02.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634198562&t=9f8b54cb3821ae46e01346f39ffd03cb",',]
            

        }
    })

    //拿到value值
            const imageList = imageMatches.map(item => {
                const imageUrl = item.match(/:"(.*?)",/g);
                return RegExp.$1;//拿到括号1匹配内容，如果有两个括号拿到括号2匹配内容用$2
            })

   
  ## //打印一下，随便取一个打开链接，是相应的图片
   console.log(imageList, 'imageList')
   [
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqqpublic.qpic.cn%2Fqq_public%2F0%2F0-4217705462-A0DB0610273934028258842EFE8E1FEE%2F0%3Ffmt%3Djpg%26size%3D22%26h%3D393%26w%3D640%26ppv%3D1&refer=http%3A%2F%2Fqqpublic.qpic.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=d6e47db25628285f1d1b5917ac9ff1ec',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww4.sinaimg.cn%2Fmw690%2F002Qjjnugy1gu9ddrjw5vj60rt0qoq5k02.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=11d0288b4d7efeab567b6bb629987c92',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww3.sinaimg.cn%2Fmw690%2F002Qjjnugy1gu9dds5qfij60ro0qotbb02.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=b7a2d82a9f9c961208a5d431b6a2f7c3',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww1.sinaimg.cn%2Fmw690%2F002Qjjnugy1gu9ddvnl2jj60rh0qotbj02.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=590b971ccc81d2d056e778cecc0f22d1',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww1.sinaimg.cn%2Fmw690%2F002Qjjnugy1gu9dduv7j3j60rn0qodil02.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=c202703eca110fa5c890e091914eb731',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww2.sinaimg.cn%2Fmw690%2F005B96Eqly1gueum607iej60yk0pydk502.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=84a0771e87dddf2f4fee72446b75d678',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx3.sinaimg.cn%2Fmw690%2F002Qjjnugy1gu9ddsqs5mj60rh0qowgk02.jpg&refer=http%3A%2F%2Fwx3.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=b15f0c7763c97fb452d6818c9c3825a5',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww2.sinaimg.cn%2Fmw690%2F0030ynTTly1gub8gi5rqyj60t612wwnt02.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=9fee1bec916db3424a5e217778f5ead5',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx4.sinaimg.cn%2Fmw690%2F0030ynTTly1gub8getv1mj60vf15w7br02.jpg&refer=http%3A%2F%2Fwx4.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=32c9b7bb8798990229913e6a73d294c8',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww3.sinaimg.cn%2Fmw690%2F0030ynTTly1gub8gf6xbej60t612wth602.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=8fe474c5a6c2357901ec8d34aa8ca7c3',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx2.sinaimg.cn%2Fmw690%2F0029RpS4ly1guetf7tejwj60zk0qoq7a02.jpg&refer=http%3A%2F%2Fwx2.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=e1536417daa8b0028378fe14a41302be',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx1.sinaimg.cn%2Fmw690%2F0029RpS4ly1guetf7mxnsj60zk0pegqm02.jpg&refer=http%3A%2F%2Fwx1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=2f3785c1ef8a52dbf3fd01d1ceeaa03b',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx3.sinaimg.cn%2Fmw690%2F0030ynTTly1gub8gjgp0rj60t612wdnc02.jpg&refer=http%3A%2F%2Fwx3.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=f6c609f15ccb7da220e70d5f6470a9cc',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx1.sinaimg.cn%2Fmw690%2F0030ynTTly1gub8ggjfsbj60t612w11402.jpg&refer=http%3A%2F%2Fwx1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=6e438bd5db2d7e772f06667f4e418512',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww4.sinaimg.cn%2Fmw690%2F0030ynTTly1gub8gg8ttzj60t612wgtv02.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=6b319e3f590500490bed69dd88cd579e',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx4.sinaimg.cn%2Fmw690%2F0030ynTTly1gub8ghwu8gj60t612w46h02.jpg&refer=http%3A%2F%2Fwx4.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=150a06531f9910b159b49a5b127f3ea2',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx2.sinaimg.cn%2Fmw690%2F0030ynTTly1gub8gjrae5j60t612wdo702.jpg&refer=http%3A%2F%2Fwx2.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=5250076b9e55d22906416cc6d4d71458',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx1.sinaimg.cn%2Fmw690%2F003PTKqXly1gua5keyrmfj60dq0c0aal02.jpg&refer=http%3A%2F%2Fwx1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=b79205ca6c9c9fa4ea8c35098d850d8c',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww1.sinaimg.cn%2Fmw690%2F0030ynTTly1gub8ghn5r6j60t612wthn02.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=d9b5eed3689663c8dedca91c2f174044',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww1.sinaimg.cn%2Fmw690%2Fd186e357ly1gtuav965hzj20j60j6acj.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=d64b7b95e18360ee3c275d12b3a4d5e1',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-0a760f7fe141e66bc765bd780d2e0a38_1440w.jpg%3Fsource%3D172ae18b&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=e3d3e596e3367894d64ed45616541aaf',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww3.sinaimg.cn%2Fmw690%2F006nNKJ2ly1gto9bz4ov2j60zj1bdqhh02.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=b487628a45aa8127b932d54d540a9145',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx3.sinaimg.cn%2Fmw690%2F002li8TJly1gtvcqu5uckj60u00u0jvq02.jpg&refer=http%3A%2F%2Fwx3.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=b018d36c3cacb56a5bc07dcd9631206c',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx4.sinaimg.cn%2Fmw690%2F0074FH44ly1gt8ig166u8j30to0z843h.jpg&refer=http%3A%2F%2Fwx4.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=444b87f6ddcc0e673af6fec32b5299e8',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.mingyihui.net%2Fupload%2F1906%2F15%2F156056169150.jpg&refer=http%3A%2F%2Fwww.mingyihui.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=94fdb21119f961592453b60a843609b9',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx4.sinaimg.cn%2Fmw690%2F006nNKJ2ly1gtv6oyqo4pj60zk0zkn6m02.jpg&refer=http%3A%2F%2Fwx4.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=0a0876a1564e1ee2a922c3d7e441b494',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw640h640%2F20180102%2Fad98-fyqefvx0348881.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=8a59a35e80fa286d6159c4dfe614cac7',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0823%252F79e259c7j00qyag1401f7c001kw011xc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=53aa6b37905f7b1c84a00ea68563e86d',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww1.sinaimg.cn%2Fmw690%2F002li8TJly1gtvcqtwlwij60u00w30vs02.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=84c520bb2955ad0ea4c36c1bc871b4f6',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx4.sinaimg.cn%2Fmw690%2Fd186e357ly1gtuav9bowxj20j60j6mzj.jpg&refer=http%3A%2F%2Fwx4.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634199095&t=e1c00c15594c2d6fbfb0d27aad1f4842'
]         

## 5.获取图片的标题列表
字段名 fromPageTitle
 const titleMatches = htmlText.match(/"fromPageTitle":"(.*?)",/g)
            const titleList = titleMatches.map(item => {
                const title = item.match(/:"(.*?)",/g);
                return RegExp.$1;//拿到括号1匹配内容，如果有两个括号拿到括号2匹配内容用$2
            })
            console.log(titleList, 'titleList')
## 考虑去掉<strong>
[
  '<strong>猫咪<\\/strong>,老鼠',
  '看起来就不太聪明的<strong>猫咪<\\/strong>',
  '看起来就不太聪明的<strong>猫咪<\\/strong>',
  '看起来就不太聪明的<strong>猫咪<\\/strong>',
  '看起来就不太聪明的<strong>猫咪<\\/strong>',
  '看起来就不太聪明的<strong>猫咪<\\/strong>',
  '千万不要偷看<strong>猫咪<\\/strong>洗澡',
  '看起来就不太聪明的<strong>猫咪<\\/strong>',
  '北京<strong>猫咪<\\/strong>领养',
  '北京<strong>猫咪<\\/strong>领养',
  '北京<strong>猫咪<\\/strong>领养',
  '千万不要偷看<strong>猫咪<\\/strong>洗澡',
  '北京<strong>猫咪<\\/strong>领养',
  '北京<strong>猫咪<\\/strong>领养',
  '北京<strong>猫咪<\\/strong>领养',
  '北京<strong>猫咪<\\/strong>领养',
  '北京<strong>猫咪<\\/strong>领养',
  '<strong>猫咪<\\/strong>是怎样表达爱意的',
  '北京<strong>猫咪<\\/strong>领养',
  '<strong>猫咪<\\/strong>能有多撩人',
  '壁纸 动物 猫 <strong>猫咪<\\/strong> 小猫 桌面 889_500',
  '您的猫猫外卖到啦##<strong>猫咪<\\/strong>界女明星',
  '<strong>猫咪<\\/strong>##可爱',
  '<strong>猫咪<\\/strong>高质量接吻',
  '原来小<strong>猫咪<\\/strong>才是摆拍达人##猫的崩溃就在一瞬间',
  '<strong>猫咪<\\/strong>吃塑料袋是什么原因',
  '<strong>猫咪<\\/strong>##可爱',
  '<strong>猫咪<\\/strong>能有多撩人',
  '<strong>猫咪<\\/strong>感冒',
  '手机壁纸推荐:猫叔猫奴<strong>猫咪<\\/strong>控们,你们的小主子喵星人'
] 

## 6.提取公共函数
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
//使用公共函数
            const imageList = getValueListByReg(htmlText, 'objURL')
            const titleList = getValueListByReg(htmlText, 'fromPageTitle')
            console.log(imageList, 'imageList')
            console.log(titleList, 'titleList')

## 7.去除标题中的冗余内容
<strong><\\/strong>

## 使用replace          
const titleList = getValueListByReg(htmlText, 'fromPageTitle')
.map(item => item.replace('<strong>', '').replace('<\\/strong>', ''))

## 8.创建image目录存储图片
function mkImageDir(pathname) {
    const fullPath = path.resolve(__dirname, pathname);
    //判断当前路径是否存在
    if (fs.existsSync(fullPath)) {
        console.log(`${pathname} 目录已存在，跳过此步骤`)
        return
    }
    //创建目录
    fs.mkdirSync(fullPath);
    console.log(`创建目录${pathname} 成功`)
}

## 9.下载图片到images目录
//下载图片到images index防止百度爬到有重名的现象
function downloadImage(url, name, index) {
    const fullPath = path.join(__dirname, 'images', `${index}-${name}.png`)
    //判断是否存在
    if (fs.existsSync(fullPath)) {
        console.log(`文件已存在，跳过此步骤：${name}`)
        return
    }
    superagent.get(url).end((err, res) => {
        if (err) {
            console.log(err);
            return
        }
        //异步的,binary 二进制的
        fs.writeFile(fullPath, res.body, 'binary', (err) => {
            if (err) {
                console.log(err)
                return
            }
            console.log(`下载成功 ${url}`);
        })
    })
}

## 10.加个进度条 cli-progress
安装 cnpm i cli-progress -D 
修改函数为promise的，确认返回的成功图片个数，succeed++ 进度条更新
//图片目录
function mkImageDir(pathname) {

    ##  //返回Promise  
    return new Promise((resolve,reject) => {
    const fullPath = path.resolve(__dirname, pathname);
    //判断当前路径是否存在
    if (fs.existsSync(fullPath)) {
        // console.log(`${pathname} 目录已存在，跳过此步骤`)
        // return
        return reject(`${pathname} 目录已存在，跳过此步骤`)
    }
    //创建目录
    fs.mkdirSync(fullPath);
    console.log(`创建目录${pathname} 成功`)
    return resolve()
    })
}

//下载图片到images index防止百度爬到有重名的现象
function downloadImage(url, name, index) {
    
   ## //返回Promise
    return new Promise((resolve,reject) => {
     const fullPath = path.join(__dirname, 'images', `${index}-${name}.png`)
    //判断是否存在
    if (fs.existsSync(fullPath)) {
        return reject(`文件已存在，跳过此步骤：${name}`)
    }
    superagent.get(url).end((err, res) => {
        if (err) {
            return reject(err);
        }
        //异步的,binary 二进制的
        fs.writeFile(fullPath, res.body, 'binary', (err) => {
            if (err) {
                return reject(err)
            }
            // console.log(`下载成功 ${url}`);
            return resolve();
        })
    })
    })
}

superagent
    .get(`http://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&word=${encodeURIComponent(word)}`)
    .set('Accept', headers['Accept'])
    .set('Accept-Encoding', headers['Accept-Encoding'])
    .set('Accept-Language', headers['Accept-Language'])
    .set('Cache-Control', headers['Cache-Control'])
    .set('Connection', headers['Connection'])
    .set('User-Agent', headers['User-Agent'])
    .set('sec-ch-ua', headers['sec-ch-ua'])
    //修改下载为Promise 这里为异步async await
    .end(async (err, res) => {
        if (err) {
            console.log(`访问失败-${err}`)
        } else {
            // console.log(res.text)
            const htmlText = res.text;
            const $ = cheerio.load(htmlText)
            //使用公共函数
            const imageList = getValueListByReg(htmlText, 'objURL')
            const titleList = getValueListByReg(htmlText, 'fromPageTitle').map(item => item.replace('<strong>', '').replace('<\\/strong>', ''))
            total = titleList.length;
            try {
              //创建images目录 await
              
              ## 异步
             await mkImageDir('images')
            bar1.start(total,0);
            //下载图片到目录
            imageList.forEach((url, index) => {
                //titleList 一一对应的 
                downloadImage(url, titleList[index], index)
                .then(()=>{
                    succeed++;
                    bar1.update(succeed)
                }).then(()=>{
                    if(succeed===total){
                        bar1.stop();
                        console.log('恭喜，图片下载完成！！！')
                    }
                })
            })  
            } catch (error) {
            }
        }
    })

## 11.已存在images 先删除再创建
创建删除函数 removeDir
//删除images文件夹
function removeDir(pathname){
    const fullPath = path.resolve(__dirname,pathname);
    const process = require('child_process');
    console.log(`${pathname}目录已存在，准备执行删除`)
    process.execSync(`rm -rf ${fullPath}`)
    console.log(`历史目录${pathname}删除完成`)

}

## 12.使用cli 输入关键词 以上是写死的猫咪  需引入两个库 commander 和 inquirer
安装 commander inquirer
## inquirer 配置各种选项拿到用户的答案 commander 提供给程序各种各样的指令
const inquirer = require('inquirer')
const commander = require('commander')

const {runImage} = require('./image.handler.js')

const initQuestions = [
    {
        type:'checkbox',
        name: 'channels',
        message:'请选择想要搜索的渠道',
        choices:[
            {
                name:'百度图片',
                value:'images'
            },
             {
                name:'百度视频',
                value:'vedio '
            }
        ]
    },
    {
        type:'input',
        name:'keyword',
        message:'请输入想要搜索的关键词'
    }
]

inquirer.prompt(initQuestions).then(result => {
    const { keyword, channels} = result;
    for(let channel of channels){
        switch (channel) {
            case 'images':
                runImage(keyword)
                break;
        }
    }
})

## 14.自定义爬取图片的数量?
https://image.baidu.com/search/acjson?tn=resultjson_com&logid=14849800632459385078&ipn=rj&ct=201326592&is=&fp=result&queryWord=%E7%8C%AB%E5%92%AA&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=&z=&ic=&hd=&latest=&copyright=&word=%E7%8C%AB%E5%92%AA&s=&se=&tab=&width=&height=&face=&istype=&qc=&nc=1&fr=&expermode=&nojc=&pn=300&rn=30&gsm=12c&1631671103576=

精简后：
https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord=%E7%8C%AB%E5%92%AA&ie=utf-8&oe=utf-8&word=%E7%8C%AB%E5%92%AA&pn=300&rn=30&1631671103576=

封装request
function request(url) {
    return new Promise((resolve, reject) => {
        superagent
            .get(url)
            .set('Accept', headers['Accept'])
            .set('Accept-Encoding', headers['Accept-Encoding'])
            .set('Accept-Language', headers['Accept-Language'])
            .set('Cache-Control', headers['Cache-Control'])
            .set('Connection', headers['Connection'])
            .set('User-Agent', headers['User-Agent'])
            .set('sec-ch-ua', headers['sec-ch-ua'])
            //修改下载为Promise 这里为异步async await
            .end(async (err, res) => {
                if (err) {
                    // console.log(`访问失败-${err}`)
                    reject(`访问失败-${err}`)
                } else {
                    resolve()
                }
            })
    })
}

## 报错UnhandledPromiseRejectionWarning: TypeError: Cannot read property 'text' of undefined 大断点 执行 runImage('猫咪',30)
错误点：resolve() ===》 resolve(res)