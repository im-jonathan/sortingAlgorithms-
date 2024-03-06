
/**
 * Sorts the input array using the selection sort algorithm.
 *
 * @param {number[]} data - the array to be sorted
 * @param {boolean} reverse - flag to indicate whether to return the sorted array in reverse order
 * @return {number[]} the sorted array
 */
function selectionSort(data: number[], reverse: boolean = false): number[] {
  const n: number = data.length;

  for (let i = 0; i < n; i++) {
    let minIndex: number = i;

    for (let j = i + 1; j < n; j++) {
      if (data[j] < data[minIndex]) {
        minIndex = j;
      }
    }

    [data[i], data[minIndex]] = [data[minIndex], data[i]];
  }

  if (reverse) {
    let newArray: number[] = [];
    // this "for" is used to avoid the use of the array.reverse() built in function
    for (let i = 0; i < n; i++) {
      newArray[i] = data[n - i];
    }
    return newArray;
  }

  return data;
}
