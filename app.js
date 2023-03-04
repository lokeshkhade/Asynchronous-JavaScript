/*Promise :
 1. A promise is an object that hold eventual result
 of an asynchronous operation.
 2. When asynchronous operation completed it can either result in
 value or an error.
 3. A promise basicaly promise you that it will keep you th result 
 of an asynchronous operation.
 4. Promise object can be one of the three state
  Initialy when we create the object it is in Pending State.At this
  time it will do some asynchronous operation. When result is ready
  promise can either be fulfilled(resolve) which means asynchronous operation
  completed sucessfully so here we going to have some value.
  Otherewise something went wrong on during execution of asynchronous operation
  a promise will be in rejected state.In this case we have an error


 */



console.log('Before');

getUser(1, function (user) {
    console.log('User', user);
    getRepositories(user.gitHubUsername, function (repos) {
        console.log('Repos', repos);
    });
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