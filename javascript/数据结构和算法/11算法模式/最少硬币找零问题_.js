var MinCoinChange = function (coins) {
    //存储对象
    var cache = {}, coins = coins
    this.makeChange = function (amount) {
        if (cache[amount]) {
            return cache[amount]
        }
        if (!amount) {
            return []
        }
        var min = [], newMin, newAmount
        for (var i = 0; i < coins.length; i++) {
            newAmount = amount - coins[i]
            if (newAmount >= 0) {
                newMin = this.makeChange(newAmount)
            }
            if (newAmount >= 0 && (newMin.length < min.length || !min.length) && (!newAmount || newMin.length)) {
                min = [coins[i]].concat(newMin)
                console.log('new Min' + min + 'for' + amount)
            }
        }
        return cache[amount] = min
    }
}
var minCoinChange = new MinCoinChange([1, 3, 4])
console.log(minCoinChange.makeChange(6))