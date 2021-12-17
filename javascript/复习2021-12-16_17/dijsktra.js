/*
 * @Author: caomd
 * @Date: 2021-12-17 21:06:24
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-17 22:00:51
 */
//simple source to many node short path
var graph = [
    [0, 2, 4, 0, 0, 0],
    [0, 0, 1, 4, 2, 0],
    [0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 2],
    [0, 0, 0, 3, 0, 2],
    [0, 0, 0, 0, 0, 0]
]
var INF = Number.MAX_SAFE_INTEGER
var dijsktra = function (src) {
    var dist = [], visited = []
    //init
    for (var i = 0; i < graph.length; i++) {
        dist[i] = graph[src][i] ? graph[src][i] : INF
        visited[i] = false
    }
    dist[src] = 0
    visited[src] = true
    //update src to other short path via middle poin
    for (var i = 0; i < dist.length - 1; i++) {
        //find min Path 
        var next = findMinPath(dist, visited)
        visited[next] = true
        //except self 
        for (var v = 0; v < dist.length; v++) {
            if (!visited[v] && graph[next][v] && dist[next] + graph[next][v] < dist[v]) {
                dist[v] = dist[next] + graph[next][v]
            }
        }
    }
    console.log(dist)
    return dist
}
var findMinPath = function (dist, visited) {
    var min = INF, next = -1
    for (var i = 0; i < dist.length; i++) {
        if (!visited[i] && dist[i] <= min) {
            min = dist[i]
            next = i
        }
    }
    return next
}
dijsktra(0)