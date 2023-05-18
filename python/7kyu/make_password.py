"""
One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

instead of including i or I put the number 1 in the password;
instead of including o or O put the number 0 in the password;
instead of including s or S put the number 5 in the password.
Examples:
"Give me liberty or give me death"  --> "Gml0gmd"
"Keep Calm and Carry On"            --> "KCaC0"
"""

def make_password(phrase):

    a = phrase.split(" ")
    password = ''
    for w in a:
        if w[0].lower() == 'i':
            password += '1'
        elif w[0].lower() == 'o':
            password += '0'
        elif w[0].lower() == 's':
            password += '5'
        else:
            password += w[0] 

    return password
