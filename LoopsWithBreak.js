// This will be a js script that has an object

// first is to create the object that has properties:

console.log("JavaScript file loaded");

const officeWorkers = {
  emp_1: "Chris",
  emp_2: "Boris",
  emp_3: "Tanya",
  emp_4: "Alex",
  emp_5: "Thresh",
};

// save html elements to a js variable using document.querySelector

document.addEventListener("DOMContentLoaded", function () {
  const paragraph = document.querySelector("p");
  const input = document.querySelector("input");
  const btn = document.querySelector("button");

  // attaching eventlistener to the btn variable which is now connected to html element <button>
  // we are using .value and .toLowerCase method to change the value of the input into lowercase
  btn.addEventListener("click", () => {
    const searchName = input.value.toLowerCase();
    input.value = "";
    input.focus();
    paragraph.textContent = "";
    for (const names in officeWorkers) {
      const nameOfficeworker = officeWorkers[names];
      if (nameOfficeworker.toLowerCase() === searchName) {
        paragraph.textContent = `Name is ${nameOfficeworker}`;
        break;
      }
    }
    if (paragraph.textContent === "") {
      paragraph.textContent = "name not found.";
    }
  });
});
