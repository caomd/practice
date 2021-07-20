function Player(color) {
    this.color = color
    if (!Player.total) {
        Player.total = 0
    }
    Player.total++
}

const whitePlayer = new Player('white')
const blockPlayer = new Player('block')
const blockPlayer1 = new Player('block')

console.log(Player.total)//3
