import request from './utils/request'
import './style/main.scss'

// request.get('/api/list').then(res => {
//     console.log(res)
// })
request.get('/api/list')
    .then(result => {
        console.log(result);
    });