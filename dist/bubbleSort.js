"use strict";
function bubble_sort(data, reverse = false) {
    const n = data.length;
    for (let i = 0; i < n; i++) {
        let swap = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (data[j] > data[j + 1]) {
                let temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
                swap = true;
            }
        }
        if (!swap) {
            break;
        }
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
