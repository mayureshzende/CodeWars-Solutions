def sort_by_language(arr):
    #your code here
    return sorted(arr, key=lambda x: (x["language"], x["first_name"]))