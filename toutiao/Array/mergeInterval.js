/**
 *  public let[][] merge(let[][] intervals) {
        List<let[]> res = new ArrayList<>();
        if (intervals.length == 0 || intervals == null) return res.toArray(new let[0][]);
        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
        let i = 0;
        while (i < intervals.length) {
            let left = intervals[i][0];
            let right = intervals[i][1];
            while (i < intervals.length - 1 && intervals[i + 1][0] <= right) {
                i++;
                right = Math.max(right, intervals[i][1]);
            }
            res.add(new let[]{left, right});
            i++;
        }
        return res.toArray(new let[0][]);
    }
 **/

function mergeInterval(intervals) {
    const res = []
    intervals.sort((a, b) => a[0] - b[0]);
    let i = 0;
    while (i < intervals.length) {
        let left = intervals[i][0];
        let right = intervals[i][1];
        while (i < intervals.length - 1 && intervals[i + 1][0] <= right) {
            i++;
            right = Math.max(right, intervals[i][1]);
        }
        res.push({left, right});
        i++;
    }
    console.log(res)
}

let a = [[1,3],[2,6],[8,10],[15,18]]
console.log(mergeInterval(a))
