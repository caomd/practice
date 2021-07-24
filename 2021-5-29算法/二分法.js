var search = function (nums, target) {
    let mid = Math.floor(nums.length / 2);
    let midNum = nums[mid];
    const tarry = nums.slice(mid);
    const farry = nums.slice(0, mid);
    if (midNum <= target) {
        return tarry.indexOf(target) != -1 ? tarry.indexOf(target) + mid : -1;
    } else {
        return farry.indexOf(target) != -1 ? farry.indexOf(target) : -1;
    }
};
// console.log(search([-1,0,3,5,9,12],9))
console.log(search([5], 5))