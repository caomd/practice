元素的 频数 是该元素在一个数组中出现的次数。

给你一个整数数组 nums 和一个整数 k 。在一步操作中，你可以选择 nums 的一个下标，并将该下标对应元素的值增加 1 。

执行最多 k 次操作后，返回数组中最高频元素的 最大可能频数 。
/* r从1开始，比如1，4，8，13，此时是4，需要把1变成当前数字nums[r]，需要的次数则是1*3次
            此时total所代表的数都已经变成了4，此时遍历下一位8，因为前面的数字都是相等的，所以通过计算
            (r-l)*(nums[r]-nums[r-1])即可计算新的total值
            但是每次计算total后都要检查是否超过k，如果超过了k则需要不断从total中减去nums[l]的值
            为什么是减去nums[l]的值呢？
            数组是有序的，从后一个数变成更大的数x代价一定要比前一个数变成x的代价小，所以这里需要不断减去
            nums[l]的值更新total以使得total重新 <= k,因为max会记录每次最大的频数，也不用担心会漏掉
            */
var maxFrequency = function (nums, k) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let total = 0, res = 1, l = 0;

    for (let r = 1; r < n; r++) {
        total += (nums[r] - nums[r - 1]) * (r - l);
        while (total > k) {
            total -= nums[r] - nums[l];
            l += 1;
        }
        res = Math.max(res, r - l + 1);
    }
    return res;
};