let myArray = [5, "apple", 8, "banana", 12];
console.log(myArray);

let firstElement = myArray[0];
let lastElement = myArray[myArray.length - 1];
let middleElement = myArray[Math.floor(myArray.length / 2)];

console.log(firstElement, lastElement, middleElement);

let arrayLength = myArray.length;
console.log("Array Length:", arrayLength);

myArray.push("orange");
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.unshift("grape");
console.log(myArray);

myArray.shift();
console.log(myArray);

myArray.splice(2, 1, "kiwi");
console.log(myArray);

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}


myArray.forEach(function(item) {
  console.log(item);
});





let [first, second, ...rest] = myArray;
console.log(first, second, rest);
