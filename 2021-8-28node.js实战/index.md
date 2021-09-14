使用node实现一个带CLI的爬虫应用
命令行支持输入关键词，数量，来下载百度搜索结果的图片
命令行支持输入关键词，数量，来下载百度搜索结果的视频

什么是爬虫？
自动浏览器万维网的网络机器人 

*网络引擎使用爬虫更新自己的网站内容，以及对其他网站的索引
*个人使用爬虫去获取网站内容

爬虫可以肆无忌惮的爬取网站的所有内容吗
不是的
爬虫访问网站会消耗对方网站的流量，带宽，服务器资源
robots.txt

public/robots.txt

1.放在那里？
存在网站的根目录，是一个ascii编码的文件
2.robots.txt的作用是什么
指定当前网站哪些内容可以爬，哪些不能爬
3.允许所有爬虫？
User-agent:*
Disallow:
4.允许指定爬虫
User-agent:baidu_spider
Allow:
5.拦截所有的爬虫
User-agent:*
Disallow:/

如何开始一个爬虫应用
1.确定要爬取的网站/页面
2.分析网站的数据接口以及Dom结构
3.确定技术选型 （这个应用要用到哪些库 怎么模拟请求 怎么分析dom）
*模拟浏览器请求
request不再维护了
superagent ✅ 这节课选型
SuperAgent 是一个轻量的Ajax API，服务器端（Node.js）客户端（浏览器端）均可使用,SuperAgent具有学习曲线低、使用简单、可读性好的特点,可作为客户端请求代理模块使用，当你想处理get,post,put,delete,head请求时，可以考虑使用SuperAgent。
*解析Dom
cheerio 类似于jquery的api ✅
cheerio是jquery核心功能的一个快速灵活而又简洁的实现，主要是为了用在服务器端需要对DOM进行操作的地方
jsdom 解析dom的一些文本
cheerio并非万能，当你需要一个浏览器一样的环境时，你最好还是用JSDOM，尤其是你需要进行自动化的功能测试时

模拟用户行为
puppeteer 截图/巡查




