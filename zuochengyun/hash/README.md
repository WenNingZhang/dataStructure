### hash函数|hash表

#### hash 函数中 add/push/delete/update 时间复杂度都是 O(1)。
在 java 中 jvm 可以通过离线扩容的方式进行hash 函数的扩容

1、只用 2G 内存在 20亿个整数中找到出现次数最多的数

2、RandomPool 结构
设计一种结构，该结构有如下三个功能
    1、insert(key):将某个 key 加入到该结构，做到不重复加入。
    2、delete(key):将原本在结构中的某个 key 删除
    3、getRandom(): 等概率随机返回结构中的任何一个key。

    要求:insert、delete、getRandom时间复杂度都是 O(1)

[code](./randomPool.js)

3、布隆过滤器



