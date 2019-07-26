
class Pool {
    constructor() {
        this.keyIndexMap = new Map()
        this.indexKeyMap = new Map()
        this.size = 0
    }

    insert(key) {
        if (!this.keyIndexMap.has(key)) {
            this.keyIndexMap.set(key, this.size)
            this.indexKeyMap.set(this.size++, key)
        }
    }

    delete(key) {
        if (this.keyIndexMap.has(key)) {
            const deleteIndex = this.keyIndexMap.get(key)
            const lastIndex = --this.size
            const lastKey = this.indexKeyMap.get(lastIndex)
            this.keyIndexMap.set(lastKey, deleteIndex)
            this.indexKeyMap.set(deleteIndex, lastKey)
            this.keyIndexMap.delete(key)
            this.indexKeyMap.delete(lastIndex)
        }
    }

    getRandom() {
        if (this.size === 0) {
            return null
        }
        const randomIndex = parseInt(Math.random() * (this.size))
        return this.indexKeyMap.get(randomIndex)
    }
}

const pool = new Pool()

pool.insert('a')
pool.insert('b')
pool.insert('c')
pool.insert('d')
pool.insert('e')

pool.delete('c')

console.log('===>', pool)
console.log('generate random is : ', pool.getRandom())