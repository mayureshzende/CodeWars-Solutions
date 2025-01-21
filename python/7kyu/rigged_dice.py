"""
Create a rigged dice function that 22% of the time returns the number 6. 
The rest of the time it returns the integers 1,2,3,4,5 uniformly.
"""
import random
def throw_rigged():
    return 6 if random.random() <= 0.22 else random.randrange(1,5)
n = throw_rigged()
print(n)