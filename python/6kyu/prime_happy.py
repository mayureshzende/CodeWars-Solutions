def is_prime_happy(n):
    prime_arr= [] 

    for num in range(1, n + 1):
    # all prime numbers are greater than 1
        if num > 1:
            for i in range(2, int( num // 2) + 1):
                if (num % i) == 0:
                    break
            else:
                prime_arr.append(num)
    count = 0
    sum_prime = 0

    for i in prime_arr:
        if i < n:
            count += 1
            sum_prime += i

    if count and (sum_prime % n == 0):
        return True

    return False



print(is_prime_happy(5),True)
print(is_prime_happy(8),False)
print(is_prime_happy(25),True)
print(is_prime_happy(32),True)
print(is_prime_happy(2),False)
print(is_prime_happy(0),False)