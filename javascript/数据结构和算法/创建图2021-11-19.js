var Dictionary = function () { }
Dictionary.prototype.get = function (v) {
    return this[v]
}
Dictionary.prototype.set = function (v, val) {
    return this[v] = val
}
function Graph() {
    var vertices = [] //存所有顶点的名字
    var adjList = new Dictionary() //字典将会使用顶点名字为键，邻接顶点列表作为值。
    //先实现addVertex方法
    this.addVertex = function (v) {
        vertices.push(v)
        adjList.set(v, [])
    }
    //添加边addEdge
    this.addEdge = function (v, w) {
        //如果是有向图，第一条就够了，这里是无向的添加两条
        adjList.get(v).push(w)
        adjList.get(w).push(v)
    }
    //输出图
    this.toString = function () {
        var s = ''
        for (var i = 0; i < vertices.length; i++) {
            s += vertices[i] + " -> "
            var neibors = adjList.get(vertices[i])
            for (var j = 0; j < neibors.length; j++) {
                s += neibors[j] + ' '
            }
            s += '\n'
        }
        return s;
    }
}
//测试代码
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

console.log(graph.toString())//2021-11-21 8:25