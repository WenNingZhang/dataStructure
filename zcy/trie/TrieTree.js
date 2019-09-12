
/**
 * 每个字符串的值在边上，点上包括的是该字符串经过的次数(pass 值)和 多少字符串是以该该字符结尾的 (end 值)
 */
class Node {
    constructor(pass, end, nexts) {
        // 这个节点在加字符串的时候到达过多少次
        this.pass = 0
        // 有多少个字符串是以这个节点结尾的
        this.end = 0
        // 下级的路， HashMap<Char, Node> map ('a', xxx)
        this.nexts = []
    }
}

class Trie {
    constructor() {
        this.root = new Node()
    }

    insert(word) {
        if (!word) {
            return
        }
        this.root.pass++
        let cur = this.root
        const chs = word.split('')
        let index = 0         // 哪条路

        for (let i = 0; i < chs.length; i++) {
            index = chs[i].charCodeAt() - 'a'.charCodeAt()
            if (!cur.nexts[index]) {
                cur.nexts[index] = new Node()
            }
            cur = cur.nexts[index]
            cur.pass++
        }
        cur.end++
    }

    // 在前缀树上删除 word
    delete(word) {
        if (this.search(word) !== 0) {
            this.root.pass--
            const chs = word.split('')
            let node = this.root
            let index = 0
            for (let i = 0; i < chs.length; i++) {
                index = chs[i].charCodeAt() - 'a'.charCodeAt()
                if (--node.nexts[index].pass === 0) {
                    node.nexts[index] = null
                    return;
                }
                node = node.nexts[index]
            }
            return node.end--
        }
    }

    // 查询 word 加入过几次
    search(word) {
        if (!word) {
            return 0
        }
        let chs = word.split('')
        let node = this.root
        let index = 0
        for (let i = 0; i < chs.length; i++) {
            index = chs[i].charCodeAt() - 'a'.charCodeAt()
            if (!node.nexts[index]) {
                return 0
            }
            node = node.nexts[index]
        }
        return node.end
    }


    // 查询有多少个加入的字符串是以 pre 开头的。
    prefixNumber(pre) {
        if (!pre) {
            return 0
        }
        const chs = pre.split('')
        let node = this.root
        let index = 0
        for (let i = 0; i < chs.length; i++) {
            index = chs[i].charCodeAt() - 'a'.charCodeAt()
            if (!node.nexts[index]) {
                return 0
            }
            node = node.nexts[index]
        }
        return node.pass
    }
}

const trie = new Trie();
console.log(trie.search("zuo"));
trie.insert("zuo");
console.log(trie.search("zuo"));
trie.delete("zuo");
console.log(trie.search("zuo"));

trie.insert("zuo");
trie.insert("zuo");
trie.delete("zuo");

console.log(trie.search("zuo"))


trie.insert("zuoa");
trie.insert("zuoac");
trie.insert("zuoab");
trie.insert("zuoad");
trie.delete("zuoa");

console.log(trie.search("zuoa"))
console.log(trie.prefixNumber("zuo"))