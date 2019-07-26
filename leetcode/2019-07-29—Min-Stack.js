/**
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 

Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.

 */

/**
 * initialize your data structure here.
 */
// one stack store common element,the other stack store min element 
var MinStack = function() {
    this.stack = []     // store stack element
    this.next = 0       //  1、add next element size 2、stack size
    this._minStack =[]   // store min stack element 
    this._minNext = 0    //
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack[this.next++] = x
    if (this._minNext === 0) {
        this._minStack[this._minNext++] = x
    } else {
        const min = this.getMin() < x ? this.getMin() : x
        this._minStack[this._minNext++] = min
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
        this.stack[--this.next]
        this._minStack[--this._minNext]
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.next-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this._minStack[this._minNext-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

let minStack = new MinStack()
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());   //--> Returns -3.
minStack.pop();
console.log(minStack.top());      //--> Returns 0.
console.log(minStack.getMin());   //--> Returns -2.

// console.log('===>', minStack)