/*
 * @Author: caomd 
 * @Date: 2022-01-13 20:38:59 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-15 18:15:32
 */
var graph = [
    [0, 2, 4, 0, 0, 0],
    [2, 0, 2, 4, 2, 0],
    [4, 2, 0, 0, 3, 0],
    [0, 4, 0, 0, 3, 2],
    [0, 2, 3, 3, 0, 2],
    [0, 0, 0, 2, 2, 0]
]
var INF = Number.MAX_SAFE_INTEGER
var Kruskal = function () {
    var dist = copyGraph(), parent = {}, length = graph.length, cost, dege = 0, u, v
    //最多有n-1条边
    while (dege < length - 1) {
        //find min edge
        for (var i = 0, min = INF; i < length; i++) {
            for (var j = 0; j < length; j++) {
                if (i !== j) {
                    if (cost[i][j] && cost[i][j] < min) {
                        min = cost[i][j]
                        u = i
                        v = j
                    }
                }
            }
        }
        //find begin vertex parent
        var flag = find(u, v, parent)
        if (union(flag, u, v, parent)) {
            dege++
        }
        //from list delete u,v
        cost[u][v] = cost[v][u] = INF
    }
    this.toString(parent)
}
this.toString = function (value) {
    var s = ''
    for (var i in value) {
        s += i + '\n'
    }
    console.log(s)
}
var find = function (u, v, parent) {
    while (parent[u]) {
        u = parent[u]
    }
    while (parent[v]) {
        v = parent[v]
    }
    if (v !== u) {
        return true
    }
    return false
}
var union = function (flag, u, v, parent) {
    if (flag) {//不存在同一棵树上 j的父节点为i
        parent[i + ' -> ' + j] = j
        return true
    }
    return false
}
var copyGraph = function () {
    var cpyGrap = []
    for (var i = 0; i < graph.length; i++) {
        cpyGrap[i] = []
        for (var j = 0; j < graph.length; j++) {
            if (i === j) {
                cpyGrap[i][j] = graph[i][j]
            } else {
                cpyGrap[i][j] = graph[i][j] || INF
            }
        }
    }
    return cpyGrap
}
Kruskal()