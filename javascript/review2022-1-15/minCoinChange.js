/*
 * @Author: caomd 
 * @Date: 2022-01-12 16:51:36 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-15 16:17:18
 */

var minCoinChange = function (coins) {
    var cache = {}, coins = coins
    this.makeChange = function (amount) {
        if (cache[amount]) {
            return cache[amount]
        }
        if (!amount) {
            return []
        }
        var min = [], newAmount, newMin
        for (var i = 0; i < coins.length; i++) {
            newAmount = amount - coins[i]
            if (newAmount >= 0) {
                newMin = this.makeChange(newAmount)
            }
            if (newAmount >= 0 && (newMin.length < min.length || !min.length && (!newAmount || newMin.length))) {
                min = [coins[i]].concat(newMin)
                console.log('new Min' + min + 'for' + amount)
            }
        }
        return cache[amount] = min
    }
}
var minCoin = new minCoinChange([1, 3, 4])
console.log(minCoin.makeChange(6))