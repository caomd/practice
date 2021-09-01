const axios = require('axios')
const fs = require('fs')

axios.get('https://www.baidu.com')
    .then(rep => {
        console.log(rep)
    })