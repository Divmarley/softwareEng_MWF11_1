# car----->object
#properties
# name
# color 
# cc
# model
# type 

# can_drive()
# can_stop()
# can_reverse()


# Python is an object oriented programming language
#this means that  python sees everything in Python is an object


# class is a blueprint for creating objects


class Car():
    #properties
    def __init__(self,carName,carColor):
        self.name = carName
        self.color = carColor

    # methods()
    def can_drive(self):
        return "yes i am driving"

    def can_stop(self):
        return "yes i am stop"

toyota = Car("coro","red")
tesla = Car("tes","green")

print(toyota.name)
print(toyota.color)
print(tesla.name)
print(tesla.color)
print(tesla.can_stop())