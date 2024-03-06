"use strict";
function heapSort(data, reverse = false) {
    const n = data.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(data, n, i);
    }
    for (let i = n - 1; i > 0; i--) {
        [data[i], data[0]] = [data[0], data[i]];
        heapify(data, i, 0);
    }
    if (reverse) {
        const newArray = [];
        for (let i = 0; i < n; i++) {
            newArray[i] = data[n - i];
        }
        return newArray;
    }
    return data;
}
function heapify(data, n, i) {
    let largest = i;
    const leftChild = 2 * i + 1;
    const rightChild = 2 * i + 2;
    if (leftChild < n && data[leftChild] > data[largest]) {
        largest = leftChild;
    }
    if (rightChild < n && data[rightChild] > data[largest]) {
        largest = rightChild;
    }
    if (largest !== i) {
        [data[i], data[largest]] = [data[largest], data[i]];
        heapify(data, n, largest);
    }
}
