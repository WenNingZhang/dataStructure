
/**
 * 判断两个字符串是否为变形词
 * @param {*} str1 
 * @param {*} str2 
 */
function isDeformation(str1, str2) {
    const chars1 = str1.split('')
    const chars2 = str2.split('')
    const map1 = { }
    const map2 = { }
    chars1.forEach(element => {
        map1[element] ? map1[element]++ : map1[element] = 1
    });
    chars2.forEach(element => {
        map2[element] ? map2[element]++ : map2[element] = 1
    });
    if (Object.keys(map1).length !== Object.keys(map2).length ) {
        return false
    }

    for(key in map1) {
        if (map1[key] !== map2[key]) {
            return false
        }
    }
    return true
}

console.log(isDeformation('123', '231'))
console.log(isDeformation('123', '2331'))