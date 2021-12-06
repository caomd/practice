/*
 * @Author: caomd
 * @Date: 2021-12-06 21:56:18
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-06 22:36:09
 */
//最少零钱问题 思路 给定面额数组 以及找零钱数
//step 1 newAmount = change - amount closure
//step 2 cache [] store already tranverse amount
//step 3 newAmount<0   quit closure
//step 4 judge min and newMin 
//step 5 final conditions 
//step 6 min = [coin].concat(newMin)
var minChangeCoin = function (coins) {
    var coins = coins, cache = {}
    this.changeCoins = function (amount) {
        //declare variables
        var min = [], newMin, newAmount
        if (!amount) {
            return []
        }
        if (cache[amount]) {
            return cache[amount]
        }
        //tranverse coins
        for (var i = 0; i < coins.length; i++) {
            var coin = coins[i]
            newAmount = amount - coin
            if (newAmount >= 0) {
                newMin = this.changeCoins(newAmount)
            }
            if (newAmount >= 0 && (newMin.length < min.length || !min.length) && (!newAmount || newMin.length)) {
                min = [coin].concat(newMin)
            }
        }
        return cache[amount] = min
    }
}
var coinMinChange = new minChangeCoin([1, 3, 4])
console.log(coinMinChange.changeCoins(6))