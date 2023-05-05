def is_odd_heavy(arr):
    if not len(arr):
        return  False
    odd = []
    even = []

    for ele in arr:
        if ele % 2 == 0:
            even.append(ele)
        else:
            odd.append(ele)

    
    if not len(even):
        return True
    
    if not len(odd) :
        return False
    
    if len(even):
        max_even = max(even)
    
    for i,ele in enumerate(odd):
        if max_even > odd[i]:
            return False
    
    return True