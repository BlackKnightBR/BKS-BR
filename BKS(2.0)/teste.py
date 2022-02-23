def ocurrfind(string):
    listfind = list(string.strip())
    dictfind = {}.formkeys(listfind, 0)
    listfind = dictfind.items()
    print(listfind)

ocurrfind('google')
