var Dictionary = function () { }
Dictionary.prototype.get = function (v) {
    return this[v]
}
Dictionary.prototype.set = function (v, value) {
    this[v] = value
}
var Stack = function () {
    var items = []
    this.push = function (node) {
        items.push(node)
    }
    this.pop = function () {
        return items.pop()
    }
    this.isEmpty = function () {
        return items.length === 0
    }
}
var Queue = function () {
    var items = []
    this.push = function (node) {
        items.push(node)
    }
    this.shift = function () {
        return items.shift()
    }
    this.isEmpty = function () {
        return items.length === 0
    }
}
var initializeColor = function () {
    var color = []
    for (var i = 0; i < myVertices.length; i++) {
        color[myVertices[i]] = 'white'
    }
    return color
}
var Graph = function () {
    var vertices = [], adjList = new Dictionary()
    this.addVertex = function (v) {
        vertices.push(v)
        adjList.set(v, [])
    }
    this.addEdge = function (v, w) {
        adjList.get(v).push(w)
        adjList.get(w).push(v)
    }
    this.toString = function () {
        var s = ''
        for (var i = 0; i < vertices.length; i++) {
            s += vertices[i] + ' -> '
            var neibours = adjList.get(vertices[i])
            for (var j = 0; j < neibours.length; j++) {
                s += neibours[j] + ' '
            }
            s += '\n'
        }
        return s
    }
    this.dfs = function (callback) {
        var color = initializeColor()
        for (var i = 0; i < vertices.length; i++) {
            if (color[vertices[i]] === 'white') {
                dfsVisit(vertices[i], color, callback)
            }
        }
    }
    var dfsVisit = function (u, color, callback) {
        color[u] = 'grey'
        if (callback) {
            callback(u)
        }
        var neibours = adjList.get(u)
        for (var i = 0; i < neibours.length; i++) {
            var w = neibours[i]
            if (color[w] === 'white') {
                dfsVisit(w, color, callback)
            }
        }
        color[u] = 'black'
    }
    var time = 0
    this.DFS = function () {
        var color = initializeColor(),
            d = [], //发现时间
            f = [], //标注为黑色
            p = []; //前溯点
        time = 0
        for (var i = 0; i < vertices.length; i++) {
            d[vertices[i]] = 0
            f[vertices[i]] = 0
            p[vertices[i]] = null
        }
        for (var i = 0; i < vertices.length; i++) {
            if (color[vertices[i]] === 'white') {
                DFSVisit(vertices[i], color, d, f, p)
            }
        }
        console.log('d', d)
        console.log('f', f)
        console.log('p', p)
        return {
            discovery: d,
            finished: f,
            predecessors: p
        }
    }
    var DFSVisit = function (u, color, d, f, p) {
        color[u] = 'grey'
        d[u] = ++time
        var neibours = adjList.get(u)
        for (var i = 0; i < neibours.length; i++) {
            var w = neibours[i]
            if (color[w] === 'white') {
                p[w] = u
                DFSVisit(w, color, d, f, p)
            }
        }
        color[u] = 'black'
        f[u] = ++time
        console.log('explored ' + u)
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
console.log(graph.toString())
graph.dfs(printNode)
console.log(graph.DFS())
console.log('**************************DAG********************************')
var DAGGraph = new Graph()
var myVerticesDAG = ['A', 'B', 'C', 'D', 'E', 'F']
for (var i = 0; i < myVerticesDAG.length; i++) {
    DAGGraph.addVertex(myVerticesDAG[i])
}
DAGGraph.addEdge('A', 'C')
DAGGraph.addEdge('A', 'D')
DAGGraph.addEdge('B', 'D')
DAGGraph.addEdge('B', 'E')
DAGGraph.addEdge('C', 'F')
DAGGraph.addEdge('F', 'E')
var result = DAGGraph.DFS()
console.log(result)
DAGGraph.dfs(printNode)