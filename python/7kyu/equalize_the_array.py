def equalize(arr):
    
  if len(arr) == 0:
    return []
  
  base = arr[0]
  
  return ['{:+d}'.format(n - base) for n in arr]


print(equalize(["+0","+10","+15","-10"]), [20,30,35,10])