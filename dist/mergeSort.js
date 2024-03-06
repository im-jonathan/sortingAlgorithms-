"use strict";
function mergeSort(data, reverse = false) {
    if (data.length > 1) {
        const mid = Math.floor(data.length / 2);
        const leftHalf = data.slice(0, mid);
        const rightHalf = data.slice(mid);
        mergeSort(leftHalf, reverse);
        mergeSort(rightHalf, reverse);
        let i = 0;
        let j = 0;
        let k = 0;
        while (i < leftHalf.length && j < rightHalf.length) {
            if ((reverse && leftHalf[i] > rightHalf[j]) ||
                (!reverse && leftHalf[i] < rightHalf[j])) {
                data[k] = leftHalf[i];
                i++;
            }
            else {
                data[k] = rightHalf[j];
                j++;
            }
            k++;
        }
        while (i < leftHalf.length) {
            data[k] = leftHalf[i];
            i++;
            k++;
        }
        while (j < rightHalf.length) {
            data[k] = rightHalf[j];
            j++;
            k++;
        }
        if (reverse) {
            const n = data.length;
            const newArray = [];
            for (let i = 0; i < n; i++) {
                newArray[i] = data[n - i];
            }
            return newArray;
        }
    }
    return data;
}
