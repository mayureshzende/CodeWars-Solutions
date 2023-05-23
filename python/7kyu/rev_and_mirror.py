"""
Given 2 string parameters, show a concatenation of:

the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
a separator in between both strings: @@@
the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER 
"""

def rev_and_covertCase(s):
    res = ''
    for c in s:
        if c.isupper():
            res += c.lower()
        else:
            res += c.upper()
    return res

def reverse_and_mirror(s1, s2):

    t_s1 = rev_and_covertCase(s1) 
    t_s2 = rev_and_covertCase(s2)

    # print(t_s1[::-1] , "  - - - -  ", t_s2[::-1])
    return f'{t_s2[::-1]}@@@{t_s1[::-1]}{t_s1}'


print(reverse_and_mirror('FizZ', 'buZZ'), 'zzUB@@@zZIffIZz')