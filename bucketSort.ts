import { bubble_sort } from "./bubbleSort";

/**
 * Bucket sort implementation
 * @param data - List to be ordered.
 * @param reverse - If true, sort in descending order; otherwise, sort in ascending order.
 * @returns Ordered list.
 */
function bucketSort(data: number[], reverse: boolean = false): number[] {
  const maxVal: number = Math.max(...data);
  const minVal: number = Math.min(...data);

  const bucketRange: number = (maxVal - minVal + 1) / data.length;
  const numBuckets: number = data.length;

  const buckets: number[][] = Array.from({ length: numBuckets }, () => []);

  for (const num of data) {
    const index: number = Math.floor((num - minVal) / bucketRange);
    buckets[index].push(num);
  }

  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = bubble_sort(buckets[i]);
  }

  const sortedArray: number[] = buckets.flat();

  if (reverse) {
    return sortedArray.reverse();
  }

  return sortedArray;
}
