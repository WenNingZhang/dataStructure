/**
 package advanced_class_04;

 import java.util.HashMap;

 public class Code_02_LRU {

	public static class Node<V> {
		public V value;
		public Node<V> last;	// 上一个指针
		public Node<V> next;	// 下一个指针

		public Node(V value) {
			this.value = value;
		}
	}

	public static class NodeDoubleLinkedList<V> {
		private Node<V> head;
		private Node<V> tail;

		public NodeDoubleLinkedList() {
			this.head = null;
			this.tail = null;
		}

// 		如果新加一个node.放到双向链表的尾部
		public void addNode(Node<V> newNode) {
			if (newNode == null) {
				return;
			}
			if (this.head == null) {
				this.head = newNode;
				this.tail = newNode;
			} else {
				this.tail.next = newNode;
				newNode.last = this.tail;
				this.tail = newNode;
			}
		}

		public void moveNodeToTail(Node<V> node) {
			if (this.tail == node) {
				return;
			}
			if (this.head == node) {
				this.head = node.next;
				this.head.last = null;
			} else {
				node.last.next = node.next;
				node.next.last = node.last;
			}
			node.last = this.tail;
			node.next = null;
			this.tail.next = node;
			this.tail = node;
		}

		public Node<V> removeHead() {
			if (this.head == null) {
				return null;
			}
			Node<V> res = this.head;
			if (this.head == this.tail) {
				this.head = null;
				this.tail = null;
			} else {
				this.head = res.next;
				res.next = null;
				this.head.last = null;·
			}
			return res;
		}

	}

	public static class MyCache<K, V> {
		private HashMap<K, Node<V>> keyNodeMap;
		private HashMap<Node<V>, K> nodeKeyMap;
		private NodeDoubleLinkedList<V> nodeList;
		private int capacity;

		public MyCache(int capacity) {
			if (capacity < 1) {
				throw new RuntimeException("should be more than 0.");
			}
			this.keyNodeMap = new HashMap<K, Node<V>>();
			this.nodeKeyMap = new HashMap<Node<V>, K>();
			this.nodeList = new NodeDoubleLinkedList<V>();
			this.capacity = capacity;
		}

		public V get(K key) {
			if (this.keyNodeMap.containsKey(key)) {
				Node<V> res = this.keyNodeMap.get(key);
				this.nodeList.moveNodeToTail(res);
				return res.value;
			}
			return null;
		}

		public void set(K key, V value) {
			if (this.keyNodeMap.containsKey(key)) {
				Node<V> node = this.keyNodeMap.get(key);
				node.value = value;
				this.nodeList.moveNodeToTail(node);
			} else {
				Node<V> newNode = new Node<V>(value);
				this.keyNodeMap.put(key, newNode);
				this.nodeKeyMap.put(newNode, key);
				this.nodeList.addNode(newNode);
				if (this.keyNodeMap.size() == this.capacity + 1) {
					this.removeMostUnusedCache();
				}
			}
		}

		private void removeMostUnusedCache() {
			Node<V> removeNode = this.nodeList.removeHead();
			K removeKey = this.nodeKeyMap.get(removeNode);
			this.nodeKeyMap.remove(removeNode);
			this.keyNodeMap.remove(removeKey);
		}

	}

	public static void main(String[] args) {
		MyCache<String, Integer> testCache = new MyCache<String, Integer>(3);
		testCache.set("A", 1);
		testCache.set("B", 2);
		testCache.set("C", 3);
		System.out.println(testCache.get("B"));
		System.out.println(testCache.get("A"));
		testCache.set("D", 4);
		System.out.println(testCache.get("D"));
		System.out.println(testCache.get("C"));

	}

}
 */

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.last = null;    // 上一个指针
        this.next = null;    // 下一个指针
    }
}

// 双向链表
class NodeDoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // 新建一个node到双向链表的尾部
    addNode(node) {
        if (node === null) {
            return;
        }
        if (this.head === null) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            node.last = this.tail;
            this.tail = node;
        }
    }

//    移动节点到双向链表的尾部
    moveNodeToTail(node) {
        if (this.tail === node) {
            return;
        }
        // node 是头节点
        if (this.head === node) {
            this.head = this.head.next;
            this.head.last = null;
        } else {
            node.last.next = node.next;
            node.next.last = node.last;
        }
        node.last = this.tail;
        node.next = null;
        this.tail.next = node;
        this.tail = node;
    }

    removeHead() {
        if (this.head === null) {
            return null;
        }
        const res = this.head;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = res.next;
            res.next = null;
            this.head.last = null;
        }
        return res;
    }
}

class MyCache {
    constructor(capacity) {
        this.keyNodeMap = new Map();
        this.nodeList = new NodeDoubleLinkedList();
        this.capacity = capacity;
    }

    get(key) {
        if (this.keyNodeMap.has(key)) {
            const res = this.keyNodeMap.get(key);
            this.nodeList.moveNodeToTail(res);
            return res.value;
        }
        return null;
    }

    set(key, value) {
        if (this.keyNodeMap.has(key)) {
            const node = this.keyNodeMap.get(key);
            node.value = value;
            this.nodeList.moveNodeToTail(node);
        } else {
            const newNode = new Node(key, value);
            this.keyNodeMap.set(key, newNode);
            this.nodeList.addNode(newNode);
            if (this.keyNodeMap.size === this.capacity + 1) {
                this.__removeMostUnusedCache();
            }
        }
    }

    // 移除最不常使用的cache
    __removeMostUnusedCache() {
        const head = this.nodeList.removeHead();
        this.keyNodeMap.delete(head.key);
    }
}


function run() {
    const cache = new MyCache(3);

    cache.set("A", 1);
    cache.set("B", 2);
    cache.set("C", 3);
    console.log(cache.get("B"));
    console.log(cache.get("A"));

    cache.set("D", 4);
    console.log(cache.get("D"));
    console.log(cache.get("C"));

}

// B->A->D
//
run();
