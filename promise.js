/*Promise :
 1. A promise is an object that hold eventual result
 of an asynchronous operation.
 2. When asynchronous operation completed it can either result in
 value or an error.
 3. A promise basicaly promise you that it will keep you the result 
 of an asynchronous operation.
 4. Promise object can be one of the three state
  Initialy when we create the object it is in Pending State.At this
  time it will do some asynchronous operation. When result is ready
  promise can either be fulfilled(resolve) which means asynchronous operation
  completed sucessfully so here we going to have some value.
  Otherewise something went wrong on during execution of asynchronous operation
  a promise will be in rejected state.In this case we have an error


 */


const p = new Promise((resolve, reject) => {
    //Some async work
    setTimeout(() => {
        // resolve(1);
        reject(new Error('message'));
    }, 2000);
});
p.then(result => console.log('Result:', result))
    .catch(err => console.log('Error:', err.message))
/*This is the way to consume promise 
*/
