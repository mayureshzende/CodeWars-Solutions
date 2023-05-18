"""
You get an array of numbers with their base as an input:

[["101",16],["7640",8],["1",9]]
The output should be the sum as an integer value with a base of 10, so according to the example this would be:

4258

A few more examples:
[["101",2], ["10",8]] --> 13
[["ABC",16], ["11",2]] --> 2751
Bases can be between 2 and 36 (2<=base<=36)
"""

def sum_it_up(numbers_with_bases):
    sum = 0 

    for n in numbers_with_bases:

        sum += int(n[0] , n[1])

    return sum



print(sum_it_up([["101",2], ["10",8]]),13)
print(sum_it_up([["ABC",16], ["11",2]]),2751)