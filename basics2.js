let str="hello world world world"
let arr=[]
arr.push(str.length)
console.log(arr[0])
arr.push(str.indexOf("world"))
arr.push(str.lastIndexOf("world"))
arr.push(str.slice(2,5))

let splitarray=str.split(" ") //delimiter (',' )
console.log(splitarray)
let str2=str.replace("hello","Boloo")
console.log(str2)
let strtemp="              gsad                "
console.log(strtemp.trim())
console.log(str.toLowerCase())
console.log(str.toUpperCase())
// 
console.log(parseInt("42asdsa")) //will eliminate extra character (only the first number is evaluated)
console.log(parseFloat("87.32shdjash"))


//// arrry methods
// push pop 
let num1=[1,2,3]
num1.shift() // remove from first
console.log(num1)
num1.unshift(99)
console.log(num1)
let num2=[9,8,7]
let finalarray=num1.concat(num2)
// another way of printing an array 
function print(ele){
    console.log(ele);
}
finalarray.forEach(print) // callbackfunction 


// explore methods of objects and maths 


