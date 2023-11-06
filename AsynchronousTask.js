// This is an example of an asynchronous task

/*
This demonstrates JS synchronous performance, because it's single threaded, the code will run line by line
in other words, console.log("two") will not run until console.log("one") is done.
 */
// console.log("one");
// console.log("two");
// console.log("three");

/*
Below is how we simulate asynchronousity in JS
*/

// This function will execute first
const one = () => {
  console.log("one");
};

// This function will give a promise - run in the background whilst the function belows executes
const two = () => {
  setTimeout(() => {
    console.log("two");
  }, 3000);
};

// This function will execute 'second' because the above function is asynchronous!
const three = () => {
  console.log("three");
};

one();
two();
three();

// output will be:
// one
// three
//
// two
