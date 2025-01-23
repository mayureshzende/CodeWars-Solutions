"""
String.eachChar()
In ruby you can add something after each character in a string like so:

"hello".each_char {|c| print c, ' ' } -> "h e l l o " 
In the spirit of polymorphism, our eachChar method will allow one of two arguments, a callback function or a string. If a string is presented, it will be added after each character of the original string and return the new string. If a function is presented, it will perform a manipulation of each character in the string.

Example:

each_char("hello"," ")
-> "h e l l o "

def func(c):
    return 'L' if c=='l' else c
    
each_char("hello all", func)
-> "heLLo aLL"

"""

def each_char(string, arg):
    res = ''
    if callable(arg):
        for i in string:
            res += arg(i)
        return res
    else:
        for i in string:
            res += (i+ arg)
    return res

