const { promises } = require("dns")

// function myownsetimeout(fun){
//     setTimeout(function(){
//         fun()
//     },1000)
// }
// function print()
// {
//     console.log("Print something !!")
// }
//myownsetimeout(print)


// function myownsetimeout2() {
//     return new Promise(function(resolve) {
//         setTimeout(function(){
//             resolve()}, 1000); 
//     });
// }

// function print() {
//     console.log("Print something!!");
// }

// const b = myownsetimeout2(); // will return the promise !!
// console.log(b) 
// b.then(print); // with that promise what to be done 

// async inside async (call back inside call back - call back hell)
// function myowefun()
// {
//     setTimeout(function(){
//         console.log("Hello 1")
//         setTimeout(function(){
//             console.log("Hello 2")
//         },1000)
//     },1000)
// }

// myowefun()

// Main use of promises is to avoid callback hell by promise chaining and 
// to beautify the code 

function myown2()
{
    return new Promise(function(resolve){
        resolve()
    })
}

myown2().then(function(){
    console.log("print 1")
    myown2().then(function(){
        console.log("print 2")
    })
})