/*
 * @Author: caomd 
 * @Date: 2022-01-10 18:57:22 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-10 19:43:49
 */
var graph = [
    [0, 2, 4, 0, 0, 0],
    [0, 0, 1, 4, 2, 0],
    [0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 2],
    [0, 0, 0, 3, 0, 2],
    [0, 0, 0, 0, 0, 0]
]
var INF = Number.MAX_SAFE_INTEGER
//多顶点到多点的最短路径
var FloydWarshall = function () {
    var dist = []
    //initialize dist
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
    //每个点都是中转点
    for (var k = 0; k < graph.length; k++) {
        for (var v = 0; v < graph.length; v++) {
            for (var w = 0; w < graph.length; w++) {
                if (dist[k][w] && dist[v][k] + dist[k][w] < dist[v][w]) {
                    dist[v][w] = dist[v][k] + dist[k][w]
                }
            }
        }
    }
    printMatrix(dist)
    console.log(dist)
}
var printMatrix = function (dist) {
    var str = ''
    for (var i = 0; i < dist.length; i++) {
        for (var j = 0; j < dist.length; j++) {
            str += dist[i][j] === INF ? 'INF  ' : dist[i][j] + '    '
        }
        str += '\n'
    }
    console.log(str)
}
FloydWarshall()
// 0    2    3    6    4    6
// INF  0    1    4    2    4    
// INF  INF  0    6    3    5    
// INF  INF  INF  0    INF  2    
// INF  INF  INF  3    0    2    
// INF  INF  INF  INF  INF  0 

