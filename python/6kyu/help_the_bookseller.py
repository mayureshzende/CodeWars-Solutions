def stock_list(list_of_art, list_of_cat):

    books = []
    count = {}
    ret_str = []

    for b in list_of_art:
        books.append(b.split(" "))
    
    for c in list_of_cat:
        if not count.get(c):
            count[c] = 0
    
    for b in books:
        if count.get(b[0][0]) is not None:
            count[b[0][0]] += int(b[1])

    for k,v in count.items():
        put = f'({k} : {v})'
        ret_str.append(put)

    return " - ".join(ret_str)



b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B"]
print(stock_list(b, c), "(A : 200) - (B : 1140)")


b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B", "C", "D"]
print(stock_list(b, c), "(A : 0) - (B : 1290) - (C : 515) - (D : 600)")