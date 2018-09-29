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


