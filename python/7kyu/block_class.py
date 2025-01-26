"""
Write a class Block that creates a block (Duh..)

Requirements
The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.
"""
class Block:
    # Good Luck!
    def __init__(self, arr):
        self.width = arr[0]
        self.length = arr[1]
        self.height = arr[2]
        
        print(f'width  {self.width} and length {self.length} and height {self.height}')
        
    def get_width(self):
        return self.width;
    
    def get_length(self):
        return self.length
    
    def get_height(self):
        return self.height
    
    def get_volume(self):
        return self.width * self.length * self.height
    
    def get_surface_area(self):
        return 2*((self.length * self.width) + (self.width * self.height) + (self.height * self.length))