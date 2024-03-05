"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bubbleSort_1 = require("./bubbleSort");
function bucketSort(data, reverse = false) {
    const maxVal = Math.max(...data);
    const minVal = Math.min(...data);
    const bucketRange = (maxVal - minVal + 1) / data.length;
    const numBuckets = data.length;
    const buckets = Array.from({ length: numBuckets }, () => []);
    for (const num of data) {
        const index = Math.floor((num - minVal) / bucketRange);
        buckets[index].push(num);
    }
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = (0, bubbleSort_1.bubble_sort)(buckets[i]);
    }
    const sortedArray = buckets.flat();
    if (reverse) {
        return sortedArray.reverse();
    }
    return sortedArray;
}
