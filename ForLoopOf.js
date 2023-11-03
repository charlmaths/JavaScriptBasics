// This will loop through the array and will print out each item
// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// for (const newCatList of cats) {
//   console.log(cat);
// }

// This is similar to above but we are saving the items into a new array

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
const newArrCat = [];

for (newCatItem of cats) {
  newArrCat.push(newCatItem);
}

console.log(newArrCat);
