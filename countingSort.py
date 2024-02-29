"""Counting sort implementation."""

def counting_sort(data: list, reverse: bool = False) -> list:
    """Counting sorting function.
    Args:
        data (list): list to be ordered.
        reverse (bool, optional): ascending(False) or descending(True) order. Defaults to False.
    Returns:
        list: ordered list.
    """
    min_element = min(data)
    max_element = max(data)
    range_of_elements = max_element - min_element + 1

    occurrences = [0] * range_of_elements

    for num in data:
        occurrences[num - min_element] += 1

    sorted_array = []
    for i, count in enumerate(occurrences):
        sorted_array.extend([i + min_element] * count)

    if reverse:
        sorted_array = sorted_array[::-1]
    return sorted_array

# Test array
test_array =  [12, 47, -46, 28, 35, 30, 69, -100, 38, -52, 44, -3, 33, -34, -94, 58, 32, -74, -40, 27, -75, 57, 16, -27, 82, 65, -77, -6, 98, -28, -22, 3, 91, 40, 11, -44, -67, -72, -90, -35, 14, -16, 49, -11, -66, 13, 46, 77, -58, 53]
sorted_array = counting_sort(test_array, True)
print(sorted_array)

if (value.Lenght >= minLenght) {
    return true
}
return false
