from contextlib import nullcontext
import datetime as dt 
import math as m 
import json
from multiprocessing.dummy import Array

"kofi kumi sika kokw ssd"

x= [ "kofi","sika"]

for k in x:
    print(k[0])

# todays = dt.datetime.now()

# print(todays.year)
# print(todays.day)
# print(todays.month)
# print(todays.strftime("%a"))
# print(todays.strftime("%A"))
# print(todays.strftime("%b"))
# print(todays.strftime("%H"))
# print(todays.strftime("%M"))
# print(todays.strftime("%X"))
# print(todays.strftime("%x"))
# print(todays.strftime("%j"))

x ='{"brand": "Ford","model": "Mustang","year": 1964}'
k =json.loads(x)

q = json.dumps(k)
# print(type(q))


fruits =  ['kiwi','orange'] 
newFruits = json.dumps(fruits)
print(type(newFruits))

# When you convert from Python to JSON,
#  Python objects are converted into the JSON (JavaScript) equivalent:
# None  ---> null
# dict ----> object
# list ----> Array 
# tuple ---> Array
# str -----> String
# int ----> Number
# float ----> Number
# True ----> true
# False ----> false


x = {
  "name": "John",
  "age": 30,
  "married": True,
  "divorced": False,
  "children": ("Ann","Billy"),
  "pets": None,
  "cars": [
    {"model": "BMW 230", "mpg": 27.5},
    {"model": "Ford Edge", "mpg": 24.1}
  ]
}