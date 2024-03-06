"""Selection sort implementation."""

def selection_sort(data: list, reverse: bool = False):
    """Bucket sorting function.
    Args:
        data (list): list to be ordered.
        reverse (bool, optional): ascending(False) or descending(True) order. Defaults to False.
    Returns:
        list: ordered list.
    """
    n = len(data)
    for i in range(n):
        min_index = i

        for j in range(i + 1, n):
            if data[j] < data[min_index]:
                min_index = j

        data[i], data[min_index] = data[min_index], data[i]

    if reverse:
        return data[::-1]
    return data
