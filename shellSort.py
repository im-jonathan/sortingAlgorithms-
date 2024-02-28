"""Shell sort implementation."""

def shell_sort(data: list, reverse: bool=False) -> list:
    """Shell sorting function.

    Args:
        data (list): list to be ordered.
        reverse (bool, optional): ascending(False) or descending(True) order. Defaults to False.

    Returns:
        list: ordered list.
    """
    n = len(data)
    interval = n // 2
    while interval > 0:
        for i in range(interval, n):
            current_key = data[i]
            k = i
            while k >= interval and data[k - interval] > current_key:
                data[k] = data[k - interval]
                k -= interval
            data[k] = current_key
        interval //= 2
    if reverse:
        data = data[::-1]
    return data

