/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let length = 0
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[length]) {
            length++
            nums[length] = nums[i]
        }
    }     
    return length + 1
};

const nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums))
