"""
The characters of Chima need your help. Their weapons got mixed up! They need you to write a program that accepts the name of a character in Chima then tells which weapon he/she owns.

For example: for the character "Laval" your program should return the solution "Laval-Shado Valious"

You must complete the following character-weapon pairs:

Laval-Shado Valious,
Cragger-Vengdualize,
Lagravis-Blazeprowlor,
Crominus-Grandorius,
Tormak-Tygafyre,
LiElla-Roarburn.
Return "Not a character" for invalid inputs.
"""

def identify_weapon(character):
    #insert your code here...FOR CHIMA!
    chars  = {
        "Laval":"Shado Valious",
"Cragger":"Vengdualizes",
"Lagravis":"Blazeprowlors",
"Crominus":"Grandoriuss",
"Tormak":"Tygafyres",
"LiElla":"Roarburns"
    }

    if chars.get(character) is not None:
        return f"{character}-{chars.get(character)}"
    
    return "Not a character"


print(identify_weapon("Laval"), "Laval-Shado Valious")
print(identify_weapon("Tormak"), "Tormak-Tygafyre")
print(identify_weapon("G'loona"), "Not a character")