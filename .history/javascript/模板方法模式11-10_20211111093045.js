//11-10实现 模板方法模式 Coffee and Tea
//step1 煮水 2.浸泡coffee 3.倒入杯中 4.放糖奶 / 加柠檬
var Coffee = function () { }
Coffee.prototype.brew = function () {
    console.log('用沸水浸泡咖啡')
}
Coffee.prototype.pourCup = function () {
    console.log('把咖啡倒入杯子')
}
Coffee.prototype.addConditon = function () {
    console.log('加糖或牛奶')
}
var Tea = function () { }
Tea.prototype.brew = function () {
    console.log('用沸水浸泡茶')
}
Tea.prototype.pourCup = function () {
    console.log('把茶倒入杯子')
}
Tea.prototype.addConditon = function () {
    console.log('加柠檬')
}
var Beverage = function () { }
Beverage.prototype.boilWater = function () {
    console.log('煮沸水')
}
Beverage.prototype.brew = function () {
    throw new Error('子类必须重写的方法')
}
Beverage.prototype.pourCup = function () {
    throw new Error('子类必须重写的方法')
}
Beverage.prototype.addConditon = function () {
    throw new Error('子类必须重写的方法')
}
Beverage.prototype.isAddCondition = function (flage) {
    if (flag) {
        this.addConditon()
    }
}
Beverage.prototype.init = function () {
    this.boilWater()
    this.brew()
    this.pourCup()
    this.isAddCondition()
}
Coffee.prototype = new Beverage()
var coffee = new Coffee()
coffee.init()


Tea.prototype = new Beverage()
var tea = new Beverage()