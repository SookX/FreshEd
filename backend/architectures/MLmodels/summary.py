try:
    from googlesearch import search
except ImportError: 
    print("No module named 'google' found")
 
query = "What is the name of the formula that is the world's most famous equation?"
 
for j in search(query, tld="co.in", num=10, stop=10, pause=1):
    print(j)
