//最小生成树Prim
var graph = [
    [0, 2, 4, 0, 0, 0],
    [2, 0, 2, 4, 2, 0],
    [4, 2, 0, 0, 3, 0],
    [0, 4, 0, 0, 3, 2],
    [0, 2, 3, 3, 0, 2],
    [0, 0, 0, 2, 2, 0]
]
var INF = Number.MAX_SAFE_INTEGER
//和dijstra算法相同点贪心算法 从一个顶点开始
this.prim = function (src) {
    //源顶点src 找到到达源顶点最小的路径顶点，加入集合S
    //初始化
    var length = graph.length,
        key = [], //权值最小的边
        visited = [],
        parent = [] //父节点
    for (var i = 0; i < length; i++) {
        key[i] = graph[src][i] || INF
        visited[i] = false
    }
    //源顶点距离自身为0 visited=true
    key[src] = 0
    parent[src] = -1
    visited[src] = true
    //首个顶点
    var u = minKey(key, visited)
    //不用visited为true不然👇循环的时候，找不到该点，作为父节点
    parent[u] = src
    //找到距源顶点最小距离的顶点 遍历除了源顶点意外的次数length - 1
    for (var i = 0; i < length - 1; i++) {
        //得到其余为确定顶点的最小代价边
        var u = minKey(key, visited)
        visited[u] = true
        //有中转站更新操作
        for (var w = 0; w < length; w++) {
            if (!visited[w] && graph[u][w] && graph[u][w] < key[w]) {
                parent[w] = u
                key[w] = graph[u][w]
            }
        }
    }
    this.toString(parent, key)
}
this.toString = function (parent, key) {
    console.log(key)
    var s = 'Edge      Weight\n'
    for (var i = 1; i < parent.length; i++) {
        s += parent[i] + '->' + i + '      ' + key[i] + '\n'
    }
    console.log(s)
}
var minKey = function (key, visited) {
    var min = INF, index = -1
    for (var v = 0; v < key.length; v++) {
        if (!visited[v] && key[v] <= min) {
            min = key[v]
            index = v
        }
    }
    return index
}
this.prim(0)