# pip install mysql-connector-python
 
import mysql.connector

# Start by creating a connection to the database.
mydatabase = mysql.connector.connect(
    host="localhost",
    user="root",
    password= "",
    database="accrawefish"
)
# print(mydatabase)

# allows you to communicate with sql syntax
myCursor = mydatabase.cursor()

# llows you to execute sql syntax
# sql ="CREATE DATABASE accrawefish"
# myCursor.execute(sql)


# creating of tables in sql
# sql =""" 
#     CREATE TABLE fishmen (
#         id INT PRIMARY KEY AUTO_INCREMENT, 
#         name VARCHAR(300), 
#         email VARCHAR(300), 
#         phone INT(14)
#     )
# """
# myCursor.execute(sql)

 
# sql =""" 
#    INSERT INTO `fishmen`( `name`, `email`, `phone`) VALUES ('fish marley','marley@fish.com',"983444768")
# # """
# myCursor.execute(sql)
# mydatabase.commit()


# create a database and name it sms
# create a table name it account 
"""
id 
name
email
password 
phonenumber
"""

# sql =""" 
#     CREATE TABLE account (
#         id INT PRIMARY KEY AUTO_INCREMENT, 
#         name VARCHAR(300), 
#         email VARCHAR(300), 
#         password VARCHAR(300)
#     )
# """
# myCursor.execute(sql)

# create a table name it student 
"""
id 
class
account_id 
"""


sql =""" 
    INSERT INTO account('name','email', 'password','phonenumber') 
    VALUES ('kofi','k@mail.com','erukwreewrit','97376456464')
"""
myCursor.execute(sql)

mydatabase.commit()