#To add and remove item in a tuple, we need to convert it to list first
colors=("red","green")
y=list(colors)
y.append("blue")
y.remove("red")
x=tuple(y)
print(x)

#we can add tuple to tuple
a=("apple","orange")
b=("mango",)
a+=b
print(a)


