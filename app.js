console.log('Before');

//setTimeout function is a example of Asyncronous Non Blocking function
setTimeout(() => {
    console.log('Reading a user from a database');
}, 2000);
console.log('After');