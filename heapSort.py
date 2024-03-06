"""Heap sort implementation."""

def heap_sort(data: list, reverse: bool = False) -> list:
    """Heap sorting function.

    Args:
        data (list): list to be ordered.
        reverse (bool, optional): ascending(False) or descending(True) order. Defaults to False.

    Returns:
        list: ordered list.
    """
    n = len(data)

    for i in range(n // 2 - 1, -1, -1):
        heapify(data, n, i)

    for i in range(n - 1, 0, -1):
        data[i], data[0] = data[0], data[i]
        heapify(data, i, 0)

    if reverse:
        return data[::-1]
    return data

def heapify(data: list, n: int, i: int) -> None:
    """Heapify a subtree rooted at index i.

    Args:
        data (list): list to be ordered.
        n (int): size of the heap.
        i (int): index of the root of the subtree to be heapified.

    Returns:
        None
    """
    largest = i
    left_child = 2 * i + 1
    right_child = 2 * i + 2

    if left_child < n and data[left_child] > data[largest]:
        largest = left_child

    if right_child < n and data[right_child] > data[largest]:
        largest = right_child

    if largest != i:
        data[i], data[largest] = data[largest], data[i]
        heapify(data, n, largest)
