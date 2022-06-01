"""
Dictionaries are used to store data values in key:value pairs.

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

""" 

from operator import xor


person = {
  "name": "Ford",
  "age": 30,
  "year": 1964,
  "address": {"house":374,"location":"accra"},
    "childern":("kofi","ama"),
    "gf":['abena','adjoa'] 
}
# print(type(person))
# print(person["name"])
# print(person["address"]["location"])

#  print(type(person))
# print(person["name"])
# print(type(person["address"]))

# person["name"]= "marley"
# person["age"]= 70
# person.update({"age":100})
# person.update({"school":"openlabs"})
# person.update({"school":"niit"})
# print(len(person))
# print(person)
# "address": {"house":374,"location":"accra"}
# profile = {
#   "name":"kofi",
#   "email":"kofi@mail.com",
#   "gender":"male",
#   "phone": 2335544335,
# } 
# print(profile.popitem()) 
# print(profile.popitem()) 
# profile.clear() 
# print(profile) 

# newProfile =profile

# print(newProfile)


# start Nested Dictionaries

# myfamily = {
#   "firstMember" :{
#     'children':{
#       'firstChild':"kofi",
#       'secChild':"ama",
#     }
#   }, 
# }

# print(myfamily["firstMember"]['children']['secChild'])
secchild="kofi",

    
grandmum = {
  'father':{
    "name":"daddy",
    "children":{
      "firstchild":"ama",
      "secchild":"kofi",
    }
  },
  "fatherBother":{
    "name":"big joe",
    "children":{
      "firstchild":"abena",
      "secchild":"loveway",
    }
  },
}

# print(grandmum["fatherBother"]["name"])
# print(grandmum["fatherBother"]["children"]["secchild"])

# del grandmum
# grandmum.clear()
# print(grandmum)

# end Nested Dictionaries
yourname=  ["kofi","sika"]
# print(type(yourname))
# # end Nested Dictionaries
# print(type(yourname[0][0]))
# # print(yourname[0][0] + yourname[1][0])

# methods 

"""
Method	             Description
clear()	             Removes all the elements from the dictionary
copy()	             Returns a copy of the dictionary
fromkeys()	          Returns a dictionary with the specified keys and value
get()	                Returns the value of the specified key
items()	              Returns a list containing a tuple for each key value pair
keys()	              Returns a list containing the dictionary's keys
pop()	                Removes the element with the specified key
popitem()	            Removes the last inserted key-value pair
setdefault()	        Returns the value of the specified key. If the key does not exist: insert the key, with the specified value
update()	            Updates the dictionary with the specified key-value pairs
values()	            Returns a list of all the values in the dictionary
 
"""