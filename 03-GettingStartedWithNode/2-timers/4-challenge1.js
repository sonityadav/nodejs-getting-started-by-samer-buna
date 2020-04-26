const theOneFunc = () => { };

setTimeout(theOneFunc, 4 * 1000);

// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function

// --------------------------------

const hello = (t) => console.log(`Hello after ${t} seconds`);

setTimeout(hello, 4000, 4);
setTimeout(hello, 8000, 8);
