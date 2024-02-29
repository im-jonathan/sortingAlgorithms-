"use strict";
function countingSort(data, reverse = false) {
    const minElement = Math.min(...data);
    const maxElement = Math.max(...data);
    const rangeOfElements = maxElement - minElement + 1;
    const occurrences = Array(rangeOfElements).fill(0);
    for (const num of data) {
        occurrences[num - minElement]++;
    }
    const sortedArray = [];
    for (let i = 0; i < occurrences.length; i++) {
        sortedArray.push(...Array(occurrences[i]).fill(i + minElement));
    }
    if (reverse) {
        const newArray = [];
        const n = data.length;
        for (let i = 0; i < n; i++) {
            newArray[i] = sortedArray[n - i - 1];
        }
        return newArray;
    }
    return sortedArray;
}
