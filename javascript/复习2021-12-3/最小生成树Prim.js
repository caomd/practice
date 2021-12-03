/*
 * @Author: caomd
 * @Date: 2021-12-03 10:29:17
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-03 12:27:36
 */
//最小生成树prim 加点法 查找到源点的下一条路径最小点 一次类推
//贪心算法
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
    var visited = [], dist = [], parent = []
    //初始化距离
    for (var j = 0; j < graph[src].length; j++) {
        dist[j] = graph[src][j] ? graph[src][j] : INF
        visited[j] = false
    }
    dist[src] = 0
    visited[src] = true
    parent[src] = -1
    var next = src //父顶点
    //找到源点到其他顶点的最小距离的顶点 排除自己 查找length-1次个顶点 轮数
    var length = graph.length
    for (var i = 0; i < length - 1; i++) {
        var v = findMinDist(dist, visited, parent)
        parent[v] = next
        next = v
        //将v点放入确定集合
        visited[v] = true
        //通过v点更新源点到其他顶点的距离
        for (var w = 0; w < dist.length; w++) {
            //这样写是源点到各个顶点
            // if (!visited[w] && graph[v][w] && graph[src][v] + graph[v][w] < dist[w]) {
            //     dist[w] = graph[src][v] + graph[v][w]
            if (!visited[w] && graph[v][w] && graph[v][w] < dist[w]) {
                //dist[w] 是源点到w的距离 现在是通过中转点到达w最短 所以重新赋值为中转点的距离
                dist[w] = graph[v][w]
                parent[w] = v
            }
        }
    }
    print(dist, parent)
    return dist
}
var print = function (dist, parent) {
    var s = 'Edge              Path' + '\n'
    for (var v = 0; v < dist.length; v++) {
        s += parent[v] + '--->' + v + '              ' + dist[v] + '\n'
    }
    console.log(s)
}
var findMinDist = function (dist, visited) {
    var min = INF, v
    for (var i = 0; i < dist.length; i++) {
        if (!visited[i] && dist[i] < min) {
            min = dist[i]
            v = i
        }
    }
    //返回下一个顶点
    return v
}
console.log(prim(0))