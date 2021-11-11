//11-10实现 模板方法模式 Coffee and Tea
//step1 煮水 2.浸泡coffee 3.倒入杯中 4.放糖奶 / 加柠檬
var Coffee = function () { }
Coffee.prototype.brew = function () {
    console.log('用fei水浸泡咖啡')
}
Coffee.prototype.pourCup = function () {
    console.log('把咖啡倒入杯子')
}
Coffee.prototype.addConditon = function () {
    console.log('加糖或牛奶')
}
var Tea = function () {}
Tea.prototype.brew = function(){
    console.log('')
}