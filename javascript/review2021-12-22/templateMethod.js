/*
* @Author: caomd
* @Date: 2021-12-22 18:19:50
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-22 18:40:49
*/
var Beverage = function () { }
Beverage.prototype = {
    addWater: function () {
        console.log('add water')
    },
    boilWater: function () {
        console.log('boil water')
    },
    addBeverage: function () {
        throw new Error('child class extends this method')
    },
    pourCup: function () {
        throw new Error('child class extends this method')
    },
    addConditional: function () {
        throw new Error('child class extends this method')
    },
    confirmConditioal: function () {
        return true
    },
    init: function () {
        this.addWater()
        this.boilWater()
        this.addBeverage()
        this.pourCup()
        if (this.confirmConditioal) {
            this.addConditional()
        }
    }
}
var Coffee = function () { }
var Tea = function () { }
Coffee.prototype = new Beverage()
Tea.prototype = new Beverage()
// Coffee.prototype = {
//     addBeverage: function () {
//         console.log('add Coffee')
//     },
//     pourCup: function () {
//         console.log('pour Coffee to Cup')
//     }
// }
Coffee.prototype.addBeverage = function () {
    console.log('add Coffee')
}
Coffee.prototype.pourCup = function () {
    console.log('pour Coffee to Cup')
}
Coffee.prototype.confirmConditioal = function () {
    return window.confirm('add condition?')
}
Coffee.prototype.addConditional = function () {
    console.log('add suger')
}
Tea.prototype.addBeverage = function () {
    console.log('add Tea')
}
Tea.prototype.pourCup = function () {
    console.log('pour Tea to Cup')
}
Tea.prototype.addConditional = function () {
    console.log('add lemon')
}
// Tea.prototype = {
//     addBeverage: function () {
//         console.log('add Tea')
//     },
//     pourCup: function () {
//         console.log('pour Tea to Cup')
//     }
// }
var coffee = new Coffee()
coffee.init()
var tea = new Tea()
tea.init()