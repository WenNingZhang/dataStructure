


对于程序员来说，算法和数据数据结构绕不开的，本文另辟蹊径，以图示的方式, 着重说明 二叉查找树(BST)相关的算法，想是可视化的东西更适合联想，记忆。

<h2><a href="http://106.15.231.221:8200/dist/" target="_blank">测试链接</a></h2>

![tree](https://raw.githubusercontent.com/zhangwinning/dataStructure/master/binary-tree/src/js/pic/tree.jpg)


### 主要用到的依赖

- react 
- webpack
- d3 (二叉树的展示图)
- antd


### 具体实现算法包括
+ BST 的所有路径
+ BST 的节点数
+ 如何从小到大打印 BST 节点
+ BST 的高度
+ BST 的最小值
+ BST 的最大值
+ 该二叉树是否为 BST

### 代码结构

![structure](https://raw.githubusercontent.com/zhangwinning/dataStructure/master/binary-tree/src/js/pic/structure.jpg)

+ components目录  （react组件相关代码）
+ logic目录       （BST的数据结构）


### 每个算法的主要逻辑

+ BST 所有路径







写一个弹窗，点击弹窗出来一个框，输入一个数字，为二叉树输入的个数

左侧为该二叉树的信息，包括一系列各种信息


刚刚遇到一个 bug ，定位了好长时间才解决，遂记录下来

```
let paths = []
function getPathLib(trees, path = [], pathLen = 0) {
    if (!trees) return null

    path[pathLen] = trees.element
    pathLen++

    if (trees.left === null && trees.right === null) {

        paths.push(path)

    } else {

        getPathLib(trees.left, [...path], pathLen)
        getPathLib(trees.right, [...path], pathLen)

    }
}


function getPath (trees) {
    return getPathLib(trees)
}
```

以上代码是 获取ADT路径 算法，在函数外部定义了一个 变量，结果返回的路径都是从开始到
这次路径总数的叠加

比如：
第一次输入 任意数生成的路径是 [1,2,3,4],[1,2,3,5]

第二次输入 任意数时生成的路径 也会 把 上面的路径添加进去

百思不得其解

后来改成以下这样，就可以了


```$xslt
function getPath(trees) {

    let paths = []
    getPathLib(trees)

    function getPathLib (trees, path = [], pathLen = 0)  {
        if (!trees) return null

        path[pathLen] = trees.element
        pathLen++

        if (trees.left === null && trees.right === null) {

            paths.push(path)

        } else {

            getPathLib(trees.left, [...path], pathLen)
            getPathLib(trees.right, [...path], pathLen)

        }
    }

    return paths
}
```

原因我认为 第一次 require 时，会初始化一个全局变量，第二次调用生成路径函数时，就不会初始化这个函数了，好像是在内存中直接取，就不会初始化这个函数了，因而

会出现路径叠加的情况，

改正后，每次调用函数时就 初始化变量，就 ok 了.


最后 npm build 进行打包成一个文件，然后放到docker 进行部署就行了
