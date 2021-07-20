//贪婪 获取利益最大化 并且尽快的满足需求
//给定一个整数数组，找到一个具有最大和的连续子数组，返回最大和
const maxSubArray = function (nums) {
    let ret = nums[0];
    let sum = 0;
    for (const num of nums) {
        if (sum > 0) {
            sum += num;
        } else {
            sum = num;
        }
        ans = Math.max(ans, sum)
    }
    return ans;
}