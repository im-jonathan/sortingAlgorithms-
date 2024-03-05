/**
 * Quick sort implementation.
 * @param data - List to be ordered.
 * @param reverse - If true, sort in descending order; otherwise, sort in ascending order.
 * @returns Ordered list.
 */
function quickSort(data: number[], reverse: boolean = false): number[] {
  if (data.length <= 1) {
    return data;
  }

  const pivot: number = data[Math.floor(data.length / 2)];
  const left: number[] = data.filter((x) => x < pivot);
  const middle: number[] = data.filter((x) => x === pivot);
  const right: number[] = data.filter((x) => x > pivot);

  const soerted_array: number[] = quickSort(left).concat(middle, quickSort(right));

  if (reverse) {
    const n: number = data.length;
    const newArray: number[] = [];
    // this "for" is used to avoid the use of the array.reverse() built in function
    for (let i = 0; i < n; i++) {
      soerted_array[i] = data[n - i];
    }
    return newArray;
  }
  return soerted_array;

}
