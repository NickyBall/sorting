const mergeSort = arr => {
    if (arr.length < 2) return arr;
    const mid = Math.floor(arr.length / 2);
    const l = mergeSort(arr.slice(0, mid));
    const r = mergeSort(arr.slice(mid, arr.length));
    return merge(l, r);
}

const merge = (l, r) => {
    const sorted = [];
    while (l.length && r.length) {
        sorted.push(l[0] < r[0] ? l.shift() : r.shift());
    }
    return sorted.concat(l.length ? l : r);
}

let result = mergeSort([5, 1, 4, 2, 3]); // [1, 2, 3, 4, 5]
console.log(result);