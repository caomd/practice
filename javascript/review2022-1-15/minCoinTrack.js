/*
 * @Author: caomd 
 * @Date: 2022-01-15 16:31:02 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-15 17:01:13
 */
var res = []
var minCoinChange = function (coins) {
    this.makeChange = function (amount) {
        var track = []
        backTrack(track, amount, coins)
    }
}
var backTrack = function (track, amount, coins) {
    if (sum(track) === amount || track.length < res.length) {
        res = track
    }
    for (var i = 0; i < coins.length; i++) {
        if (amount > 1) {
            backTrack(track, amount - coins[i], coins)
        }
        track.pop()
    }
}
var sum = function (track) {
    var sum = 0
    for (var i = 0; i < track.length; i++) {
        sum += track[i]
    }
    return sum
}
var min = new minCoinChange([1, 3, 4])
min.makeChange(6)