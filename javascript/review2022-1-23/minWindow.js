/*
 * @Author: caomd 
 * @Date: 2022-01-23 20:44:20 
 * @Last Modified by: caomd
 * @Last Modified time: 2022-01-23 21:24:59
 */
var minWindow = function (s, t) {
    var need = [], window
    var tChar = t.split('')
    for (var i = 0; i < tChar.length; i++) {
        need[i] = tChar[i]
    }
    var left = 0, right = 0, valid = 0
    //记录最小覆盖率的起始索引及长度
    var start = 0, len = INT_MAX
    while (right < s.size) {
        //c是移入窗口的字符
        var c = s[right]
        right++
        //进行窗口内数据的一系列更新
        if (need.count(c)) {
            window[c]++
            if (window[c] === need[c]) {
                valid++
            }
        }
    }
    //判断左侧窗口是否要收缩
    while (valid === need.size()) {
        //在这里更新最小覆盖子串
        if (right - left < len) {
            start = left
            len = right - left
        }
        //d是将移出窗口的字符
        var d = s[left]
        //left window
        left++
        //进行窗口内数据的一系列更新
        if (need.count(d){
            if (window[d] === need[d]) {
                valid--
                window[d]--
            }
        }
    }
    return len === INT_MAX ? '' : s.substr(start, len)
}