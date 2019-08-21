
//  这个问题
function process(arr) {

	arr = arr.map(item => item.toString())
	const lengths = arr.map(item => item.length)
	console.log(lengths)
	const matLen = Math.max(...lengths)
	console.log('---->', matLen)

	arr = arr.map(item => {
		while(item.length < 3) {
			item = '0' + item
		}
		return item
	})

	console.log('====>', arr)


}	

let arr = [103,23,27,106,1]
process(arr)