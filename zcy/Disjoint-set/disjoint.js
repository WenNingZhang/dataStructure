class Element {
    constructor(value) {
        this.value = value
    }
}

// 并查集
class UnionFindSet {
    constructor(list) {
        this.elementMap = new Map() // 用户输入元素和 Element 元素的映射
        this.fatherMap = new Map()  // 往上节点
        this.sizeMap = new Map()    // 一个元素所在集合的数量，只有代表节点才有。因为isSameSet 和 union 操作都是需要找到代表节点的

        list.forEach(value => {
            const element = new Element(value)
            this.elementMap.set(value, element)
            this.fatherMap.set(element, element)
            this.sizeMap.set(element, 1)
        });
    }
    //  查找其中代表节点
    findHead(element) {
        const path = []
        while(element !== this.fatherMap.get(element)) {
            path.push(element)
            element = this.fatherMap.get(element)
        }
        while(path.length > 0) {
            this.fatherMap.set(path.pop(), element)
        }
        return element
    }
//  查看样本a 和样本b 是否为同一个集合
    isSameSet(a, b) {
        if (this.elementMap.has(a) && this.elementMap.has(b)) {
            return this.findHead(this.elementMap.get(a)) === this.findHead(this.elementMap.get(b))
        }
        return false
    }

    //  合并两个集合
    union(a, b) {
        if (this.elementMap.has(a) && this.elementMap.has(b)) {
            const af = this.findHead(this.elementMap.get(a))
            const bf = this.findHead(this.elementMap.get(b))

            if (af !== bf) {
                const aSetSize = this.sizeMap.get(af)
                const bSetSize = this.sizeMap.get(bf)

                if (aSetSize >= bSetSize) {
                    this.fatherMap.set(bf, af)
                    this.sizeMap.set(af, aSetSize + bSetSize)
                    this.sizeMap.delete(bf)
                } else {
                    this.fatherMap.set(af, bf)
                    this.sizeMap.set(bf, aSetSize + bSetSize)
                    this.sizeMap.delete(af)
                }
            }
        }
    }
}

module.exports = UnionFindSet
