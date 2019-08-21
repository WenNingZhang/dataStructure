leetcode link
`https://leetcode.com/problems/container-with-most-water/description/`

### Container With Most Water
```
给定 n 个非负整数 a1, a2, ..., an, 每个数代表了坐标中的一个点 (i, ai)。画 n 条垂直线，使得 i 垂直线的两个端点分别为(i, ai)和(i, 0)。找到两条线，使得其与 x 轴共同构成一个容器，以容纳最多水。

```

例如给定数 1 8 6 2 5 4 8 3 7
组合出来的坐标是
(1, 1)
(2, 8)
(3, 6)
(4, 2)
(5, 5)
(6, 4)
(7, 8)
(8, 3)
(9, 7)

容器盛水决定因素是:
+ 两根垂线中的短的那条(为高度)
+ 两条垂线的水平距离(为宽度)

思路一:
因此可以使用`暴力枚举法`
```
function test(list) {
	let maxarea = 0
	for(let i = 0; i< list.length; i++) {
		for(let j = i + 1; j < list.length; j++) {
			maxarea = Math.max(maxarea, Math.min(list[i], list[j]) * (j - i))
		}
	}
	return maxarea
}
```

思路二：

分析:
+ 为使面积最大化，先假设最远垂直线之间的面积为最大的(两条垂线之间的距离为宽和两条垂线之间较短的那条为高)。

+ 然后垂线的位置可以向中间移动，确定是否面积为最大
+ 假设在移动过程中把较长垂直线往前移动，此时盛水的面积不会增加,因为面积会受限于那条短的垂线。 	   这对于使得盛水面积变大这个事件是一个`不可能事件`。

+ 但是如果往前移动较短的垂线，尽管宽度变小了，但是面积可能会变大。原因是根据相对长度计算出的盛水面积可能会大于由于宽度减少的那个容器的面积，这对于使得盛水面积变大这个事件是一个`可能事件`。

通过以上结论:因此要把较短那条垂线往中心移动。


```
function solution(list) {
	var maxarea = 0, l = 0, r = list.length - 1
	while(l < r) {
		maxarea = Math.max(maxarea, Math.min(list[l], list[r]) * (r - l))
		if (list[l] < list[r]) l++;
		else r--;
	}
	return maxarea
}
```






