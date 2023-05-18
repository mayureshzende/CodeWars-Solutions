def is_sorted_and_how(arr):
    # your code here
    
    asc = None

    if arr == sorted(arr):
        asc = 'yes, ascending'
    elif arr == sorted(arr)[::-1]:
        asc = 'yes, descending'
    else:
        asc = 'no'

    return asc

print(is_sorted_and_how([1, 2]), 'yes, ascending')
print(is_sorted_and_how([15, 7, 3, -8]), 'yes, descending')
print(is_sorted_and_how([4, 2, 30]), 'no')