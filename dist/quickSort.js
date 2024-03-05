"use strict";
function quickSort(data, reverse = false) {
    if (data.length <= 1) {
        return data;
    }
    const pivot = data[Math.floor(data.length / 2)];
    const left = data.filter((x) => x < pivot);
    const middle = data.filter((x) => x === pivot);
    const right = data.filter((x) => x > pivot);
    const soerted_array = quickSort(left).concat(middle, quickSort(right));
    if (reverse) {
        const n = data.length;
        const newArray = [];
        for (let i = 0; i < n; i++) {
            soerted_array[i] = data[n - i];
        }
        return newArray;
    }
    return soerted_array;
}
