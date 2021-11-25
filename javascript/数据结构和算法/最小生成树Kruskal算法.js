//克鲁斯卡尔 找最小代价的边，确认点没有形成闭环
var graph = [
    [0, 2, 4, 0, 0, 0],
    [2, 0, 2, 4, 2, 0],
    [4, 2, 0, 0, 3, 0],
    [0, 4, 0, 0, 3, 2],
    [0, 2, 3, 3, 0, 2],
    [0, 0, 0, 2, 2, 0]
]
var INF = Number.MAX_SAFE_INTEGER
var sortDege = function (graph) {
    var sort = {}
    for (var i = 0; i < graph.length; i++) {
        min = INF
        for (var j = 0; j < graph.length; j++) {
            /**todo
             * 排序
             */
        }
    }
    return sort
}
this.kruskal = function () {
    var length = graph.length, parent = {}, cost, dege = 0, u, v
    cost = initializeCost()
    //边最多为n-1条 n为顶点个数
    while (dege < length - 1) {
        var sort = sortDege(cost)
        //找到最小代价的边
        for (var i = 0, min = INF; i < length; i++) {
            for (var j = 0; j < length; j++) {
                if (i !== j) {
                    if (cost[i][j] < min && cost[i][j]) {
                        min = cost[i][j]
                        u = i
                        v = j
                    }
                }
            }
        }
        //找到最初父节点 是否来自同一棵树
        var flag = find(u, v, parent)
        //不存在一棵树上 边加加
        if (union(flag, u, v, parent)) {
            dege++
        }
        //从列表中去掉这些边
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
var find = function (n, m, parent) {
    while (parent[n]) {
        n = parent[n]
    }
    while (parent[m]) {
        m = parent[m]
    }
    if (n !== m) {
        return true
    }
    //不在有父节点 返回当前顶点
    return false
}
var union = function (flag, i, j, parent) {
    if (flag) { //不存在同一棵树上 j的父节点为i
        parent[i + '->' + j] = j
        return true
    }
    return false
}
var initializeCost = function () {
    //遍历赋值 深拷贝
    var cpyGraph = []
    for (var i = 0; i < graph.length; i++) {
        cpyGraph[i] = []
        for (var j = 0; j < graph.length; j++) {
            cpyGraph[i][j] = graph[i][j]
        }
    }
    return cpyGraph
}
this.kruskal()