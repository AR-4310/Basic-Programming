fruits=["mango","banana","apple","kiwi"]

print("loop through the list fruits:")
for x in fruits:
    print(x)

print("loop through the word 'banana':")
for x in "banana":
    print(x)

print("loop through the list fruits and break when it reaches 'apple':")
for x in fruits:
    if x=="apple":
        break;
    print(x)

print("loop through the list fruits and skip 'apple':")
for x in fruits:
    if x=="apple":
        continue;
    print(x)

#length of string
print("Length:",len(fruits))

txt="abcdefghijklmnopqrstuvwxyz"
print("Length:",len(txt))

#any sequence exists in string
if "abcd" in txt:
    print("'abcd' exists in txt string")

#any sequence doesnt exist in string
if "isi" not in txt:
    print("Doesnt exist in txt string")

#slicing
print(txt[2:5]) #print index 2 to 4
print(txt[:6]) #print index 0 to 5
print(txt[3:]) #print index 3 to all

print("Upper:",txt.upper())
print("Lower:",txt.lower())
txt1="     dsds         "
print("No shitespace at beginning and ending:",txt1.strip())

#split
date="24-09-2026"
day,month,year=date.split('-')
print(day,month,year)

email="adnanraad@aiub.edu"
username,domain=email.split('@')
print("Username:",username,"Domain:",domain)

number="10,20,30"
n=number.split(',')
total=0
for N in n:
    total+=int(N)
print(total)

#place holder
name="AR"; age=25
print(f"my name is {name} and i am {age} years old")

