/*
 * @Author: caomd
 * @Date: 2021-12-04 17:16:47
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-04 17:50:00
 */
//prim 最小生成树 加点法 贪心算法
var graph = [
    [0, 2, 4, 0, 0, 0],
    [2, 0, 2, 4, 2, 0],
    [4, 2, 0, 0, 3, 0],
    [0, 4, 0, 0, 3, 2],
    [0, 2, 3, 3, 0, 2],
    [0, 0, 0, 2, 2, 0]
]
var INF = Number.MAX_SAFE_INTEGER
var prim = function (src) {
    //初始化
    var dist = [], visited = [], parent = []
    for (var i = 0; i < graph.length; i++) {
        dist[i] = graph[src][i] ? graph[src][i] : INF
        visited[i] = false
    }
    dist[src] = 0
    visited[src] = true
    parent[src] = -1
    var par = src
    //查找源点到其他点最小路径
    for (var k = 0; k < dist.length - 1; k++) {
        var v = findShort(dist, visited)
        parent[v] = par
        visited[v] = true
        par = v
        //更新源点到其他的顶点距离
        for (var i = 0; i < dist.length; i++) {
            if (!visited[i] && graph[v][i] && dist[i] > graph[v][i]) {
                dist[i] = graph[v][i]
                parent[i] = v
            }
        }
    }
    toString(parent, dist)
}
var findShort = function (dist, visited) {
    var min = INF
    for (var i = 0; i < graph.length; i++) {
        if (!visited[i] && dist[i] < min) {
            min = i
        }
    }
    return min
}
var toString = function (parent, dist) {
    var s = 'Edge       Path' + '\n'
    for (var i = 0; i < dist.length; i++) {
        s += parent[i] + '-->' + i + '       ' + dist[i] + '\n'
    }
    console.log(s)
}
prim(0)