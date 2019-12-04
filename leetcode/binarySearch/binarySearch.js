// https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/solution/er-fen-cha-zhao-suan-fa-xi-jie-xiang-jie-by-labula/


// 1、二分查找的框架
/**
 * int binarySearch(int[] nums, int target) {
    int left = 0, right = ...;

    while(...) {
        int mid = (right + left) / 2;
        if (nums[mid] == target) {
            ...
        } else if (nums[mid] < target) {
            left = ...
        } else if (nums[mid] > target) {
            right = ...
        }
    }
    return ...;
}
 二、寻找左侧边界的二分搜索
 直接看代码，其中的标记是需要注意的细节：

 Java
 int left_bound(int[] nums, int target) {
    if (nums.length == 0) return -1;
    int left = 0;
    int right = nums.length; // 注意

    while (left < right) { // 注意
        int mid = (left + right) / 2;
        if (nums[mid] == target) {
            right = mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid; // 注意
        }
    }
    return left;
}

 **/
/**
 * 一、寻找一个数（基本的二分搜索）
 这个场景是最简单的，肯能也是大家最熟悉的，即搜索一个数，如果存在，返回其索引，否则返回 -1。

 Java
 int binarySearch(int[] nums, int target) {
    int left = 0;
    int right = nums.length - 1; // 注意

    while(left <= right) {
        int mid = (right + left) / 2;
        if(nums[mid] == target)
            return mid;
        else if (nums[mid] < target)
            left = mid + 1; // 注意
        else if (nums[mid] > target)
            right = mid - 1; // 注意
        }
    return -1;
}
 */

function binarySearch(nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right ) {
        let mid = parseInt((right + left) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (target > nums[mid]) {
            left = mid + 1
        }else if (target < nums[mid]) {
            right = mid - 1
        }
    }
    return -1
}

/**
 *
 * @param nums
 * @param target
 * @returns {number}
 */
function left_bound(nums, target) {
    if (nums.length === 0) return -1
    let left = 0
    let right = nums.length-1
//    是闭区间
    while (left <= right) {
        const mid = parseInt((left + right) / 2)
        console.log('===>',left, right, mid, nums[mid] ,target)
        if (nums[mid] === target) {
            right = mid - 1
        }else if (nums[mid] < target) {
            left = mid + 1
        }else if (nums[mid] > target) {
            right = mid - 1
        }
    }
    if (left <= nums.length- 1 && nums[left] === target)
        return left
    return -1
}




function right_bound(nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        const mid = parseInt((left + right) / 2)
        if (nums[mid] === target) {
            left = mid + 1
        }else if (nums[mid] < target) {
            left = mid + 1
        }else if (nums[mid] > target) {
            right = mid - 1
        }
    }

    if (right < nums.length && nums[right] === target) {
        return right
    }
    return -1
}

var searchRange = function(nums, target) {
    function left_bound(nums, target) {
        let left = 0
        let right = nums.length - 1
        while (left <= right) {
            const mid = parseInt((left + right) / 2)
            if (nums[mid] === target) {
                right = mid - 1
            } else if (nums[mid] < target) {
                left = mid + 1
            } else if (nums[mid] > target) {
                right = mid - 1
            }
        }
        if (left <= nums.length - 1 && nums[left] === target) {
            return left
        }
        return -1
    }
    function right_bound(nums, target) {
        let left = 0
        let right = nums.length - 1
        while (left <= right) {
            const mid = parseInt((left + right) / 2)
            if (nums[mid] === target) {
                left = mid + 1
            }else if (nums[mid] < target) {
                left = mid + 1
            }else if (nums[mid] > target) {
                right = mid - 1
            }
        }

        if (right < nums.length && nums[right] === target) {
            return right
        }
        return -1
    }
    const leftValue = left_bound(nums, target)
    const rightValue = right_bound(nums, target)
    return [leftValue, rightValue]
};

let nums = [5,7,7,8,8,10], target = 11

console.log(left_bound(nums, target))
