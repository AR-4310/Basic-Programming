raad={
    "name" : "raad",
    "age" : 25
}

print(raad["age"])

student={
    "s1" : {
        "name" : "araf",
        "age" : 25,
        "grade" : "A"
    },
    "s2": {
        "name" : "raja",
        "age" : 26,
        "grade" : "B"
    }
}

print(student["s1"]["name"],student["s2"]["grade"])

for x,y in student.items():
    print(x)

    for z in y:
        print(z)