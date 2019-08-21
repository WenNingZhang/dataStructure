

function run(arr, left, right) {
    if (left == right) {
        return arr[left];
    }

    const mid = Math.floor((left + right) / 2);
    run(arr, left, mid);
    run(arr, mid + 1, right);

    let value = merge(arr, left, mid, right);

    return value
}
let value = 0
function merge(arr, left, mid, right) {
    const help = []
    let n = 0

    let i = left
    let j = mid + 1

    while (i <= mid && j <= right) {
        if (arr[i] < arr[j]) {
            //    添加小和值
            value += (arr[i] * (right - j + 1))
            help[n++] = arr[i++]
        } else {
            help[n++] = arr[j++]
        }
    }

    while (i <= mid) {
        help[n++] = arr[i++];
    }

    while (j <= right) {
        help[n++] = arr[j++];
    }

    //    把 help copy 到 原数组(arr)
    for (let i = 0; i < help.length; i++) {
        arr[i + left] = help[i];
    }

    return value;
}

const arr = [1, 3, 4, 2, 5]

console.log(`${arr} 小和为:`, run(arr, 0, arr.length - 1))