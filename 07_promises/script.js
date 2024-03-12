// Create a promise
const promise = new Promise((resolve, reject) => {
  // Do some async task
  setTimeout(() => {
    console.log("Async task complete");
    resolve();
  }, 1000);
});

// // take callback function
// promise.then(() => {
//   console.log("Promise consumed..");
// });

// // you can call promise without putting in a variable
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async task 2 2complete");
//     resolve();
//   }, 1000);
// }).then(() => console.log("Promise 2  consumed"));

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    // let error = false;
    let error = true;

    if (!error) {
      resolve({ name: "John", age: 30 });
    } else {
      reject("Error: Something went wrong!");
    }
  }, 1000);
});

getUser
  .then((user) => console.log(user))
  .catch((error) => console.log(error))
  .finally(() => console.log("The promise has been resolved or rejected"));

// console.log("Hello from global scope");
