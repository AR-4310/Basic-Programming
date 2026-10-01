fruit=["malta","banana","strawberry","apple"]
print(fruit[0],fruit[1],fruit[3])
fruit[0]="jackfruit"
print(fruit)
print(len(fruit))
if "apple" in fruit:
    print("apple exists in the list")
else:
    print("apple doesnt exist in the list")

fruit[4:7]=["watermelon","grapes", "mango","kiwi"] #added 3 elements in index 4,5,6
print(fruit)

list1=[2.5,True,345]
fruit.extend(list1) #extend list1 to fruit
print(fruit)
fruit.append("orange") #append orange to fruit
print(fruit)
fruit.pop(3) #remove index 3
print(fruit)

for x in fruit:
    print(x)

print("While loop:")
i=0
while i<len(fruit):
    print(fruit[i])
    i+=1

#list comprehension
car=["volvo","toyota"]
newCar=[x.upper() for x in car ] #[what_to_do with n for n in collection name if condition in n]
print(newCar)

num=[2,4,6,8,10]
newNum=[n*2 for n in num if n>4]
print(newNum)

name=["karim","rahim","kalam","fuad"]
newName=[n for n in name if "ka" in n]
print(newName)


