function findsum(n)
{
    let sum=0;
    for(let i=1;i<=n;i++)
        sum=sum+i;
    console.log(sum)
}
function findsumtill()
{
    findsum(1000)
}
setTimeout(findsumtill,50);
console.log("Hello")

const fs=require("fs")
fs.readFile("txtt.txt","utf-8",function(err,data)
{
    console.log(data)
})

console.log("Hey there !!!")
let a=0
for(let i=1;i<=10000000;i++)
    a++
console.log("Beloww ")