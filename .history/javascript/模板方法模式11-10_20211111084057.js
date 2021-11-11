//11-10实现 模板方法模式 Coffee and Tea
//step1 煮水 2.浸泡coffee 3.倒入杯中 4.放糖奶 / 加柠檬
var Coffee = function () { }
Coffee.prototype.brew = function () {
    console.log('浸泡茶')
}
Coffee.prototype.pourCup = function () {
    console.log('把茶倒入杯子')
}
Coffee.prototype.addConditon