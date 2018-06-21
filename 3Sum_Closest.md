leetcode link
`https://leetcode.com/problems/3sum-closest/description/`

### 3Sum Closest

```
有一个由 n 个整数组成的数组 nums ，另外给一个整数 target, 在数组 nums 中找寻三个数，然后相加三个数,和为 sum，使得 sum 最接近 target。
返回值为3个整数的和。

```

方法一:暴力法
	1、设定一个整数最大值作为最接近的三个和的数`closeNum`
	2、三层 for 循环遍历数组，计算出接近值 `Math.abs( list[i] + list[j] + list[k] - target)`
	3、比较 计算出的接近值 和 `closeNum`，如果比`closeNum`小，赋值。否则，不处理。
```

```
function close(list, target) {
	let closeNum = Number.MAX_VALUE	// js中最大整数
	let sum = 0
	for(let i = 0; i< list.length; i++) {
		for(let j = i+1; j< list.length; j++) {
			for(let k = j+1; k<list.length; k++) {
				if (Math.abs( list[i] + list[j] + list[k] - target) < closeNum) {
					closeNum = Math.abs( list[i] + list[j] + list[k] - target)
					sum = list[i] + list[j] + list[k]
				}
			}
		}
	}
	return sum
}

let list = [-1, 2, 1, -4]
let target = 1
console.log(close(list, target))

```

方法二: 

```
/**
 * @param {number[]} list
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(list, target) {
 	let sum = 0
 	list.sort((a, b) => a - b)
	let ans = list[0] + list[1] + list[2]
	for(let i = 0; i< list.length -2; i++) {
		let j = i + 1;
		let k = list.length - 1;
		while(j < k) {
			sum = list[i] + list[j] + list[k]
			if (Math.abs(sum - target) < Math.abs(ans - target)) {
				ans = sum
			}
			if (sum > target) {
				k--
			} else if (sum < target) {
				j++
			} else {
				return sum
			}
		}
	}
	return ans
};


let list = [1, 1, -1]
let target = 0
console.log(threeSumClosest(list, target))
```