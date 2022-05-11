"""
Dictionaries are used to store data values in key:value pairs.

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

""" 

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
profile = {
    "name":"kofi",
    "email":"kofi@mail.com",
    "gender":"male",
    "phone": 2335544335,
} 
# print(profile.popitem()) 
# print(profile.popitem()) 
# profile.clear() 
print(profile) 

newProfile =profile

print(newProfile)