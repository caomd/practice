var hotPotato = function (names, num) {
    var queue = []
    for (var i = 0; i < names.length; i++) {
        queue.push(names[i])
    }
    while (queue.length > 1) {
        for (var j = 0; j < num; j++) {
            queue.push(queue.shift())
        }
        console.log(queue.shift())
    }
    console.log(queue.shift() + '是winner')
}
let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
let winner = hotPotato(names, 7)