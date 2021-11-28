/*
 * @Author: caomd
 * @Date: 2021-11-28 20:07:07
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-28 21:38:53
 */
//美国有以下面额的硬币：d1=1,d2=5,d3=10,d4=25
//如果要找到36美分的零钱，有多少种情况，最少硬币找零的解决方案是找到n所需要的最小硬币数，但要做到这一点，首先要找到对每个x<n的解，然后将解建立在更小的值的解的基础上
function MinCoinChange(coins) {
    var coins = coins, cache = {}
    this.makeChange = function (amount) {
        var me = this
        if (!amount) {
            return []
        }
        if (cache[amount]) {
            return cache[amount]
        }
        var
    }
}
