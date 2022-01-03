/*
 * @Author: caomd
 * @Date: 2022-01-03 10:06:48
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-03 12:16:37
 */
//think from width to deep use queue need a source point
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
Dictionary.prototype.set = function (key, val) {
    if (!this[key]) {
        this[key] = []
    }
    this[key].push(val)
}
Dictionary.prototype.get = function (v) {
    return this[v]
}
var Graph = function () {
    var vertexes = [],
        adjVertices = new Dictionary()
    this.addVertexes = function (v) {
        vertexes.push(v)
    }
    this.addEdge = function (v, w) {
        adjVertices.set(v, w)
        adjVertices.set(w, v)
    }
    this.toString = function () {
        var str = ''
        for (var i = 0; i < vertexes.length; i++) {
            var v = vertexes[i],
                //adjVertices
                neighbours = adjVertices.get(v)
            str += v + ' -> '
            for (var j = 0; j < neighbours.length; j++) {
                var w = neighbours[j]
                str += w + ' '
            }
            str += '\n'
        }
        console.log(str)
    }
    var initializeColor = function (vertexes) {
        var color = []
        for (var i = 0; i < vertexes.length; i++) {
            var v = vertexes[i]
            color[v] = 'white'
        }
        return color
    }
    this.bfs = function (src, callback) {
        var q = new Queue()
        var color = initializeColor(vertexes)
        q.enqueue(src)
        while (!q.isEmpty()) {
            var u = q.dequeue()
            //traverse adjoin vertex
            var neighbours = adjVertices.get(u)
            for (var i = 0; i < neighbours.length; i++) {
                var w = neighbours[i]
                if (color[w] === 'white') {
                    q.enqueue(w)
                    color[w] = 'grey'
                }
            }
            color[u] = 'black'
            if (callback) {
                callback(u)
            }
        }
    }
    //shortest path
    this.BFS = function (src, callback) {
        var dis = [], q = new Queue(), pre = []
        var color = initializeColor(vertexes)
        dis[src] = 0
        color[src] = 'grey'
        q.enqueue(src)
        //initialize dist and previous
        for (var v = 0; v < vertexes.length; v++) {
            var u = vertexes[v]
            dis[u] = 0
            pre[u] = null
        }
        while (!q.isEmpty()) {
            var v = q.dequeue(),
                neighbours = adjVertices.get(v)
            for (var i = 0; i < neighbours.length; i++) {
                var w = neighbours[i]
                if (color[w] === 'white') {
                    q.enqueue(w)
                    dis[w] = dis[v] + 1
                    pre[w] = v
                    color[w] = 'grey'
                }
            }
            color[v] = 'black'
            if (callback) {
                callback(v)
            }
        }
        return { dis, pre }
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
graph.bfs('A', printVisited)
console.log('------------------shortest path bfs -----------')
var { dis, pre } = graph.BFS('A', printVisited)
var startPath = 'A'
for (var i = 0; i < myVertices.length; i++) {
    var toPath = myVertices[i], path = []
    for (var p = toPath; p !== startPath; p = pre[p]) {
        path.push(p)
    }
    path.push(startPath)
    var pathStr = path.pop()
    while (path.length) {
        pathStr += ' -> ' + path.pop()
    }
    console.log(pathStr)
}
