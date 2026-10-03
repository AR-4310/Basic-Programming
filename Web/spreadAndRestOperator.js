//spread operator is used to expand an array into individual elements
var num = [1,2,3,4,5,6,7,8,9,10];

var max = Math.max(...num);

console.log(max);

var fruit = ['apple', 'banana', 'orange'];

var newFruit = ['mango', 'grape', ...fruit];

var total = ['jackfruit', ...newFruit];

console.log(total);

//rest operator is used to collect multiple elements and condense them into a single element

function strings(...str)
{
    return str.join(' ');
}

const s1 = "My";
const s2 = "name";
const s3 = "is";
const s4= "John";

console.log(strings(s1,s2,s3,s4));