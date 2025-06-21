"use strict";

const arr = [1, 2, 3, 4, 5];

const obj = {
  name: "John",
  age: 30,
}

const arrObj = {
    one: "one",
    2: "two",
    3: "three"
}
const b = 'b';

// arrObj.b = '111';
arrObj[b] = '111';
  
console.log(arrObj["b"]);
console.log(arrObj.b);
console.log(arr[2]);
console.log(obj.name + " age " + obj.age);

const storeName = "storeName";

const storeDescription = {
    budget: 10000,
    employees: ["John", "Alice", "Bob"],
    products:{
        apple: 100,
        banana: 200
    },
    open: true
}

