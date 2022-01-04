/*
 * @Author: caomd 
 * @Date: 2022-01-04 14:16:41 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-04 14:43:03
 */
var Stack = function () {
    var items = [], size = 0
    this.push = function (key) {
        items.push(key)
        return size++
    }
    this.pop = function () {
        size--
        return items.pop()
    }
    this.isEmpty = function () {
        return size === 0
    }
    this.size = function () {
        return size
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
            var v = vertexes[i]
            str += v + ' -> '
            var neighbours = adjList.get(v)
            for (var j = 0; j < neighbours.length; j++) {
                var w = neighbours[j]
                str += w + ' '
            }
            str += '\n'
        }
        console.log(str)
    }
    var initializeColor = function () {
        var color = []
        for (var i = 0; i < vertexes.length; i++) {
            var v = vertexes[i]
            color[v] = 'white'
        }
        return color
    }
    //from deep to width
    this.dfs = function (callback) {
        var src = vertexes[0], s = new Stack()
        var color = initializeColor()
        color[src] = 'grey'
        s.push(src)
        while (!s.isEmpty()) {
            var cur = s.pop(),
                //find neighbours
                neighbours = adjList.get(cur)
            for (var i = 0; i < neighbours.length; i++) {
                var w = neighbours[i]
                if (color[w] === 'white') {
                    s.push(w)
                    color[w] = 'grey'
                }
            }
            if (callback) {
                callback(cur)
            }
            color[cur] = 'black'
        }
    }
}

var printVisited = function (vertex) {
    console.log('Visited Graph Vertex: ' + vertex)
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
graph.dfs(printVisited)