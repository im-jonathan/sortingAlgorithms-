"use strict";
function selectionSort(data, reverse = false) {
    const n = data.length;
    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (data[j] < data[minIndex]) {
                minIndex = j;
            }
        }
        [data[i], data[minIndex]] = [data[minIndex], data[i]];
    }
    if (reverse) {
        let newArray = [];
        for (let i = 0; i < n; i++) {
            newArray[i] = data[n - i];
        }
        return newArray;
    }
    return data;
}
