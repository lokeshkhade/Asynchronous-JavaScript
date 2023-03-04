console.log('Before');

getUser(1, function (user) {
    console.log('User', user);
    getRepositories(user.gitHubUsername, function (repos) {
        console.log('Repos', repos);
    })
});

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