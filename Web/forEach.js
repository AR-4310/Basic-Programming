let numbers = [1,2,3,4,5];

function double(element,index,array){
    array[index] = element*2;
}

function triple(element,index,array){
    array[index] = element *3;
}

numbers.forEach(double);
numbers.forEach(triple);
numbers.forEach(display);

let fruits = ["ApPle", "BaNAna", "ManGo", "OrAnGe"];

function toUpperCase(element,index,array){
    array[index] = element.toUpperCase();
}

function toLowerCase(element,index,array){
    array[index] = element.toLowerCase();
}

function capitalize(element,index,array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}

function display(element){
    console.log(element);
}

fruits.forEach(capitalize);
fruits.forEach(display);