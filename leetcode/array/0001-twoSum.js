/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        if (nums.indexOf(target - nums[i]) >= 0 && i !== nums.indexOf(target - nums[i])){
            return [i , nums.indexOf(target - nums[i])]
        }
    }
    return [];
};

let nums = [2, 7, 11, 15], target = 9

console.log(twoSum(nums, target))