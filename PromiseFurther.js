// Another promise example

const one = () => {
  return "one";
};

const two = () => {
  setTimeout(() => {
    return "two";
  }, 3000);
};

const three = () => {
  return "three";
};

// Creating a function to call the functions:

const callFunction = () => {
  let oneValue = one();
  console.log(oneValue);

  let twoValue = two();
  console.log(twoValue);

  let threeValue = three();
  console.log(threeValue);
};

callFunction();
