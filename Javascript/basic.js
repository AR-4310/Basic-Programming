//callback function
function greet(name,callback1,callback2)
{
    console.log("Hello, my name is "+name + ".");
    callback1();
    callback2();
}

function age()
{
    console.log("I am 25 years old");
}

function bye()
{
    console.log("Good bye!");
}

greet("Raad",age,bye);

//arrow function
var mul=(a,b)=>a*b;
console.log(mul(5,6));

var s1=()=> console.log("Hello");
s1();

var logic=(a,b)=> {
    if(a>b)
    {
        console.log("A is greater than B");
    }else
    {
        console.log("B is greater than A");
    }
}

logic(10,20);

var logic2=(a,b)=> a>b?console.log("A is greater than B"):console.log("B is greater than A");
logic2(100,20);

//find method
var arr=[3,5,6,7,8,9];
var result=arr.find(num=>num>5);
console.log(result);

//filter method
var arr1 = [5,10,15,20,23,24,37,40];
var result1=arr1.filter(num=>num%2==0 && num>10);
result1.forEach(num=>{
    console.log(num);
});

//asynchronous programming

//ex1
console.log("Start");
setTimeout(()=>{
    console.log("Completed");
},2000);
console.log("End");

//ex2
console.log("Start");
setTimeout(()=>{
    console.log("1s");
},1000)

setTimeout(()=>
{
    console.log("2s")
},2000)

setTimeout(()=>
{
    console.log("5s")
},5000)

setTimeout(()=>
{
    console.log("Ended");
},6000);

//promise
//ex1
var p1= new Promise((resolve,reject)=>{
    var passed = true;

    if(passed)
    {
        resolve("You passed");
    }else
    {
        reject("You failed");
    }
});

    p1
    .then(result=>console.log(result))
    .catch(error=>console.log(error));

//ex2
var p2 = new Promise((resolve,reject)=>{
    var foodAvailable = true;

    setTimeout(
        ()=>foodAvailable?resolve("Food is ready!"):reject("Food is not ready"),2000);
});

p2
.then(result=>console.log(result))
.catch(error=>console.log(error));

//ex3
function walkdog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var dogwalked = true;
            if(dogwalked){
                resolve("Dog is walked");
            }else{
                reject("Dog is not walked");
            }
        },7000);
    });
}

function cleankitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var kitchencleaned = true;
            if(kitchencleaned){
                resolve("Kitchen is cleaned");
            }else{
                reject("Kitchen is not cleaned");
            }
        },8000);
    });
}

function takeShower(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var showerTaken = true;
            if(showerTaken){
                resolve("Shower is taken");
            }else{
                reject("Shower is not taken");
            }
        },9000);
    });
}

async function doChores(){
    try{
        var walkdogResult = await walkdog();
        console.log(walkdogResult);
        var cleankitchenResult = await cleankitchen();
        console.log(cleankitchenResult);
        var takeShowerResult = await takeShower();
        console.log(takeShowerResult);  
        console.log("All chores are done!");
    }catch(error){
        console.log(error);
    }
}

doChores();

//setInterval
var count = 0;
var intervalId=setInterval(()=>{
    console.log(count++);
    if(count==5){
        clearInterval(intervalId);
    }
},1000);