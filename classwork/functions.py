# def greetings(hgh,name ):
#     return hgh +" " + name
# greetings('good morning','kofi')
# greetings('good even',"kelly")
# print(greetings('hi',"keke"))


# def add(firstNumber,secondNumber):
#     return firstNumber+secondNumber
# print(add(2,4))
# print(add(10,20))




# def info(name,gender):
#     return  "my name is " + name + " and i am a " + gender 

# print(info("kofi","male")) 
# print(info("Ama","female")) 
 


def children(**Child):
    return Child

# print(children("kofi", "ama","kojo"))
# print(children("Killy")) 

# bb= children(a="milly",b="kofi") 
# print(type(bb))







# Lambda
# A lambda function is a small anonymous function.

# A lambda function can take any number of arguments,
#  but can only have one expression.

# syntax

# lambda arguments :expression



# add =lambda a,b: a+b
# print(add(20,50)) 
# a*b - c*d


# def func(k):
#     return lambda a : a * k
# kk =func(2)

# print(kk(20))

def greet(gr):
    return gr
print(greet())