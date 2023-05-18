"""
In this exercise, you will have to create a function named tiyFizzBuzz. This function will take on a string parameter and will return that string with some characters replaced, depending on the value:

If a letter is a upper case consonants, replace that character with "Iron".
If a letter is a lower case consonants or a non-alpha character, do nothing to that character
If a letter is a upper case vowel, replace that character with "Iron Yard".
If a letter is a lower case vowel, replace that character with "Yard".
"""

def tiy_fizz_buzz(string):

    if not len(string):
        return ""
    ret_str = ''
 
    for s in string:
        if  s in ["A" , "E" , 'I' , 'O', 'U']:
            ret_str += 'Iron Yard'
        elif s in ['a' , 'e', 'i','o','u']:
            ret_str += "Yard"
        elif s.isupper():
            ret_str += 'Iron'
        else:
            ret_str += s

    return ret_str



# print(tiy_fizz_buzz("A"),"Iron Yard")
# print(tiy_fizz_buzz("a"),"Yard")
print(tiy_fizz_buzz("Hello WORLD!"),"IronYardllYard IronIron YardIronIronIron!")
