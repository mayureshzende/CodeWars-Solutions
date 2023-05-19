def grid(N):
    if N < 0: 
        return None
    res = ""
    for i in range(N ):
        a_arr = []
        for j in range(N ):
            a_arr.append(chr(97 + ( (i + j )% 26 )))
        res += ' '.join(a_arr)
        res += '\n'
    return res.strip()


print(grid(40))