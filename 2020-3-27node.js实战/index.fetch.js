const fetch = require('node-fetch')

fetch("https://www.bigbigwork.com/tupian/shu49_1.html?h=%E5%85%A8%E9%83%A8", {
    "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "cookie": "number=6159525; _ga=GA1.2.1189715247.1587906872; Qs_lvt_147946=1587906873; Hm_lvt_d24dcf008a97469875a4da33090711f9=1587906873; JSESSIONID=B4E3A6FFEDF9EEE543F9E413BEE81B21; _gid=GA1.2.1569419909.1587907394; Hm_lpvt_d24dcf008a97469875a4da33090711f9=1587907394; Qs_pv_147946=308527974837110500%2C4267322968940402700%2C2714649838555185000%2C222816005495245820; loginQrcodeUrl=http://weixin.qq.com/q/02qUyQs_I39lU1zHQDNucW; ticket=gQEp8TwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAycVV5UXNfSTM5bFUxekhRRE51Y1cAAgQLj6VeAwTgpQEA; expireSeconds=108000"
    },
    "referrer": "https://www.bigbigwork.com/",
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": null,
    "method": "GET",
    "mode": "cors"
}).then(rep => rep.json())
    .then(resp => console.log(resp))