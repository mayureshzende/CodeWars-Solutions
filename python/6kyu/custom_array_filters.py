class list:

    def __init__(self, arr):
        self.arr = arr
        self.digit_arr = self.get_digits()
    
    def get_digits(self):
        return [val for val in self.arr if isinstance(val, (int))]
    
    def even(self):
        ret = []
        for i in self.digit_arr:
            if i.isdigit():
                if i % 2 == 0:
                    ret.append(i)
        return ret
    
    def odd(self):
        ret = []
        for i in self.digit_arr:
            if i.isdigit():
                if i % 2 == 1:
                    ret.append(i)
        return ret
    
    def under(self,n):
        ret = []
        for i in self.digit_arr:
            if i < n:
                ret.append(i)
        return ret

    def over(self, n):
        ret = []
        for i in self.digit_arr:
            if i > n:
                ret.append(i)
        return ret 
    
    def in_range(self, under, over):
        ret = []
        for i in self.digit_arr:
            if i >= over and i <= under:
                ret.append(i)
        return ret
    