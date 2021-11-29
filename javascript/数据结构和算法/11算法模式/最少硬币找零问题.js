/*
 * @Author: caomd
 * @Date: 2021-11-28 20:07:07
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-29 18:03:09
 */
//美国有以下面额的硬币：d1=1,d2=5,d3=10,d4=25
//如果要找到36美分的零钱，有多少种情况，最少硬币找零的解决方案是找到n所需要的最小硬币数，但要做到这一点，首先要找到对每个x<n的解，然后将解建立在更小的值的解的基础上
// function MinCoinChange(coins) {
//     var coins = coins, cache = {}
//     //解决找零问题
//     this.makeChange = function (amount) {
//         var me = this
//         if (!amount) {
//             return []
//         }
//         if (cache[amount]) {
//             return cache[amount]
//         }
//         var
//     }
// }

//找零6
var minCoinChange = function (coins) {
    //cache 格式 {1:[{1:1,1,1,1,1},[{3:1,3,1,1}],[{4:1,4,1}]],3:[{3:3}],4:[{}]}
    var cache = {}, coins = coins
    this.makeChange = function (amount) {
        var me = this
        if (!amount) {
            return []
        }
        if (cache[amount]) {
            return cache[amount]
        }
        var min = [], newMin, newAmount
        for (var i = 0; i < coins.length; i++) {
            var coin = coins[i]
            newAmount = amount - coin
            if (newAmount >= 0) {
                newMin = me.makeChange(newAmount)//返回return (cache[amount] = min)
                console.log(newMin + 'newMin')
            }
            if (newAmount >= 0 && (newMin.length < min.length - 1 || !min.length) && (newMin.length || !newAmount)) {
                min = [coin].concat(newMin)//并没有改变min的值
                console.log('new Min' + min + 'for' + amount)
            }
        }
        return (cache[amount] = min)
    }
}
var minCoinChange = new minCoinChange([1, 3, 4])
console.log(minCoinChange.makeChange(6))
