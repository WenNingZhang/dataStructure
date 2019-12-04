
// 还没仔细看

function getPermutation(n, k) {
    let nums = '';
    for (let i = 1; i <= n; i++) {
        nums += i;
    }
    let factor = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
    let answer = "";
    let interval = n;
    let loop_times = n;

    for (let i = 0; i < loop_times; ++i) {
        --n;
        interval = (k - 1) / factor[n];
        answer += nums.charAt(interval);
        nums = nums.slice(0, interval) + nums.slice(interval + 1, nums.length);
        k = k - interval * factor[n];
    }
    return answer;
}

let n = 3;
let k = 3;

console.log(getPermutation(n, k));
