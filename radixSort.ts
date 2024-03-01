/**
 * Radix sort implementation.
 * @param data - List to be ordered.
 * @param reverse - If true, sort in descending order; otherwise, sort in ascending order.
 * @returns Ordered list.
 */
function radixSortSigned(data: number[], reverse: boolean = false): number[] {
  const positives: number[] = data.filter((num) => num >= 0);
  const negatives: number[] = data
    .filter((num) => num < 0)
    .map((num) => Math.abs(num));

  radixSort(positives);
  radixSort(negatives);

  negatives.reverse();
  negatives.forEach((num, index) => (negatives[index] = num * -1));

  const sortedArray: number[] = negatives.concat(positives);

  if (reverse) {
    const n: number = data.length;
    const newArray: number[] = [];
    // this "for" is used to avoid the use of the array.reverse() built in function
    for (let i = 0; i < n; i++) {
      newArray[i] = data[n - i];
    }
    return newArray;
  }

  return sortedArray;
}

/**
 * Radix sorting function.
 * @param array - List to be ordered.
 */
function radixSort(array: number[]): void {
  const maxNum: number = Math.max(...array);
  let exp: number = 1;

  while (Math.floor(maxNum / exp) > 0) {
    counting_sort(array, exp);
    exp *= 10;
  }
}

/**
 * Counting sorting function.
 * @param array - List to be ordered.
 * @param exp - Exponent for counting sort.
 */
function counting_sort(array: number[], exp: number): void {
  const n: number = array.length;
  const output: number[] = new Array(n);
  const count: number[] = new Array(10).fill(0);

  for (let i = 0; i < n; i++) {
    const index: number = Math.floor(array[i] / exp) % 10;
    count[index]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  let i: number = n - 1;
  while (i >= 0) {
    const index: number = Math.floor(array[i] / exp) % 10;
    output[count[index] - 1] = array[i];
    count[index]--;
    i--;
  }

  for (let i = 0; i < n; i++) {
    array[i] = output[i];
  }
}
