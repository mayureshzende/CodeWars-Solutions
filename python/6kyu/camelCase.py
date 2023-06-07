"""
camelCase 1: The first letter of each word should be capitalized. 
              Except for the first word.

Example: "Hello world"  -->  "helloWorld"

camelCase 2: The last letter of each word should be capitalized. 
              Except for the last word. 

Example: "Hello world"  -->  "hellOworld"

camelCase 3: The first and last letters of each word should be capitalized. 
              Except for the first and lasts letter of sentence. 

Example: "Hello world"  -->  "hellOWorld" 
"""

def toCamelCase(s,n):
    # good luck
    words = s.split(" ")
    s = ""
    
    if n == 1:
        s = for_one(words)
    elif n == 2:
        s= for_two(words)
    else:
        s= for_three(words)
    return s


def for_one(w):
    s = ''
    for c in range(1,len(w)):
        s += w[c][0].upper() + w[c][1::].lower()

    
    return ''.join(w[0].lower()) + s
           

def for_two(w):
    s = ''
    for c in range(0,len(w) - 1):
        s +=  w[c][0:-1:].lower() + w[c][-1].upper()

    
    return s + ''.join(w[-1].lower()) 

def for_three(w):
    s = ''
    first = w[0][0].lower() + w[0][1:-1:].lower()  + w[0][-1].upper()
    last = w[-1][0].upper() + w[-1][1:-1:].lower() + w[-1][-1].lower()
    for c in range(1,len(w) - 1):
        s += w[c][0].upper() + w[c][1:-1:].lower() + w[c][-1].upper()
    return first + s + last

print(toCamelCase("hello world",1) , "helloWorld")
print(toCamelCase("hello world",2) , "hellOworld")
print(toCamelCase("hello world",3) , "hellOWorld")
print(toCamelCase("Hello world",1) , "helloWorld")
print(toCamelCase("Each number plus one",1) , "eachNumberPlusOne")
print(toCamelCase("Each number plus one",2) , "eacHnumbeRpluSone")
print(toCamelCase("Each number plus one",3) , "eacHNumbeRPluSOne")