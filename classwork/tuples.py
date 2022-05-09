# mytuple = ("apple", "banana", "cherrys","cherry")
# print(mytuple[0:2])

# Tuple
# Tuples are used to store multiple items in a single variable.
# Tuple is one of 4 built-in data types in Python used to store 
# collections of data,
# the other 3 are List, Set, and Dictionary, 
# all with different qualities and usage.
# A tuple is a collection which is ordered and unchangeable.

# Tuples are written with round brackets

# Update Tuples
# convert the tuple into a list by using list()
# mytuple = ("apple", "banana", "cherrys","cherry")
# newlist = list(mytuple)
# print(mytuple)
# print(type(newlist))

# newlist.insert(1,"kill")
# print(newlist)



# unpacking tuples 
# fruits = ("apple", "banana", "cherry")
# (*x,y,z)=fruits
# (x,*y)=fruits

# print(x)
# print(y) 
# print(z) 

# joining tuples
fruits = ("apple", "banana", "cherry")
fruit = ("apple", "bananat", "cherry")

lol= fruits+fruit
print(lol)
print(lol.index("bananat"))