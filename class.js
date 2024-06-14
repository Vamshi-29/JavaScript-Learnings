class Animal {
    constructor(name, cnt, speaks) {
        this.name = name;
        this.cnt = cnt;
        this.speaks = speaks;
    }
    static funtime() // when use static call directy call funtion in class without creating an object
    {
        console.log("Call function to class")
    }
    printName() {
        console.log("The animal name is " + this.name);
    }
}
Animal.funtime() // call function to class
let dog = new Animal("dog", 4, "bow bow");
let cat = new Animal("cat", 4, "meow meow");

dog.printName();  
cat.printName();   // call function on object 

const currdate=new Date()
console.log(currdate.getDate())
console.log(currdate.getFullYear())

function randomClock() {
    let currdate = new Date();  // Get the current date and time
    let hrs = currdate.getHours();      // Get the current hours
    let minutes = currdate.getMinutes(); // Get the current minutes
    let seconds = currdate.getSeconds(); // Get the current seconds

    // Ensure the time components are always two digits
    // hrs = hrs.toString().padStart(2, '0');
    // minutes = minutes.toString().padStart(2, '0');
    // seconds = seconds.toString().padStart(2, '0');

    console.log(hrs + ":" + minutes + ":" + seconds);
}

// Call the function every second
//setInterval(randomClock, 1000);

function calsum()
{
    let sum=0;
    for(let i=0;i<=10000000;i++)
        sum=sum+i;
}
const stime=new Date()
const currtime=stime.getTime()

calsum()

const stime2=new Date()
const currtime2=stime2.getTime()

console.log(currtime2-currtime) // milli seconds