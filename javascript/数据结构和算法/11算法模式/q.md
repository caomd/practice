/*
 * @Author: caomd 
 * @Date: 2021-11-29 20:25:45 
 * @Last Modified by:   caomd 
 * @Last Modified time: 2021-11-29 20:25:45 
 */

最少硬币找零问题是硬币找零问题的一个变种
硬币找零问题是给出找零的钱数，以及可用的硬币面额及其数量，找出有多少种找零的方法
最少硬币找零问题是给出要找零的钱，以及可用的硬币面额及其数量，找到所需的最少的硬币个数
递归 解决问题的各个小部分，直到解决最初的大问题
使用cache={} 缓存每个面额的最少数量 if(cache[amount]){return cache[amount]}
min = [] 存储构造的面额的数组1，2，3，4，5·····
newMin=this.makeChange(newAmount)