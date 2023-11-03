// This will take an input word then it will reverse it

// function below is just using JS we're not connected to HTML
// function ReverseString(userInput) {
//   const givenString = userInput.split("").reverse().join();
//   console.log(givenString);
// }

// ReverseString("hello");

console.log("function works?");

document.addEventListener("DOMContentLoaded", function () {
  const userInput = document.querySelector("input");
  const btn = document.querySelector("button");
  const para = document.querySelector("p");

  btn.addEventListener("click", () => {
    const givenString = userInput.value; // This will take the value of the html document
    const reversedString = givenString.split("").reverse().join();
    para.textContent = reversedString;
  });
});
