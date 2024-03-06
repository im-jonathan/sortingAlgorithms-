"""Merge sort implementation."""

def merge_sort(data: list, reverse: bool = False) -> list:
    """Merge sorting function.
    Args:
        data (list): list to be ordered.
        reverse (bool, optional): ascending(False) or descending(True) order. Defaults to False.
    Returns:
        list: ordered list.
    """
    if len(data) > 1:
        mid = len(data) // 2
        left_half = data[:mid]
        right_half = data[mid:]

        merge_sort(left_half, reverse)
        merge_sort(right_half, reverse)

        i, j, k = 0, 0, 0

        while i < len(left_half) and j < len(right_half):
            if (not reverse and left_half[i] < right_half[j]) or (reverse and left_half[i] > right_half[j]):
                data[k] = left_half[i]
                i += 1
            else:
                data[k] = right_half[j]
                j += 1
            k += 1

        while i < len(left_half):
            data[k] = left_half[i]
            i += 1
            k += 1

        while j < len(right_half):
            data[k] = right_half[j]
            j += 1
            k += 1
    if reverse:
        return data[::-1]

    return data
