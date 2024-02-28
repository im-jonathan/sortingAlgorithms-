/* Shell sort implementation. */

function shell_sort(data: number[], reverse: boolean=false): number[] {
  /**
   * Shell sorting function.
   * Args:
      data number[]: list to be ordered.
        reverse (bool, optional): ascending(False) or descending(True) order. Defaults to False.
    Returns:
        number[]: ordered list.
   */
  const n: number = data.length;
  let interval: number = Math.floor(n / 2);
  while (interval > 0) {
    for (let i: number = interval; i < n; i++) {
      const currentKey: number = data[i];
        let k: number = i;
        while (k >= interval && data[k - interval] > currentKey) {
          data[k] = data[k - interval];
          k -= interval;
        }
        data[k] = currentKey;
    }
    interval = Math.floor(interval / 2);
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
