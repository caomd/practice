/*
 * @Author: caomd
 * @Date: 2021-12-10 22:55:32
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-10 23:07:36
 */
//弗洛伊德算法 多源点到多顶点的最小路径
var graph = [
    [0, 2, 4, 0, 0, 0],
    [0, 0, 1, 4, 2, 0],
    [0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 2],
    [0, 0, 0, 3, 0, 2],
    [0, 0, 0, 0, 0, 0]
]
var INF = Number.MAX_SAFE_INTEGER
var FloydWarshall = function () {
    //initialize
    var dist = []
    for (var i = 0; i < graph.length; i++) {
        dist[i] = []
        for (var j = 0; j < graph.length; j++) {
            if (i === j) {
                dist[i][j] = 0
            } else {
                dist[i][j] = graph[i][j] || INF
            }
        }
    }
    //k 中转站
    for (var k = 0; k < graph.length; k++) {
        for (var i = 0; i < graph.length; i++) {
            for (var j = 0; j < graph.length; j++) {
                if (dist[i][k] && dist[k][j] && dist[i][j] > dist[i][k] + dist[k][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j]
                }
            }
        }
    }
    print(dist)
}
var print = function (dist) {
    var s = ''
    for (var i = 0; i < dist.length; i++) {
        for (var j = 0; j < dist.length; j++) {
            s += dist[i][j] === INF ? 'INF    ' : dist[i][j] + '      '
        }
        s += '\n'
    }
    console.log(s)
}
FloydWarshall()

0      2      3      6      4      6      
INF    0      1      4      2      4      
INF    INF    0      6      3      5      
INF    INF    INF    0      INF    2      
INF    INF    INF    3      0      2      
INF    INF    INF    INF    INF    0  
