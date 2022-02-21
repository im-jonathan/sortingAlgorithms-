"""Bubble sort implementation."""

def bubble_sort(data: list, reverse: bool = False) -> list:
    """Bubble sorting function.
    Args:
        data (list): list to be ordered.
        reverse (bool, optional): ascending(False) or descending(True) order. Defaults to False.
    Returns:
        list: ordered list.
    """
    n = len(data)
    # 1st loop goes through the list as many times as there are elements
    for i in range(n):
        swap = False
        for j in range(n-i-1):
            if data[j] > data[j + 1]:
                data[j], data[j + 1] = data[ j + 1], data[j]
                swap = True
        if not swap:
            break
    if reverse:
        data = data[::-1]
    return data
