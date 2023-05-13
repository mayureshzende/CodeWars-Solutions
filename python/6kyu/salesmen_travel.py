def travel(r, zipcode):
    address = r.split(',')
    found_add = []
    house_no = []
    for a in address:
        s = a.split(" ")

        if zipcode == (" ").join(s[-2::]):
            found_add.append((" ").join(s[1:-2:]))
            house_no.append(s[0])

    return f'{zipcode}:{(",").join(found_add)}/{(",").join(house_no)}'



r = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"

print(travel(r, "OH 43071"), "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432")

print(travel(r, "NY 56432"), "NY 56432:High Street Pollocksville/786")

print(travel(r, "NY 5643"), "NY 5643:/")