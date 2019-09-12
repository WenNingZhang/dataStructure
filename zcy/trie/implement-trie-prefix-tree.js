/**
 * Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
Note:

You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.
 */


/**
* Initialize your data structure here.
*/

class TrieNode {
    constructor(char) {
        this.word_finished = false  // 是否是最后一个字符串
        this.char = char
        this.nexts = { }
    }
}
var Trie = function () {
    this.root = new TrieNode()
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let curNode = this.root
    const chars = word.split('')
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i]
        if (!curNode.nexts[char]) {
            curNode.nexts[char] = new TrieNode(char)
        }
        curNode = curNode.nexts[char]
    }
    curNode.word_finished = true
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    if (!word) return true
    let curNode = this.root
    const chars = word.split('')
    let success_search_word = true
    for(let i = 0 ; i < chars.length; i++) {
        const char = chars[i]
        if (!curNode.nexts[char]) {
            success_search_word = false
            break
        }
        curNode = curNode.nexts[char]
    }
    return success_search_word && curNode.word_finished
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    if (!prefix) return true
    let curNode = this.root
    const chars = prefix.split('')
    let success_search_word = true
    for(let i = 0 ; i < chars.length; i++) {
        const char = chars[i]
        if (!curNode.nexts[char]) {
            success_search_word = false
            break
        }
        curNode = curNode.nexts[char]
    }
    return success_search_word
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// const 
var trie = new Trie()
trie.insert("apple")
console.log(JSON.stringify(trie, null ,2))
console.log(trie.search("apple"));   // returns true
console.log(trie.search("app")); // returns true
console.log(trie.startsWith("app")); // returns true)
//  var param_2 = obj.search(word)
//  var param_3 = obj.startsWith(prefix)