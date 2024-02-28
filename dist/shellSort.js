"use strict";
function shell_sort(data, reverse = false) {
    const n = data.length;
    let interval = Math.floor(n / 2);
    while (interval > 0) {
        for (let i = interval; i < n; i++) {
            const currentKey = data[i];
            let k = i;
            while (k >= interval && data[k - interval] > currentKey) {
                data[k] = data[k - interval];
                k -= interval;
            }
            data[k] = currentKey;
        }
        interval = Math.floor(interval / 2);
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
