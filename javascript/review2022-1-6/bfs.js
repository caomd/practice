/*
 * @Author: caomd 
 * @Date: 2022-01-06 17:31:51 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-06 19:45:10
 */
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
Dictionary.prototype.set = function (v, w) {
    if (!this[v]) {
        this[v] = []
    }
    this[v].push(w)
}
Dictionary.prototype.get = function (v) {
    return this[v]
}
var Graph = function () {
    var vertexes = [],
        adjList = new Dictionary()
    this.addVertexes = function (v) {
        vertexes.push(v)
    }
    this.addEdge = function (v, w) {
        adjList.set(v, w)
        adjList.set(w, v)
    }
    this.toString = function () {
        var str = ''
        for (var i = 0; i < vertexes.length; i++) {
            var vertex = vertexes[i]
            str += vertex + ' -> '
            var neighbour = adjList.get(vertex)
            for (var j = 0; j < neighbour.length; j++) {
                var n = neighbour[j]
                str += n + ' '
            }
            str += '\n'
        }
        console.log(str)
    }
    //queue
    this.bfs = function (src, callback) {
        var color = initializeColor(), q = new Queue()
        //initialize src
        color[src] = 'grey'
        q.enqueue(src)
        while (!q.isEmpty()) {
            var v = q.dequeue()
            var neighbours = adjList.get(v)
            for (var i = 0; i < neighbours.length; i++) {
                var w = neighbours[i]
                if (color[w] === 'white') {
                    q.enqueue(w)
                    color[w] = 'grey'
                }
            }
            if (callback) {
                callback(v)
            }
            color[v] = 'black'
        }
    }
    //min path
    this.BFS = function (src, callback) {
        var dist = [], q = new Queue(), pre = []
        var color = initializeColor()
        dist[src] = 0
        q.enqueue(src)
        while (!q.isEmpty()) {
            var v = q.dequeue(),
                neighbours = adjList.get(v)
            for (var i = 0; i < neighbours.length; i++) {
                var w = neighbours[i]
                if (color[w] === 'white') {
                    q.enqueue(w)
                    pre[w] = v
                    color[w] = 'grey'
                    dist[w] = dist[v] + 1
                }
            }
            if (callback) {
                callback(v)
            }
            color[v] = 'black'
        }
        console.log(dist)
        return { dist, pre }
    }
    var initializeColor = function () {
        var color = []
        for (var i = 0; i < vertexes.length; i++) {
            var v = vertexes[i]
            color[v] = 'white'
        }
        return color
    }
}
var print = function (val) {
    console.log('Vertexes is Visited:' + val)
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
// graph.bfs('A', print)
var { dist, pre } = graph.BFS('A', print)
var start = 'A', stack = [], path = ''
for (var i = 0; i < myVertices.length; i++) {
    var to = myVertices[i]
    for (var toV = to; toV !== start; toV = pre[toV]) {
        stack.push(toV)
    }
    stack.push(start)
    path = stack.pop()
    while (stack.length) {
        path += ' -> ' + stack.pop()
    }
    console.log(path)
}


