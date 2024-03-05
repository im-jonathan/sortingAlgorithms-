"""Bucket sort implementation."""
from bubbleSort import bubble_sort

def bucket_sort(data: list, reverse: bool = False):
    """Bucket sorting function.
    Args:
        data (list): list to be ordered.
        reverse (bool, optional): ascending(False) or descending(True) order. Defaults to False.
    Returns:
        list: ordered list.
    """
    max_val = max(data)
    min_val = min(data)

    bucket_range = (max_val - min_val + 1) / len(data)
    num_buckets = len(data)

    buckets = [[] for _ in range(num_buckets)]
    for num in data:
        index = int((num - min_val) / bucket_range)
        buckets[index].append(num)

    for bucket in buckets:
        bucket = bubble_sort(bucket)

    sorted_array = [num for bucket in buckets for num in bucket]

    if reverse:
        return sorted_array[::-1]

    return sorted_array
