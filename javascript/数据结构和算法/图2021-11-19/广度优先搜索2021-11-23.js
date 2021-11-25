var Dictionary = function () { }
Dictionary.prototype.get = function (v) {
    return this[v]
}
Dictionary.prototype.set = function (v, m) {
    return this[v] = m
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
    var Q = []
    this.enqueue = function (node) {
        Q.push(node)
    }
    this.dequeue = function () {
        return Q.shift()
    }
    this.isEmpty = function () {
        return Q.length === 0
    }
}
var Graph = function () {
    var vertices = []
    var adjList = new Dictionary()
    this.addVertex = function (v) {
        vertices.push(v)
        adjList.set(v, [])
    }
    this.addEdge = function (v, w) {
        adjList.get(v).push(w)
        adjList.get(w).push(v)
    }
    var initializeColor = function () {
        var color = []
        for (var i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white';
        }
        return color

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
    //广度优先遍历
    this.bfs = function (v, callback) {
        var color = initializeColor(),
            queue = new Queue()
        queue.enqueue(v)
        while (!queue.isEmpty()) {
            var u = queue.dequeue(),
                neighbors = adjList.get(u);
            color[u] = 'grey'
            for (var i = 0; i < neighbors.length; i++) {
                var w = neighbors[i]
                if (color[w] === 'white') {
                    color[w] = 'grey'
                    queue.enqueue(w)
                }
            }
            color[u] = 'black'
            if (callback) {
                callback(u)
            }
        }
    }
    //使用BFS寻找最短路径
    this.BFS = function (v) {
        var color = initializeColor(),
            queue = new Queue(),
            d = [],
            pred = [];
        queue.enqueue(v)
        //初始化各个节点即前溯点值
        for (var i = 0; i < vertices.length; i++) {
            d[vertices[i]] = 0;
            pred[vertices[i]] = null
        }
        while (!queue.isEmpty()) {
            var u = queue.dequeue()
            color[u] = 'grey'
            var neibours = adjList.get(u)
            for (var i = 0; i < neibours.length; i++) {
                var w = neibours[i]
                if (color[w] === 'white') {
                    color[w] = 'grey'
                    d[w] = d[u] + 1
                    pred[w] = u
                    queue.enqueue(w)
                }
            }
            color[u] = 'black'
        }
        return { distances: d, predecessors: pred }
    }
}
function printNode(value) {
    console.log('Visited vertex:' + value)
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
//test bfs
graph.bfs(myVertices[0], printNode)
var shortestPath = graph.BFS(myVertices[0])
console.log(shortestPath.distances, shortestPath.predecessors)
//根据前溯点可以构建从A点到其他顶点的路径
var fromVertex = myVertices[0]
for (var i = 0; i < myVertices.length; i++) {
    var toVertex = myVertices[i]
    path = new Stack()
    //这个for循环类似var i=0;i<length;i++
    for (var v = toVertex; v != fromVertex; v = shortestPath.predecessors[v]) {
        path.push(v)
    }
    path.push(fromVertex)
    var s = path.pop()
    while (!path.isEmpty()) {
        s += '-' + path.pop()
    }
    console.log(s)
}