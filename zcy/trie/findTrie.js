
class TrieNode {
    constructor(char) {
        this.char = char
        this.children = []
        this.word_finished = false
        this.counter = 1
    }
}

function add(root, str) {
    let node = root
    const chars = str.split('')
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i]
        let found_in_child = false
        for (let j = 0; j < node.children.length; j++) {
            const child = node.children[j]
            if (child.char === char) {
                child.counter++
                node = child
                found_in_child = true
                break
            }
        }
        if (!found_in_child) {
            const new_node = new TrieNode(char)
            node.children.push(new_node)
            node = new_node
        }
    }
    node.word_finished = true
}

function find_prefix(root, str) {
    let node = root
    if (!root || !root.children || root.children.length === 0) {
        return [false, 0]
    }
    const chars = str.split('')

    for (let i = 0; i < chars.length; i++) {
        let char_not_find = true
        const char = chars[i]
        for (let j = 0; j < node.children.length; j++) {
            const child = node.children[j]
            if (child.char === char) {
                char_not_find = false
                node = child
                break
            }
        }
        if (char_not_find) {
            return [false, 0]
        }
    }
    return [true, node.counter]
}


function find_prefix(root, str) {
    let node = root
    if (!root || !root.children || root.children.length === 0) {
        return [false, 0]
    }
    const chars = str.split('')

    for (let i = 0; i < chars.length; i++) {
        let char_not_find = true
        const char = chars[i]
        for (let j = 0; j < node.children.length; j++) {
            const child = node.children[j]
            if (child.char === char) {
                char_not_find = false
                node = child
                break
            }
        }
        if (char_not_find) {
            return [false, 0]
        }
    }
    const counter = node.counter
    let a =  [true, counter]

    console.log('## 遍历node 子节点，进行查找')

    // console.log('==>', JSON.stringify(node, null, 2))
    var allWords = [];
    var allWordsHelper = function (stringSoFar, tree) {
        tree.children.forEach(child => {
            var newString = stringSoFar + child.char;
            if (child.word_finished) {
                allWords.push(newString);
            }
            allWordsHelper(newString, child);
        })
    };

    allWordsHelper(str, node);

    console.log('======>', allWords)
    
}

const root = new TrieNode('*')
add(root, "hackathon")
add(root, 'hack')

// console.log(find_prefix(root, 'hac'))
// console.log(find_prefix(root, 'hack'))
// console.log(find_prefix(root, 'hackathon'))
console.log(find_prefix(root, 'ha'))
// console.log(find_prefix(root, 'hammer'))