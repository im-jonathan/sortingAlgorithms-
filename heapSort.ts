/**
 * Sorts an array using the heap sort algorithm.
 *
 * @param {number[]} data - the array to be sorted
 * @param {boolean} reverse - flag to indicate if the array should be sorted in reverse order
 * @return {number[]} the sorted array
 */
function heapSort(data: number[], reverse: boolean = false): number[] {
  const n: number = data.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(data, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [data[i], data[0]] = [data[0], data[i]];
    heapify(data, i, 0);
  }

  if (reverse) {
    const newArray: number[] = [];
    // this "for" is used to avoid the use of the array.reverse() built in function
    for (let i = 0; i < n; i++) {
      newArray[i] = data[n - i];
    }
    return newArray;
  }

  return data;
}

/**
 * Perform heapify operation on the given array.
 *
 * @param {number[]} data - The input array
 * @param {number} n - The size of the heap
 * @param {number} i - The index of the current node
 * @return {void}
 */
function heapify(data: number[], n: number, i: number): void {
  let largest: number = i;
  const leftChild: number = 2 * i + 1;
  const rightChild: number = 2 * i + 2;

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
