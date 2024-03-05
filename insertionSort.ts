/**
 * Insertion sort implementation.
 * @param data - List to be ordered.
 * @param reverse - If true, sort in descending order; otherwise, sort in ascending order.
 * @returns Ordered list.
 */
function insertionSort(data: number[], reverse: boolean = false): number[] {
  for (let i = 1; i < data.length; i++) {
    const key: number = data[i];
    let j: number = i - 1;

    while (j >= 0 && key < data[j]) {
      data[j + 1] = data[j];
      j--;
    }

    data[j + 1] = key;
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

  return data;
}
