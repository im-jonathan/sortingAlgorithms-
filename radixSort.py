""" Radix sort implementation. """

def radix_sort_signed(data: list, reverse: bool = False) -> list:
    """
    Args:
        data (list): list to be ordered.
        reverse (bool, optional): ascending(False) or descending(True) order. Defaults to False.
    Returns:
        list: ordered list.
    """
    positives = [num for num in data if num >= 0]
    negatives = [abs(num) for num in data if num < 0]

    radix_sort(positives)
    radix_sort(negatives)

    negatives = negatives[::-1]
    negatives = [num * (-1) for num in negatives]

    sorted_array = negatives + positives

    if reverse:
        sorted_array = sorted_array[::-1]
    return sorted_array

def radix_sort(array: list):
    """Radix sorting function.
    Args:
        array (list): list to be ordered.
    Returns:
        list: ordered list.
    """
    max_num = max(array)
    exp = 1

    while max_num // exp > 0:
        counting_sort(array, exp)
        exp *= 10

def counting_sort(array, exp):
    """determine the count of the occurrences of each array element, which we calculate using the current exponent.
    Args:
        array (list): list to be ordered.
    Returns:
        list: ordered list.
    """
    n = len(array)
    output = [0] * n
    count = [0] * 10

    for i in range(n):
        index = array[i] // exp
        count[index % 10] += 1

    for i in range(1, 10):
        count[i] += count[i - 1]

    i = n - 1
    while i >= 0:
        index = array[i] // exp
        output[count[index % 10] - 1] = array[i]
        count[index % 10] -= 1
        i -= 1

    for i in range(n):
        array[i] = output[i]
