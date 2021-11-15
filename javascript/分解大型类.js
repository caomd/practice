// var Spirit = function (name) {
//     this.name = name
// }
// Spirit.prototype.attack = function (type) {
//     if (type === 'waveBoxing') {
//         console.log(this.name + ':使用波动拳')
//     } else if (type === 'whirlKick') {
//         console.log((this.name + '使用旋风腿')
//     }
// }
// var spirit = new Spirit('RYU')
// spirit.attack('waveBoxing');
// spirit.attack('whirlKick')

// Spirit.prototype.start = function (type) {
//     this.list[type].call(this)
// }
// Spirit.prototype.list = {
//     waveBoxing: function () {
//         console.log(this.name + '：使用波动拳');
//     },
//     whirlKick: function () {
//         console.log(this.name + '使用旋风腿')
//     }
// }
// var spirit = new Spirit('RYU')
// spirit.start('waveBoxing');
// spirit.start('whirlKick')






// //重构之后 策略模式
// var Attack = function (spirit) {
//     this.spirit = spirit
// }


// 重构 策略模式
var Attack = function (spirit) {
    this.spirit = spirit
}
Attack.prototype.start = function (type) {
    this.list[type].call(this)
}
Attack.prototype.start = function (type) {
    return this.list[type].call(this);
}
Attack.prototype.list = {
    waveBoxing: function () {
        console.log(this.spirit.name + '：使用波动拳');
    },
    whirlKick: function () {
        console.log(this.spirit.name + '使用旋风腿')
    }
}
var Spirit = function (name) {
    this.name = name
    this.attackObj = new Attack(this)
}
Spirit.prototype.attack = function (type) {
    this.attackObj.start(type)
}
var spirit = new Spirit('RYU')
spirit.attack('waveBoxing')
spirit.attack('whirlKick')