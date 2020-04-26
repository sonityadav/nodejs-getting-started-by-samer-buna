// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.

// ------------------------------------------------

const hello = (i) => console.log('hello world: ' + i);

// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         hello(i);
//     }, 1000 * i);
// }


// let i;
// for (i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         hello(i);
//     }, 1000 * i);
// }


let counter = 0;
const printer = setInterval(() => {
    hello(++counter);
    if (counter >= 5) {
        clearInterval(printer);
        console.log('done');
    }
}, 1000);