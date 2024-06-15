
// ugly way of creating Custom Async funtions in JS !
// NOte any custom async function in wrapped with some Inbuilt Async funtions (readFile,setTimeout,fetch etc...)

const { promises } = require("dns");
const fs = require("fs");

// function customasync(fun) {
//     fs.readFile("txtt.txt", "utf-8", function(err, data) {
//         fun(data);
//     });
// }

// function print(data) {
//     console.log(data);
// }

// customasync(print);

// // But When you do that There are few problems like callback hell etc !!
// // TO AVOID THOSE WE USE PROMISES IN JS ! (just presttier way of callbacks !)

function customasync2()
{
    return new Promise(function(resolve){
        console.log("Inside promise")
        fs.readFile("txtt.txt", "utf-8", function(err, data) {
            // resolve(data);
            resolve("Hello")
        });
    })
}
function print2(data){
    console.log(data)
}
customasync2().then(print2)
console.log("HEREEE") // since above is async thiss will print firts by using promises but not possible in await inside call function

// const b=customasync2()
// console.log(b)
// b.then(print2)  

// promises are basically a class !! (Replace call backs )
// Below is how to use a promise as a class 


// const a = new Promise(function(resolve){
//     console.log("Heyy")
// })





