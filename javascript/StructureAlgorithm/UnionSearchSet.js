/*
 * @Author: caomd 
 * @Date: 2022-01-11 14:30:08 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-11 20:15:13
 */

/**
 * 并查集是一种树型的数据结构，用于处理一些不交集的合并和查询问题，通常有两种操作。
 *Find:确定元素属于哪一种子集，它可以用来确定两个元素是否属于同一个子集
 Union:将两个子集合并成一个集合
在工程中，并查集多用于数据清理分类等操作，并且能够以O(N)时间复杂度处理较大的数据量，出现在大厂面试中不足为奇
 */
// var Union = function () { }
// var Find = function () { }
var F = [N]
for (int i = 0; i < N; i++) {
    F[i] = i
}
var Find = function (x) {
    //find root
    int b = x;
    while (F[x] !== x) {
        x = F[x]
    }
    while (F[b] != x) {
        var p = F[b]
        F[b] = x
        b = p
    }
    return x
}
var Union = function (x, y) {
    F[Find(x)] = find(y)
}

//more simple
var F = [N]
var Find = function (x) {
    return x === F[x] ? x : F[x] = Find(F[x])
}
void Union = function(x, y) {
    F[find(x)] = find(y)
}