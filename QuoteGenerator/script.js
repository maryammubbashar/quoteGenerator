// // //Function 1
// // let num1 = +prompt("Enter  number1:");
// // let num2 = +prompt("Enter  number2:");
// // function sum(num1, num2) {
// //   return num1 + num2;
// // }
// // let fsum = sum(num1, num2);
// // console.log(`Sum is ${fsum}`);
// // //Function 2
// // let num3 = +prompt("Enter  number to check even or odd:");
// // function isEven(num3) {
// //   if (num3 % 2 === 0) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }

// // if (isEven(num3)) {
// //   console.log("Number is even");
// // } else {
// //   console.log("Number is odd");
// // }

// //Array

// // let numbers = [];
// // let sum = 0;
// // for (let i = 0; i <= 4; i++) {
// //   numbers[i] = +prompt(`Enter  number ${i}:`);
// //   sum += numbers[i];
// // }
// // console.log(sum);

// // function findMax(numbers) {
// //   let lElement = numbers[0];
// //   for (let i = 1; i < numbers.length; i++) {
// //     if (numbers[i] > lElement) {
// //       lElement = numbers[i];
// //     }
// //   }
// //   return lElement;
// // }
// // let numbers = [];
// // let sum = 0;
// // for (let i = 0; i <= 4; i++) {
// //   numbers[i] = +prompt(`Enter  number ${i}:`);
// // }
// // console.log(findMax(numbers));

// // let data = prompt("Enter a string");
// // let words = data.split(" ");
// // console.log(words.length);

// // let numbers = [];
// // let sum = 0;
// // for (let i = 0; i <= 4; i++) {
// //   numbers[i] = +prompt(`Enter  number ${i}:`);
// //   sum += numbers[i];
// // }
// // let ave = sum / numbers.length;
// // console.log(`Average is ${ave}`);

// let arr = [];
// for (let i = 0; i < 3; i++) {
//   let person = {};
//   person.name = prompt("Enter name");
//   person.age = +prompt("Enter age");
//   arr.push(person);
// }
// console.log(arr); // See if people are sorted by age
// arr.sort((a, b) => b.age - a.age);
// console.log(arr); // See if people are sorted by age

// console.log(`oldest is ${arr[0].name} and age is ${arr[0].age}`);

let button = document.querySelector("button");
let quote = document.querySelector("p");

let quoteArray = [
  "And whoever does good — whether male or female — while being a believer, those will enter Paradise. (4:124)",
  "So verily, with the hardship, there is relief. (94:6)",
  "And He found you lost and guided [you]. (93:7)",
  "Do not despair of the mercy of Allah. Indeed, Allah forgives all sins. (39:53)",
  "And whoever puts their trust in Allah, then He alone is sufficient for them. (65:3)",
  "And We have certainly made the Qur'an easy for remembrance, so is there any who will remember? (54:17)",
  "And when My servants ask you concerning Me — indeed I am near. I respond to the call of the supplicant when he calls upon Me. (2:186)",
  "The truth is from your Lord, so do not be among the doubters. (2:147)",
  "Call upon Me; I will respond to you. (40:60)",
  "Indeed, my Lord is near and responsive. (11:61)",
];

function changeQuote() {
  let randomIndex = Math.floor(Math.random() * quoteArray.length);
  quote.innerHTML = quoteArray[randomIndex];
}

button.addEventListener("click", changeQuote);
