console.log('Before');

// getUser(1, function (user) {
//     console.log('User', user);
//     getRepositories(user.gitHubUsername, function (repos) {
//         console.log('Repos', repos);
//     })
// });


//Promise based approach
// getUser(1)
//     .then(user => getRepositories(user.gitHubUsername))
//     .then(repos => console.log("Repos", repos))
//     .catch(err => console.log('Error', err.mesage));


 //Asyc and Await approach
 //Async and Await helps you to write asynchronous code like synchronous code
 // Anytime we calling a function that return promises you can await the result of that
 //function and then get the actual result just like calling a synchronous function 
 //Whenever we use await operator in function we need to decorate the function with async  
 //modifier
 //Async Await Bulid on top of promises it allows user to write code syntaticaly synchronous code
 //Internaly javascript engine convert code to promise .then syntax
 //When we are awaiting the result of our function we are not realy waiting or blocking
 // in synchronus fashion . At the time of await javascpit engine realse the thread and
 // avail to other function  when the result of getuser is available the we assing th value to
 //user variable.

async function displayRepos(){
    try{

        const user = await getUser(1);
const repos = await getRepositories(user.gitHubUsername);
console.log("Repos",repos);
    }
catch(err){
    console.log('Error:',err.message);
}
}
displayRepos();


console.log('After');

//We add another parameter callback to getUserid.A callback is a function that we are 
//going to be called when the result of asynchrous operation is ready
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database');
            resolve({ id: id, gitHubUsername: 'POP' })
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling Github API');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
}