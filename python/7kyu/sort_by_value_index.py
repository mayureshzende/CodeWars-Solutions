"""
Sort an array by value and index
Your task is to sort an array of integer numbers by the product of the value and the index of the positions.

For sorting the index starts at 1, NOT at 0!
The sorting has to be ascending.
The array will never be null and will always contain numbers.

Example:

Input: 23, 2, 3, 4, 5
Product of value and index:
23 => 23 * 1 = 23  -> Output-Pos 4
 2 =>  2 * 2 = 4   -> Output-Pos 1
 3 =>  3 * 3 = 9   -> Output-Pos 2
 4 =>  4 * 4 = 16  -> Output-Pos 3
 5 =>  5 * 5 = 25  -> Output-Pos 5

Output: 2, 3, 4, 23, 5
"""

def sort_by_value_and_index(arr):
    vals = []
    for ind,v in enumerate(arr, 1):
        vals.append ( [ v , ind * v])

    sort_items = sorted(vals , key=lambda x:x[1])
    res = []
    for x in sort_items:
        res.append(x[0])
    return res



# print(sort_by_value_and_index([ 1, 2, 3, 4, 5 ]), [ 1, 2, 3, 4, 5 ])
# print(sort_by_value_and_index([ 23, 2, 3, 4, 5 ]), [ 2, 3, 4, 23, 5 ])
# print(sort_by_value_and_index([ 26, 2, 3, 4, 5 ]), [ 2, 3, 4, 5, 26 ])
# print(sort_by_value_and_index([ 9, 5, 1, 4, 3 ]), [ 1, 9, 5, 3, 4 ])
print(sort_by_value_and_index([42, 72, 63, 18, 53, 82, 47, 89, 60, 18, 4, 84, 55, 86, 90, 65, 22]), [42, 4, 18, 72, 18, 63, 53, 47, 22, 82, 60, 89, 55, 84, 65, 86, 90])
 
# It should work for random inputs too: [42, 4, 72, 18, 63, 53, 47, 22, 82, 60, 89, 55, 84, 65, 86, 90] should equal 