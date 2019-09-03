
class UnionFindSet {
    constructor(fatherMap, rankMap) {
        this.fatherMap = new Map()
        this.rankMap = new Map()
    }

    findFather(node) {
        let father = this.fatherMap.get(node)
        if (father !== node) {
            father = this.findFather(father)
        }
        this.fatherMap.set(node, father)
        return father
    }

    makeSet(nodes) {
        this.fatherMap.clear()
        this.rankMap.clear()
        for (const node of nodes) {
            this.fatherMap.set(node, node)
            this.rankMap.set(node, 1)
        }
    }

    isSameSet(a, b) {
        return this.findFather(a) === this.findFather(b)
    }

    /**
     * 合并a, b 两个集合
     * @param {*} a 
     * @param {*} b 
     */
    union(a, b) {
        if (a === null || b === null) {
            return
        }

        const aFather = this.findFather(a)
        const bFather = this.findFather(b)

        if (aFather !== bFather) {
            const aFrank = this.rankMap.get(aFather)
            const bFrank = this.rankMap.get(bFather)

            if (aFrank <= bFrank) {
                this.fatherMap.set(aFather, bFather)
                this.rankMap.set(bFather, aFrank + bFrank)
                this.rankMap.delete(aFather)
            } else {
                this.fatherMap.set(bFather, aFather)
                this.rankMap.set(aFather, aFrank + bFrank)
                this.rankMap.delete(bFather)
            }
        }
    }
}

module.exports = UnionFindSet