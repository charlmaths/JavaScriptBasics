// Simple JS that will take a user's name then we will output to say hi

/*
Step 1: Use an event listener to access HTML documents through dom, document.eventlistener will take 2 paramaters
first paramater is the event itself i.e. a mouse click then the second parameter is the functon to trigger
*/

/*
DOMContentLoaded - is an event that triggers when the DOM content is loaded, i.e. at the start of the first render.
This 'event' basically references all the elements in the <body> section so if we want to reference any elements in the body
use this event
*/
document.addEventListener("DOMContentLoaded", () => {
  const userInput = document.getElementById("userIpt");
  const btn = document.getElementById("btnID");
  const para = document.getElementById("outputID");

  console.log(userInput);
  console.log(btn);
  console.log(para);

  btn.addEventListener("click", () => {
    const userToGreet = userInput.value;
    // para.textContent = "hello " + userToGreet;
    // we can also use template literal to output an h1 into para template - think of it as innerHTML
    para.innerHTML = `<h1>Hello ${userToGreet}</h1>`;
  });
});
