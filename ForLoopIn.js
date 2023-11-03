// for-loop used for objects

// Object constructed
// Remember we do key:value pair, the 'keys' are the property of an object
let user = {
  name: "John",
  age: 20,
  isAdmin: true,
};

// This loop will give us all the key inside the object
for (key in user) {
  console.log(key);
}

// this will output the value
for (key in user) {
  console.log(user[key]);
}
