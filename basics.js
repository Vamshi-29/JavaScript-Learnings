// js is a dynamically typed language The main problem with JS is of it's single Threared nature 
let a=10 
const cant_change=20
for(let i=1;i<=5
    ;i++)
    console.log(i)
// arrays 
// In jS we can make array to consist of not just data types but Objects as well !!

// below is the object syntax
let object_syntax={
    name1:"Rajus",
    marks1:100
}
console.log(object_syntax['name1'],object_syntax['marks1'])

// can be simplified to 
let arr1=[10,20,30,40]
let names=["varun","ROhit","Akshay","Stuart"]

let arr2=[
    {
        name1:"varun",
        marks1:100,
        nested_obj:{
            obj1:"one"
        }
    },
    {
        name1:"Rohan",
        marks1:200,
        nested_obj:{
            obj1:"two"
        }
    }
]
for(let i=0;i<arr2.length;i++)
    console.log(arr2[i]['nested_obj']['obj1'])


// call back functions in js !! Basically passing the function as a Parameter !!!
function take_inputs(a,b,calltofun)
{
    return calltofun(a,b)
}
function sum(a,b)
{
    return a+b;
}
function difference(a,b)
{
    return a-b;
}
const gasd=take_inputs(10,20,difference)
console.log(gasd)

// inbuilt callback function's !!

function sayhello()
{   
    let name="cena"
    console.log("Hello !!"+name)
}
// setTimeout(sayhello,1*3000) // will call the sayhello function after 3sec!

// setInterval(sayhello,1*1000) // call the function every 1sec 

// small program to get time after every second
function gettime()
{
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    // return `${hours}:${minutes}:${seconds}`;
    const temp= `${hours}:${minutes}:${seconds}`;
    console.log(temp)
}
function callabovefuntion()
{
    const a=gettime()
    console.log(a)
}
const num1=setInterval(gettime,1*1000)

// can also display this time in termninal as well GPT To know how!!