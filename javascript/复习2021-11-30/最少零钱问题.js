/*
 * @Author: caomd 
 * @Date: 2021-11-30 14:55:46 
 * @Last Modified by: caomd
 * @Last Modified time: 2021-11-30 15:13:40
 */
var CoinMinChange = function (coins) {
    //面额
    var coins = coins, cache = {}
    this.makeChange = function (amount) {
        var min = [], //最小组合
            newAmount, newMin
        if (cache[amount]) {
            return cache[amount]
        }
        for (var i = 0; i < coins.length; i++) {
            var coin = coins[i]
            newAmount = amount - coin
            //如果newAmount依然大于等于0
            if (newAmount >= 0) {
                newMin = this.makeChange(newAmount)
            }
            //退出上边递归，newAmount小于0
            if (newAmount >= 0 && (newMin.length < min.length || !min.length) && (!newAmount || newMin.length)) {
                min = [coin].concat(newMin)
            }
        }
        return cache[amount] = min
    }
}
var coinMinChange = new CoinMinChange([1, 5, 10, 25])
console.log(coinMinChange.makeChange(36))