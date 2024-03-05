"use strict";
function radixSortSigned(data, reverse = false) {
    const positives = data.filter((num) => num >= 0);
    const negatives = data
        .filter((num) => num < 0)
        .map((num) => Math.abs(num));
    radixSort(positives);
    radixSort(negatives);
    negatives.reverse();
    negatives.forEach((num, index) => (negatives[index] = num * -1));
    const sortedArray = negatives.concat(positives);
    if (reverse) {
        const n = data.length;
        const newArray = [];
        for (let i = 0; i < n; i++) {
            newArray[i] = data[n - i];
        }
        return newArray;
    }
    return sortedArray;
}
function radixSort(array) {
    const maxNum = Math.max(...array);
    let exp = 1;
    while (Math.floor(maxNum / exp) > 0) {
        counting_sort(array, exp);
        exp *= 10;
    }
}
function counting_sort(array, exp) {
    const n = array.length;
    const output = new Array(n);
    const count = new Array(10).fill(0);
    for (let i = 0; i < n; i++) {
        const index = Math.floor(array[i] / exp) % 10;
        count[index]++;
    }
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    let i = n - 1;
    while (i >= 0) {
        const index = Math.floor(array[i] / exp) % 10;
        output[count[index] - 1] = array[i];
        count[index]--;
        i--;
    }
    for (let i = 0; i < n; i++) {
        array[i] = output[i];
    }
}
