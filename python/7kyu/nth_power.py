def modified_sum(a, n):

    arr_sum = 0
    
    for i in a:
        arr_sum += (i ** n)
    return arr_sum - sum(a)


print(modified_sum([1, 2, 3], 3), 30)
print(modified_sum([1, 2], 5), 30)