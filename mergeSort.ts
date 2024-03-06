/**
 * Merge sort implementation.
 * @param data - List to be ordered.
 * @param reverse - If true, sort in descending order; otherwise, sort in ascending order.
 * @returns Ordered list.
 */
function mergeSort(data: number[], reverse: boolean = false): number[] {
  if (data.length > 1) {
    const mid: number = Math.floor(data.length / 2);
    const leftHalf: number[] = data.slice(0, mid);
    const rightHalf: number[] = data.slice(mid);

    mergeSort(leftHalf, reverse);
    mergeSort(rightHalf, reverse);

    let i: number = 0;
    let j: number = 0;
    let k: number = 0;

    while (i < leftHalf.length && j < rightHalf.length) {
      if (
        (reverse && leftHalf[i] > rightHalf[j]) ||
        (!reverse && leftHalf[i] < rightHalf[j])
      ) {
        data[k] = leftHalf[i];
        i++;
      } else {
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
      const n: number = data.length;
      const newArray: number[] = [];
      // this "for" is used to avoid the use of the array.reverse() built in function
      for (let i = 0; i < n; i++) {
        newArray[i] = data[n - i];
      }
      return newArray;
    }
  }

  return data;
}
