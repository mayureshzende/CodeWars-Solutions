def next_letter(s):
    
    res = ''
    for c in s:
        asci = ord(c)
        if c == 'z':
            res += 'a'
        elif c == 'Z':
            res += 'A'
        else:
            if (asci >= 97 and asci <= 122) or (asci >= 65 and asci <= 90):
                res += chr(asci+ 1)
            else:
                res += c
    return res


print(next_letter("Hello"), "Ifmmp")
print(next_letter("What is your name?"), "Xibu jt zpvs obnf?")
print(next_letter("zOo"), "aPp")