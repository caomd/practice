//实现render函数，模版字符串的效果
const year = '2021';
const month = '10';
const day = '01';

const template = '${year}-${month}-${day}';
const context = {
    year,
    month,
    day
};//{year:2021,month:10,day:01}
const str = render(template)(context);//高阶函数
console.log(str)//2021-10-01
//. 匹配任意除换行符“\n”外的字符；
// *表示匹配前一个字符0次或无限次；
// ?表示前边字符的0次或1次重复
// .*? 表示匹配任意数量的重复，但是在能使整个匹配成功的前提下使用最少的重复
function render(template) {
    return function (context) {
        return template.replace(/\${(.*?)\}/g, (match, key) => context[key])
    }
}