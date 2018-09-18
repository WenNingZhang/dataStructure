const MAX = 50;

module.exports = (nums) => {
    const items = new Array(nums);
    console.log(items, items.length)
    let b =  items.map(() => {
        let c =  parseInt(Math.random() * MAX, 10) + 1
        console.log(c )
        return c
    });

    console.log(b)
};


let a = module.exports(10)

console.log(a)
