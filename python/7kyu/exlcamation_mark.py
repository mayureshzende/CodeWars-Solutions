def remove(s):
    
    ret_str = s.replace('!', "")
    count = 0 
    for c in s:
        if c == "!":
            count += 1

    return ret_str + ("!" * count)

print(remove("Hi!"))

print(remove("Hi! Hi! Hi!") , "Hi Hi Hi!!!")