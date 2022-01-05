/*
 * @Author: caomd 
 * @Date: 2022-01-05 13:31:31 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-05 13:58:02
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
//many src to many vertexes 多元最短路径
var FloydWarShall = function () {
    var dist = []
    //initailize dist
    for (var i = 0; i < graph.length; i++) {
        dist[i] = []
        for (var j = 0; j < graph.length; j++) {
            if (i === j) {
                dist[i][j] = graph[i][j]
            } else {
                dist[i][j] = graph[i][j] || INF
            }
        }
    }
    //transfer station
    for (var i = 0; i < graph.length; i++) {
        for (var j = 0; j < graph.length; j++) {
            for (var v = 0; v < dist.length; v++) {
                if (dist[i][v] && dist[j][i] + dist[i][v] < dist[j][v]) {
                    dist[j][v] = dist[j][i] + dist[i][v]
                }
            }
        }
    }
    console.log(dist)
    printGra(dist)
}

var printGra = function (matrix) {
    var str = ''
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix.length; j++) {
            str += matrix[i][j] === INF ? 'INF  ' : matrix[i][j] + '    '
        }
        str += '\n'
    }
    console.log(str)
}
FloydWarShall()

// 0     2     3     6     4     6     
// INF   0     1     4     2     4     
// INF   INF   0     6     3     5     
// INF   INF   INF   0     INF   2     
// INF   INF   INF   3     0     2     
// INF   INF   INF   INF   INF   0 