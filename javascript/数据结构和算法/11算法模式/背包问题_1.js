/*
 * @Author: caomd
 * @Date: 2021-11-30 15:16:03
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-30 19:15:32
 */
//背包问题 找个各个values相互组合，长度最短，且weights<5,values最大
var values = [3, 4, 5], weights = [2, 3, 4], capacity = 5, n = values.length
function KnapSack(capacity, weights, values, n) {
    var cache = {}, min = [], newMin = {}, newCapacity
    this.minWeight = function (capacity) {
        var cache = []
        //先看重量不超过5的重量组合有多少种 每一个重量
        for (var i = 0; i < weights.length; i++) {
            for (var j = 0; j < weights.length; j++) {
                if (weights[i] + weights[j] <= 5) {
                    //判断重复
                    equals(cache, weights[i], weights[j])
                }
            }
        }
        return this.findValue(cache, values)
    }
    this.findValue = function (cache) {
        //比较价值
        var min, sumVal = 0
        for (var i = 0; i < cache.length; i++) {
            if ((i + 1) < cache.length && cache[i + 1].length < cache[i].length) {
                min = cache[i + 1]
            }
        }
        if (min) {
            for (var i = 0, w; w = min[i++];) {
                sumVal += values[weights.indexOf(w[i])]
            }
            return sumVal
        }
        var maxVal = 0
        for (var k = 0, c; c = cache[k++];) {
            sumVal = 0
            for (var i = 0, w; w = c[i++];) {
                sumVal += values[weights.indexOf(w)]
            }
            if (maxVal > sumVal) {
                return
            }
            maxVal = sumVal
        }
        return maxVal
    }
}
var equals = function (cache, a, b) {
    var count = [a].concat(b)
    if (cache.length !== 0) {
        for (var i = 0, c; c = cache[i++];) {
            var befor = c.reverse().join('')
            var after = count.join('')
            if (befor === after) {
                return
            }
        }
    }
    return cache.push(count)
}
var knapSack = new KnapSack(capacity, weights, values, n)
console.log(knapSack.minWeight(5))
