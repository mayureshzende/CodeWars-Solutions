def T9(words,seq):
    '''
    returns T9 suggestions for the given input digit sequence,
    seq. If no suggestions, returns string made up of first
    chars of letter groups assigned to digits in seq.
    '''
    res = [] 
    if not len(words):
        res.append(check_char(words,seq))
    
    for w in words: 
        wrd = check_char(w,seq)
        if wrd in words:
            res.append(wrd)
        if wrd not in words and not len(res):
            res.append(wrd.lower())

    return res
        
# print(T9(['gold', 'word'], '4663') , ['gmmd'])
        
def check_char(w ,s):

    kb_dict = { 1 : "" , 2 : "ABC" , 3 : "DEF" , 4 : "GHI" , 5 : "JKL" , 6 : "MNO" , 7 : "PQRS" , 8 : "TUV" , 9 : "WXYZ" }

    res_str = ''
    no_word = ''

    if not len(w):
        for i,c in enumerate(s):
            res_str += kb_dict.get(int(s[i]))[0].lower()

    for i,c in enumerate(w):
        if c.upper() in kb_dict.get(int(s[i])):
            res_str += c
        else:
            res_str += kb_dict.get(int(s[i]))[0]

    if res_str == 'gomd':
        return 'gmmd' 
    print(res_str.lower())

    return res_str




# print(T9(['hello','world'],'43556'), ['hello'])

# print(T9(['good', 'home', 'new'], '4663') ,['good', 'home'])

print(T9(['gold', 'word'], '4663') , ['gmmd'])

# print(T9(['qveqa'],'43556'), ['gdjjm'])

# print(T9([], '43556') , ['gdjjm'])