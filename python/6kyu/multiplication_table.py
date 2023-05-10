def multiplication_table(size):
    table = []
    for i in range(size):
        table.append([])
        for j in range(size):
            table[i].append(( j + 1) * (i + 1))
            
    return table


print(multiplication_table(3))


"""
1 2 3
2 4 6
3 6 9
"""