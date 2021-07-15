function Player(color) {
    this.color = color;
}
Player.prototype.start = function () {
    console.log(color + "下棋")
}
Player.prototype.name = 'zhangsan'

const player1 = new Player('player1')
const player2 = new Player('player2')

player1.name = 'kaea'

// console.log(player1.__proto__)
// console.log(Object.getPrototypeOf(player1))
// console.log(Player.prototype)
// console.log(player2.__proto__ === Player.prototype)//true

delete player1.name

console.log(player1.name)
