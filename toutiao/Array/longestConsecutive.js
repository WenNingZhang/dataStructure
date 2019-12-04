function longestConsecutive(nums) {
    const set = new Set();
    nums.forEach(num => {
        set.add(num);
    });

    let longest = 1;
    for (let item of set) {
        if (!set.has(item - 1)) {
            let cur = item;
            let curLong = 1;

            while (set.has(cur + 1)) {
                cur++;
                curLong++;
            }

            longest = Math.max(curLong, longest);
        }
    }

    return longest;
}

let list = [100, 4, 200, 1, 3, 2];
console.log('==>', longestConsecutive(list));
