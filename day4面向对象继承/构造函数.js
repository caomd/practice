function Player(color) {
    this.color = color;
    this.start = function () {
        console.log(color + '下棋')
    }
}
const whitePlayer = new Player('white')
const blackPlayer = new Player('black')

console.log(whitePlayer.start === blackPlayer.start)//false