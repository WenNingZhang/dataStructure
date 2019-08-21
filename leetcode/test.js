
function canJumpFromPosition(position, mums) {
	console.log(position)
	if (position === nums.length -1) {
		return true 
	}

	let furthestJump = Math.min(position + nums[position], nums.length - 1)
	for(let nextPositon = position + 1; nextPositon <= furthestJump; nextPositon++) {
		if (canJumpFromPosition(nextPositon, nums)) {
			return true
		}
	}
	return false
}

let nums = [2,3,1,1,4]
let nums1 = [3,2,1,0,4]
let a = canJumpFromPosition(0, nums)

console.log(a)