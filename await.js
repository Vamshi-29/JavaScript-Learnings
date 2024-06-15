// await functions !!

function tps1() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("HEY AWIAT");
        }, 1000);
    });
}

async function main() {
    const val = await tps1(); 
    // whren reaches here since it is async it will go below cell codes and will work but not below awiat below the async function
    // is called 
     // what ever might be below await will wait thats how async will work !
    console.log(val); 
    console.log("Hey Thereee")
}

main();
console.log("Hello popooaa")

// The function which calls the async will need async and await // if you don't put await it will just work like promises
// every await must be wrapped inside the async function 