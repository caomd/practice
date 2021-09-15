const superagent = require('superagent')
const cheerio = require('cheerio')
const path = require('path')
const fs = require('fs')
const cliProgress = require('cli-progress')
const { resolve } = require('path')
const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
let total = 0; //总数
let succeed = 0; //下载成功了多少张图片
const word = '猫咪'//要encodeURIComponent(word)
const headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept2': 'text/plain, */*; q=0.01',
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

//图片目录
function mkImageDir(pathname) {
    return new Promise((resolve, reject) => {
        const fullPath = path.resolve(__dirname, pathname);
        //判断当前路径是否存在
        if (fs.existsSync(fullPath)) {
            // console.log(`${pathname} 目录已存在，跳过此步骤`)
            // return
            // return reject(`${pathname} 目录已存在，跳过此步骤`)
            removeDir(pathname)
        }
        //创建目录
        fs.mkdirSync(fullPath);
        console.log(`创建目录${pathname} 成功`)
        return resolve()
    })
}

//下载图片到images index防止百度爬到有重名的现象
function downloadImage(url, name, index, assetDir) {
    return new Promise((resolve, reject) => {
        const fullPath = path.join(__dirname, assetDir, `${index}-${name}.png`)
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

//删除images文件夹
function removeDir(pathname) {
    const fullPath = path.resolve(__dirname, pathname);
    const process = require('child_process');
    console.log(`${pathname}目录已存在，准备执行删除`)
    process.execSync(`rm -rf ${fullPath}`)
    console.log(`历史目录${pathname}删除完成`)

}

function request(url, AcceptKey = 'Accept') {
    return new Promise((resolve, reject) => {
        superagent
            .get(url)
            .set('Accept', headers[AcceptKey])
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
                    resolve(res)
                }
            })
    })
}

async function getImageByPage(start, total, keyword) {
    let allImages = []
    while (start < total) {//当前远远没有拿到数量，百度最多请求60张
        const size = Math.min(60, total - start)//最多60张，现在是51张，还要请求9张
        const res = await request(`https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord=${encodeURIComponent(keyword)}&ie=utf-8&oe=utf-8&word=${encodeURIComponent(keyword)}&pn=${start}&rn=${size}&${Date.now()}=`, 'Accept2')
        allImages = allImages.concat(JSON.parse(res.text).data)
        start = start + size

    }
    return allImages
}

//不要用https
// https://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&word=%E7%8C%AB%E5%92%AA
function runImageInit(word) {
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
                // console.log(imageList, 'imageList')
                // console.log(titleList, 'titleList')
                total = titleList.length;
                try {
                    //创建images目录 await
                    await mkImageDir('images')
                    bar1.start(total, 0);
                    //下载图片到目录
                    imageList.forEach((url, index) => {
                        //titleList 一一对应的 
                        downloadImage(url, titleList[index], index, assetDir)
                            .then(() => {
                                succeed++;
                                bar1.update(succeed)
                            }).then(() => {
                                if (succeed === total) {
                                    bar1.stop();
                                    console.log('恭喜，图片下载完成！！！')
                                }
                            })
                    })
                } catch (error) {
                }
            }
        })
}

function runImage(word, counts) {
    request(`http://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&word=${encodeURIComponent(word)}`)
        .then(async (res) => {
            const htmlText = res.text;
            const $ = cheerio.load(htmlText)
            //使用公共函数
            const imageList = getValueListByReg(htmlText, 'objURL')
            const titleList = getValueListByReg(htmlText, 'fromPageTitle').map(item => item.replace('<strong>', '').replace('<\\/strong>', ''))
            //处理数据为对象，{imagUrl,title}
            let allImageUrls = imageList.map((imageUrl, index) => (
                //返回一个对象中括号阔起来
                {
                    imageUrl,
                    title: titleList[index]
                }
            ))
            const firstPageCount = allImageUrls.length
            const assetDir = `images-${word}`
            //处理counts数据
            if (counts > firstPageCount) {
                const restImageUrls = await getImageByPage(firstPageCount, counts, word)
                //处理返回数据中含有的strong标签 先过滤一下是否含有middleURL
                //                 {
                //                     adPicId: "0"
                // adType: "0"
                // bdFromPageTitlePrefix: ""
                // bdImgnewsDate: "2021-08-07 21:44"
                // bdSetImgNum: 0
                // bdSourceName: ""
                // bdSrcType: "11"
                // commodityInfo: null
                // cs: "2805807758,4191988402"
                // currentIndex: ""
                // di: "52500"
                // face_info: null
                // filesize: ""
                // fromJumpUrl: "ippr_z2C$qAzdH3FAzdH3Fojtk5_z&e3Bv54AzdH3Fnca80nlncnAzdH3FKf5xkcDqr"
                // fromPageTitle: "小<strong>猫咪</strong>为了吃的能有多努力##视频创意话题大赛"
                // fromPageTitleEnc: "小猫咪为了吃的能有多努力##视频创意话题大赛"
                // fromURL: "ippr_z2C$qAzdH3FAzdH3Fojtk5_z&e3Bv54AzdH3Fnca80nlncnAzdH3FKf5xkcDqr"
                // fromURLHost: "weibo.com"
                // hasAspData: "0"
                // hasLarge: 0
                // hasThumbData: "0"
                // height: 641
                // hoverURL: ""
                // imgCollectionWord: ""
                // imgType: ""
                // is: "0,0"
                // isAspDianjing: 0
                // isCommodity: 0
                // isCopyright: 0
                // is_gif: 0
                // largeTnImageUrl: ""
                // middleURL: "https://img1.baidu.com/it/u=2655804415,802964476&fm=253&fmt=auto&app=120&f=JPEG?w=480&h=641"
                // objURL: "ipprf_z2C$qAzdH3FAzdH3F2t42d_z&e3Bkwt17_z&e3Bv54AzdH3Ft4w2j_fjw6viAzdH3Ff6v=ippr%nA%dF%dFoxn_z&e3Bftgwt42_z&e3Bvg%dF5639ba%dF1akb91cl2y82pbhceqhdj3dahaaqrax5_z&e3B3r2&6juj6=ippr%nA%dF%dFoxn_z&e3Bftgwt42_z&e3Bvg&wrr=daad&ftzj=ullll,8aaaa&q=wba&g=a&2=ag&u4p=3rj2?fjv=8mn9dmn8a9&p=mlnc99dl1m1vln0u0bv99ujm9nd1w9va"
                // os: "1518579008,17310047"
                // pageNum: 300
                // partnerId: 0
                // personalized: "0"
                // pi: "0"
                // resourceInfo: null
                // shituToken: "878340"
                // simid: "4165470629,647410935"
                // simid_info: null
                // source_type: ""
                // spn: 0
                // strategyAssessment: "9944_0_0_0"
                // thumbURL: "https://img1.baidu.com/it/u=2655804415,802964476&fm=253&fmt=auto&app=120&f=JPEG?w=480&h=641"
                // token: ""
                // type: "jpg"
                // width: 480
                //                 }
                const formateImageUrls = restImageUrls
                    .filter(item => item.middleURL)
                    .map(item => (
                        {
                            //保持和allImageUrls的字段一致
                            imageUrl: item.middleURL,
                            title: item.fromPageTitle.replace('<strong>', '').replace('</strong>')
                        }
                    ))
                //拼起来
                allImageUrls = allImageUrls.concat(formateImageUrls)
            }
            total = allImageUrls.length;
            try {
                //创建images目录 await
                await mkImageDir(assetDir)
                bar1.start(total, 0);
                //下载图片到目录
                allImageUrls.forEach((item, index) => {
                    //titleList 一一对应的 
                    downloadImage(item.imageUrl, item.title, index, assetDir)
                        .then(() => {
                            succeed++;
                            bar1.update(succeed)
                        }).then(() => {
                            if (succeed === total) {
                                bar1.stop();
                                console.log('恭喜，图片下载完成！！！')
                            }
                        })
                })
            } catch (error) {
            }
        })
}
//调试
// runImage('猫咪', 60)

module.exports = {
    runImage
}