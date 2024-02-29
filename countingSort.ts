/* Counting sort implementation. */

function countingSort(data: number[], reverse: boolean = false): number[] {
  /**
   * Counting sorting function.
   * Args:
      data number[]: list to be ordered.
        reverse (bool, optional): ascending(False) or descending(True) order. Defaults to False.
    Returns:
        number[]: ordered list.
   */
  const minElement: number = Math.min(...data);
  const maxElement: number = Math.max(...data);
  const rangeOfElements: number = maxElement - minElement + 1;

  const occurrences: number[] = Array(rangeOfElements).fill(0);

  for (const num of data) {
    occurrences[num - minElement]++;
  }

  const sortedArray: number[] = [];
  for (let i = 0; i < occurrences.length; i++) {
    sortedArray.push(...Array(occurrences[i]).fill(i + minElement));
  }

  if (reverse) {
    const newArray: number[] = [];
    // this "for" is used to avoid the use of the array.reverse() built in function
    const n: number = data.length;
    for (let i = 0; i < n; i++) {
      newArray[i] = sortedArray[n - i - 1];
    }
    return newArray;
  }

  return sortedArray;
}
