"""Quick sort implementation."""


def quick_sort(data: list, reverse: bool = False):
    """Quick sorting function.
    Args:
        data (list): list to be ordered.
        reverse (bool, optional): ascending(False) or descending(True) order. Defaults to False.
    Returns:
        list: ordered list.
    """
    if len(data) <= 1:
        return data
    pivot = data[len(data) // 2]
    left = [x for x in data if x < pivot]
    middle = [x for x in data if x == pivot]
    right = [x for x in data if x > pivot]

    if reverse:
        return quick_sort(right)[::-1] + middle[::-1] + quick_sort(left)[::-1]

    return quick_sort(left) + middle + quick_sort(right)
