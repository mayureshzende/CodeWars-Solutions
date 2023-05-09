def cakes(recipe, available):
    ratio = []
    if len(recipe) > len(available):
        return 0
    
    for r in recipe:
        ratio.append(int(available.get(r) / recipe.get(r)))

    return min(ratio)


#  modified version 
def cakes(recipe, available):
    ratio = []
    for r in recipe.keys():

        if not available.get(r):
            return 0
        
        ratio.append(int(available.get(r) / recipe.get(r)))

    return min(ratio)



recipe = {"flour": 500, "sugar": 200, "eggs": 1}
available = {"flour": 1200, "sugar": 1200, "eggs": 5, "milk": 200}
print(cakes(recipe, available), 2, 'example #1')


recipe = {"apples": 3, "flour": 300, "sugar": 150, "milk": 100, "oil": 100}
available = {"sugar": 500, "flour": 2000, "milk": 2000}
print(cakes(recipe, available), 0, 'example #2')