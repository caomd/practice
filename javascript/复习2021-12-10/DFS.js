/*
 * @Author: caomd
 * @Date: 2021-12-10 21:03:36
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-10 22:07:29
 */
//DFS from deep to width recursion
var Stack = function () {
    var Node = function (key) {
        this.key = key
        this.next = null
    }
    var head = null, size = 0
    this.push = function (key) {
        var node = new Node(key)
        if (head === null) {
            head = node
        } else {
            var current = head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        return size++
    }
    this.pop = function () {
        //FILO
        if (head !== null) {
            var current = head
            while (current.next) {
                current = current.next
            }
            size--
            return current.key
        }
    }
    this.isEmpty = function () {
        return size === 0
    }
}
var Dictionary = function () { }
Dictionary.prototype.get = function (v) {
    return this[v]
}
Dictionary.prototype.set = function (v, w) {
    if (!this[v]) {
        this[v] = []
    }
    this[v].push(w)
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
        var s = ''
        for (var i = 0; i < vertexes.length; i++) {
            s += vertexes[i] + ' -> '
            var neighbours = adjList.get(vertexes[i])
            for (var j = 0; j < neighbours.length; j++) {
                var u = neighbours[j]
                s += u + '  '
            }
            s += '\n'
        }
        console.log(s)
    }
    var initalizeColor = function () {
        var color = {}
        for (var i = 0; i < vertexes.length; i++) {
            color[vertexes[i]] = 'white'
        }
        return color
    }
    this.dfs = function (callback) {
        var color = initalizeColor()
        for (var i = 0; i < vertexes.length; i++) {
            // dfsRecursion(vertexes[i], color, callback)
            dfsStack(vertexes[i], color, callback)
        }
    }
    var dfsRecursion = function (src, color, callback) {
        color[src] = 'grey'
        if (callback) {
            callback(src)
        }
        var neighbours = adjList.get(src)
        for (var j = 0; j < neighbours.length; j++) {
            var u = neighbours[j]
            if (color[u] === 'white') {
                dfsRecursion(u, color, callback)
            }
        }
        color[src] = 'black'
    }
    var dfsStack = function (src, color, callback) {
        var stack = new Stack()
        stack.push(src)
        while (!stack.isEmpty()) {
            var u = stack.pop(),
                neighbours = adjList.get(u)
            color[u] = 'grey'
            if (callback) {
                callback(u)
            }
            for (var j = 0; j < neighbours.length; j++) {
                var v = neighbours[j]
                if (color[v] === 'white') {
                    stack.push(v)
                }
            }
            color[u] = 'black'
        }
    }
}
var print = function (val) {
    console.log('Vertex Visited' + val)
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
graph.dfs(print)
