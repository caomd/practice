/*
 * @Author: caomd
 * @Date: 2021-12-06 19:02:18
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-06 19:51:34
 */
//深度优先遍历 DFS 由深到宽 栈结构
class Stack {
    constructor() {
        this.items = []
        this.size = 0
    }
    push(element) {
        this.items.push(element)
        return this.size++
    }
    pop() {
        this.size--
        return this.items.pop()
    }
    isEmpty() {
        return this.size === 0
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
    var verteices = [],
        adjList = new Dictionary()
    this.addVertex = function (v) {
        verteices.push(v)
    }
    this.addEdge = function (v, w) {
        adjList.set(v, w)
        adjList.set(w, v)
    }
    this.dfs = function (callback) {
        var stack = new Stack()
        var color = initalColor()
        for (var i = 0; i < verteices.length; i++) {
            var u = verteices[i]
            if (color[u] === 'white') {
                dfsVisited(u, callback, color)
            }
        }
    }
    var dfsVisited = function (v, callback, color) {
        color[v] = 'grey'
        if (callback) {
            callback(v)
        }
        var neibours = adjList.get(v)
        for (var i = 0; i < neibours.length; i++) {
            var u = neibours[i]
            if (color[u] === 'white') {
                dfsVisited(u, callback, color)
            }
        }
    }
    var initalColor = function () {
        var color = []
        for (var i = 0; i < verteices.length; i++) {
            color[verteices[i]] = 'white'
        }
        return color
    }
    this.toString = function () {
        var s = ''
        for (var i = 0, vertex; vertex = verteices[i++];) {
            var neibours = adjList.get(vertex)
            s += vertex + ' -> '
            for (var n = 0; n < neibours.length; n++) {
                s += neibours[n] + ' '
            }
            s += '\n'
        }
        console.log(s)
    }
}
var printNode = function (value) {
    console.log('Visited Vervex ' + value)
}
var graph = new Graph()
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (var i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i])
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
graph.dfs(printNode)