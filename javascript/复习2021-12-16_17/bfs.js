/*
 * @Author: caomd
 * @Date: 2021-12-17 17:20:25
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-17 21:00:37
 */
//bfs from width to depth
var Queue = function () {
    var items = [], size = 0
    this.enqueue = function (key) {
        items.push(key)
        return size++
    }
    this.dequeue = function () {
        size--
        return items.shift()
    }
    this.isEmpty = function () {
        return size === 0
    }
}
var Dictionary = function () { }
Dictionary.prototype = {
    get: function (v) {
        return this[v]
    },
    put: function (v, w) {
        if (!this[v]) this[v] = []
        this[v].push(w)
    }
}
var Graph = function () {
    var vertexes = [],
        adjList = new Dictionary()
    this.addVertexes = function (v) {
        vertexes.push(v)
    }
    this.addEdge = function (v, w) {
        adjList.put(v, w)
        adjList.put(w, v)
    }
    this.toString = function () {
        var str = ''
        for (var i = 0; i < vertexes.length; i++) {
            str += vertexes[i] + ' -> '
            var neighbours = adjList.get(vertexes[i])
            for (var j = 0; j < neighbours.length; j++) {
                str += neighbours[j] + '  '
            }
            str += '\n'
        }
        console.log(str)
    }
    var initializeColor = function () {
        var color = {}
        for (var i = 0; i < vertexes.length; i++) {
            color[vertexes[i]] = 'white'
        }
        return color
    }
    this.BFS = function (src, callback) {
        var dist = {}, pre = {}
        //initialize color
        var color = initializeColor()
        color[src] = 'grey'
        dist[src] = 0
        var queue = new Queue()
        queue.enqueue(src)
        while (!queue.isEmpty()) {
            var u = queue.dequeue()
            var neighbours = adjList.get(u)
            for (var i = 0; i < neighbours.length; i++) {
                var v = neighbours[i]
                if (color[v] === 'white') {
                    queue.enqueue(v)
                    color[v] = 'grey'
                    dist[v] = dist[u] + 1
                    pre[v] = u
                }
            }
            color[u] = 'black'
            if (callback) {
                callback(u)
            }
            print(u, vertexes.length)
        }
        return { dist, pre }
    }
    this.bfs = function (src) {
        var visited = []
        //initialize color
        var color = initializeColor()
        //FIFO -> Queue
        var queue = new Queue()
        queue.enqueue(src)
        color[src] = 'grey'
        while (!queue.isEmpty()) {
            var u = queue.dequeue()
            var neighbours = adjList.get(u)
            for (var j = 0; j < neighbours.length; j++) {
                var v = neighbours[j]
                if (color[v] === 'white') {
                    queue.enqueue(v)
                    color[v] = 'grey'
                }
            }
            color[u] = 'black'
            print(u, vertexes.length)
        }
    }
    var print = (
        function () {
            var cache = []
            return function (u, size) {
                cache.push(u)
                if (cache.length === size) {
                    console.log(cache.join(' -> '))
                    cache = []
                }
            }
        }
    )()

}
var printVisited = function (v) {
    console.log('Visited Vertex: ' + v)
}
var graph = new Graph()
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (var i = 0; i < myVertices.length; i++) {
    graph.addVertexes(myVertices[i])
}
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')
graph.toString()
graph.bfs('A')
var { dist, pre } = graph.BFS('A', printVisited)
console.log(dist.dist)
console.log(dist.pre)
var from = "A", stack = []
for (var i = 0; i < myVertices.length; i++) {
    var to = myVertices[i]
    for (var v = to; v !== from; v = pre[v]) {
        stack.push(v)
    }
    stack.push(from)
    var path = stack.pop()
    while (stack.length) {
        path += '->' + stack.pop()
    }
    console.log(path)
}
