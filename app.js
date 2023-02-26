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
function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database');
        callback({ id: id, gitHubUsername: 'POP' })
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling Github API');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}