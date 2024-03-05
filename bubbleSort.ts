/* Bubble sort implementation. */

function bubble_sort(data: number[], reverse: boolean=false): number[] {
  /**
   * Bubble sorting function.
   * Args:
      data number[]: list to be ordered.
        reverse (bool, optional): ascending(False) or descending(True) order. Defaults to False.
    Returns:
        number[]: ordered list.
   */
  const n: number = data.length;
  for (let i = 0; i < n; i++) {
    let swap: boolean = false;
    for (let j = 0; j < n-i-1; j++) {
      if (data[j] > data[j + 1]) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
        swap = true;
      }
    }
    if (!swap) {
      break
    }
  }
  if (reverse) {
    let newArray: number[] = [];
    // this "for" is used to avoid the use of the array.reverse() built in function
    for (let i = 0; i < n; i++) {
      newArray[i] = data[n - i];
    }
    return newArray;
  }
  return data
}

export { bubble_sort }
