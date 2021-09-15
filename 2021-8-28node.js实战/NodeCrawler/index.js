// const superagent = require('superagent')
// const cheerio = require('cheerio')

// superagent.get('http://www.baidu.com').end((err, res) => {
//     if (err) {
//         console.log(`访问失败-${err}`)
//     } else {
//         // console.log(res.text)
//         const htmlText = res.text;
//         const $ = cheerio.load(htmlText)
//         //爬取meta标签内容
//         $('meta').each((index, ele) => {
//             console.log(index);
//             console.log($(ele).attr('content'));
//         })
//     }
// })


//引入inquirer
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