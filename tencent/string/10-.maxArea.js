/**
 * public class Solution {
    public int maxArea(int[] height) {
        int maxarea = 0;
        for (int i = 0; i < height.length; i++)
            for (int j = i + 1; j < height.length; j++)
                maxarea = Math.max(maxarea, Math.min(height[i], height[j]) * (j - i));
        return maxarea;
    }
}

 **/

/**
 * 盛水的最大面积
 * @param height
 */
function maxArea(height) {
    let max = 0
    for(let i = 0; i < height.length; i++) {
        for(let j = i + 1; j < height.length; j++) {
            max = Math.max(max, (j - i) * Math.min(height[i], height[j]) )
        }
    }
    return max
}


const heights = [1,8,6,2,5,4,8,3,7]

console.log(maxArea(heights))

// 方法二 : 双指针法
/**
 * 方法二：双指针法
 算法

 这种方法背后的思路在于，两线段之间形成的区域总是会受到其中较短那条长度的限制。此外，两线段距离越远，得到的面积就越大。

 我们在由线段长度构成的数组中使用两个指针，一个放在开始，一个置于末尾。 此外，我们会使用变量 maxareamaxarea 来持续存储到目前为止所获得的最大面积。 在每一步中，我们会找出指针所指向的两条线段形成的区域，更新 maxareamaxarea，并将指向较短线段的指针向较长线段那端移动一步。

 查看下面的例子将有助于你更好地理解该算法：

 public class Solution {
    public int maxArea(int[] height) {
        int maxarea = 0, l = 0, r = height.length - 1;
        while (l < r) {
            maxarea = Math.max(maxarea, Math.min(height[l], height[r]) * (r - l));
            if (height[l] < height[r])
                l++;
            else
                r--;
        }
        return maxarea;
    }
}

 */

function __maxArea(heights) {
    let max = 0
    let left = 0
    let right = heights.length - 1
    while (left < right) {
        max = Math.max(max,
            Math.min(heights[left], heights[right]) * (right  - left)
            )
        if (heights[left] < heights[right]) {
            left++
        } else {
            right--
        }
    }
    return max

}

console.log(__maxArea(heights))
