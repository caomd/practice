function Player(color) {
    this.color = color
    this.start = function () {
        console.log(color + '下棋')
    }
}

Player.prototype.end = function () {
    console.log(color + '结束了')
}

const whitePlayer = new Player('white')
const blackPlayer = new Player('block')

console.log(whitePlayer.start === blackPlayer.start)//false
console.log(whitePlayer.end === blackPlayer.end)//true
