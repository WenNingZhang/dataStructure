/**
 *
 Implement a MapSum class with insert, and sum methods.

 For the method insert, you'll be given a pair of (string, integer). The string represents the key and the integer represents the value. If the key already existed, then the original key-value pair will be overridden to the new one.

 For the method sum, you'll be given a string representing the prefix, and you need to return the sum of all the pairs' value whose key starts with the prefix.

 Example 1:
 Input: insert("apple", 3), Output: Null
 Input: sum("ap"), Output: 3
 Input: insert("app", 2), Output: Null
 Input: sum("ap"), Output: 5
 */

/**
 * Initialize your data structure here.
 */
var MapSum = function() {
   this.map = {}
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    this.map[key] = val
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let sum = 0;
    let map = this.map;
    for (let item in map) {
        if (item.startsWith(prefix)) {
            sum += parseInt(map[item])
        }
    }
    return sum;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */


var MapSum = function() {
    this.root = {};
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    let curr = this.root;
    key.split("").forEach(ch => {
        console.log(ch, curr)
        curr[ch] = curr[ch] || {};
        // console.log(curr[ch])
        curr = curr[ch]
        // console.log(curr)
    })
    curr.end = val;
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let curr = this.root;
    for(let i=0; i<prefix.length; i++){
        curr = curr[prefix[i]] || {};
    }

    let dfs = (node, sum = 0) => {
        if(!node) return sum;
        if(node["end"]){
            sum += node["end"];
            if(Object.keys(node).length === 1) return sum;
        } else if (Object.keys(node).length === 0) {
            return sum;
        }
        return Object.keys(node).reduce((accSum, currKey) => {
            if(currKey === "end") return accSum;
            return dfs(node[currKey], accSum);
        }, sum)
    }

    return dfs(curr, 0);
};

var obj = new MapSum()
console.log(obj)
obj.insert("apple",3)
console.log(JSON.stringify(obj, null, 4))
// var value1 = obj.sum("ap")
// console.log(value1)
// obj.insert("app", 2)
// console.log(JSON.stringify(obj, null, 4))
// var value2 = obj.sum("ap")
// console.log(value2)
