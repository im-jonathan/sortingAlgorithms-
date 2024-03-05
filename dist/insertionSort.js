"use strict";
function insertionSort(data, reverse = false) {
    for (let i = 1; i < data.length; i++) {
        const key = data[i];
        let j = i - 1;
        while (j >= 0 && key < data[j]) {
            data[j + 1] = data[j];
            j--;
        }
        data[j + 1] = key;
    }
    if (reverse) {
        const n = data.length;
        const newArray = [];
        for (let i = 0; i < n; i++) {
            newArray[i] = data[n - i];
        }
        return newArray;
    }
    return data;
}
