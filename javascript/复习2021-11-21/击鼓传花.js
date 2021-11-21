var hotPotato = function (names, num) {
    var queue = []
    for (var i = 0; i < names.length; i++) {
        queue.push(names[i])
    }
    var eliminated = ''
    while (queue.length > 1) {
        for (var j = 0; j < num; j++) {
            queue.push(queue.shift())
        }
        eliminated = queue.shift()
    }
    console.log('获胜者是：' + queue.shift())
}
let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
let winner = hotPotato(names, 7)