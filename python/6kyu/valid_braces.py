""" 
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False

"""
def test_my_verions(s):

    stack = []
    
    for c in s:
        if s == '(' or s == '{' or s == '[':
            stack.append(c)
        else:
            if len(stack) != 0:
                if stack[-1] == '(' and c == ')':
                    stack.pop()
                if stack[-1] == '[' and c == ']':
                    stack.pop()
                if stack[-1] == '{' and c == '}':
                    stack.pop()
    print(stack)
    return len(stack) == 0



# simple one 
def validBraces_simple(string):
    braces = {"(": ")", "[": "]", "{": "}"}
    stack = []
    for character in string:
        if character in braces.keys():
            stack.append(character)
        else:
            if len(stack) == 0 or braces[stack.pop()] != character:
                return False
    return len(stack) == 0  


#  to slow 
def valid2(s):
    while(len(s)!=0):
        s=s.replace('()','')
        s=s.replace('[]','')
        s=s.replace('{}','')
    if(len(s)==0):
        return True
    else:
        return False

#  not catching every edge case
def valid_braces1(string):
    counter = 0
    ans = False
    opening = set('([{')
    closing = set(')]}')

    print(opening)
    print(closing)
    for s in string:
        if s in opening:
            counter += 1
        if s in closing:
            counter -= 1

    if counter < 0:
        return ans

    if counter == 0:
        return not ans
    return ans 

#  working one 
def valid_braces(string):
    parenthesis = []
    pardict = {"{":"}", "[":"]", "(":")", "}":"{", "]":"[", ")":"("}
    for i in range(len(string)):
        if string[i] == "(" or string[i] == "[" or string[i] == "{":
            parenthesis.append(string[i])
        else:
            if len(parenthesis) == 0:
                return False
            elif pardict[string[i]] == parenthesis[len(parenthesis)-1]:
                del parenthesis[len(parenthesis)-1]
            else:
                return False
    if len(parenthesis) != 0:
        return False
    return True


print(test_my_verions("([{}])"))
print(test_my_verions("()"))
print(test_my_verions("())({}}{()][]["))
# print(valid_braces()
# print(valid_braces()
# print(valid_braces()
# print(valid_braces()
# print(valid_braces()
# print(valid_braces()


def assert_valid(s):
    assert test_my_verions(s) == True
        

def assert_invalid(s):
    assert test_my_verions(s) == False

# tests 
def test_call():
    assert_valid( "()" )
    assert_valid( "[]" )
    assert_valid( "{}" )
    assert_valid( "{}()[]" )
    assert_valid( "([{}])" )
    assert_valid( "(({{[[]]}}))" )
    assert_valid( "{}({})[]" )

    
    assert_invalid( "(}" )
    assert_invalid("[(])")
    assert_invalid( "([}{])" )
    assert_invalid( "(((({{" )
    assert_invalid( ")(}{][" )
    assert_invalid( "())({}}{()][][" )