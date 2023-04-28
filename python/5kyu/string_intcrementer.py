"""
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

"""

def increment_string1(strng):
    if len(strng) == 0:
        return '1'
    left = 1
    res = ''

    while strng[-left].isdigit() and strng[-left] != '0':
        left += 1
  
    if strng[-left] == '0':
        return strng[:-left:] + "1" 

    left = left - 1 
    res += strng[:-left:]
    if left == 0:
        res += '1'
    else:
        res += str(int(strng[-left::]) + 1)

    return res

import string

def increment_string(strng):
    alfa_part=[]
    num_part=[]
    full_nam=[]
    if len(strng) == 0:
        return '1'
    if strng.isalpha():
        return strng+'1'
    else:
        for item in strng:
            if item in string.ascii_letters:
              alfa_part.append(item)
            else:
                num_part.append(item)
        full_nam.extend(str(int(''.join(num_part))+1))
        while len(num_part) != len(full_nam):
            full_nam.insert(0,'0')
        return ''.join(alfa_part + full_nam)


print(increment_string('mayur01'))
print(increment_string('mayur1'))
print(increment_string('mayur777'))
print(increment_string('foo0042'))
print(increment_string('foobar00'))
print(increment_string('fo99obar99'))
print(increment_string('foo') , "foo1")
print(increment_string('') , '1')


def increment_string(strng):
    s = input()
if len(s) == 0:
    print('kal')
else:
    nums = []
    lettList = []
    tempList = []
    #numsList = [s[num] for num in range(-1, -len(s), -1) if s[num].isdigit() == True]
    for i in s:
        if s[s.index(i)].isdigit() == False:
            lettList.append(i)
        else:
            nums.append(i)
    #nums = int(nums)
    if nums.count('0') == len(nums):
        nums[-1] = '1'
    else:
        for i in nums:
            if i != '0':
                tempList.append(i)
            else:
                lettList.append(i)
    #tempList = int(''.join(map(str, tempList))) + 1
    s = ''.join(map(str, lettList)) + str((int(''.join(map(str, tempList))) + 1))
