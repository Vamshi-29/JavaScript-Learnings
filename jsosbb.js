const obj={
    myname:"vamshi",
    age:10
};

const fstring =JSON.stringify(obj) // converts data to string generally to send to someone we use this !!
console.log(fstring)

const ourstr=JSON.parse(fstring) // convert string to normal object or normal data when someone sends it we convert !

console.log(ourstr)