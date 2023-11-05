// This is how Promise works in js - remember promise is just a js object

/*
First is we can declare a promise and save it into a variable, then it has a one parameter
which will be a function which then should have 2 parameters, a resolve and reject params.
*/

// let somePromise = new Promise(function (resolve, reject) {
//   let a = 1 + 3;
//   if (a === 2) {
//     resolve("--promise is success");
//   } else {
//     reject("--promise is failed");
//   }
// });

/* to interact with our promises: we can use then and catch method
i.e. we can do somePromises.then().catch() then inside methods we can also plug in functions
*/

// somePromise
//   .then(function (message) {
//     console.log("we are inside the THEN method " + message);
//   })
//   .catch(function (message) {
//     console.log("we are in the CATCH method" + message);
//   });

// Example 2

// let somePromise2 = new Promise((resolve, reject) => {
//   let serverStatus = true;
//   if (serverStatus === true) {
//     resolve("Server is ON - Promise is success");
//   } else {
//     reject("Server is OFF - Promise is failed");
//   }
// });

// somePromise2
//   .then((message) => {
//     console.log("Inside THEN method ---" + message);
//   })
//   .catch((message) => {
//     console.log("Inside CATCH method ---" + message);
//   });

// Example 3

let somePromise3 = new Promise((resolve, reject) => {
  resolve("Promise is Success");
  reject("Promise is Fail");
});

somePromise3
  .then((message) => {
    console.log("Insinde THEN method ---" + message);
  })
  .catch((message) => {
    console.log("Insinde CATCH method ---" + message);
  });
