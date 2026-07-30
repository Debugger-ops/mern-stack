// function newfun(number){
//     return function nayafun(factor){
//         return number * factor
//     }
// }
// console.log(newfun(3)(5))

// (function(){
//     console.log("this is lifi")
// })();

// function first(){
//     console.log("first")
//     second()
//     console.log("first function again")
// }
// function second(){
//     console.log("second")
//     third()
//     console.log("second again")

// }
// function third(){
//     console.log("third")

// }
// first()



// Question 1: Check Positive or Negative
// function checkNumber(num) {
//     if (num < 0) {
//         return "Negative";
//     } else {
//         return "Positive";
//     }
// }

// console.log(checkNumber(-90));


// // Question 2: Check Even or Odd
// function checkEvenOdd(num) {
//     if (num % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }

// console.log(checkEvenOdd(90));


// // Question 3: Find Greater Number
// function findGreater(a, b) {
//     if (a > b) {
//         return "A is greater";
//     } else if (b > a) {
//         return "B is greater";
//     } else {
//         return "Both are equal";
//     }
// }

// console.log(findGreater(5, 8));


// // Question 4: Ticket Price
// function getTicketPrice(age) {
//     if (age < 12) {
//         return 5;
//     } else if (age >= 12 && age < 18) {
//         return 10;
//     } else if (age >= 18 && age < 60) {
//         return 15;
//     } else {
//         return 10;
//     }
// }

// console.log("Ticket Price:", getTicketPrice(5));


// // Question 5: BMI Calculator
// function calculateBMI(bodyMass, height) {
//     let bmi = bodyMass / (height * height);
//     return bmi.toFixed(2); // Round to 2 decimal places
// }

// console.log("BMI:", calculateBMI(70, 1.74));

//question 5 day of greeting 
// function day(hour){
//     if(hour<12){
//         return "good morning"
//     }else{
//         return "good afternoon"
//     }
// }
// console.log("greeting", day(11))

// const arr= [1,4,6,4,54]
// console.log(typeof arr);

// const arr1 = new Array();
// arr1[0] = 3;
// console.log(arr1)

// const arrmethod = ['a', 'b' , 'c', 'd', 'e']
// arrmethod.push('q')
// console.log(arrmethod)
// arrmethod.pop()
// arrmethod.pop()
// console.log(arrmethod)
// arrmethod.shift('4')
// console.log(arrmethod)

// const arrmethod = ['a', 'b', 'd', 'g', 'h'];
// arrmethod.splice(2,5,54,54,65)
// console.log(arrmethod)
// arrmethod.splice(3)
// console.log(arrmethod)

const concatinationarray = [1,2,3,4,5];
const concat2 = [3,4,5]
// const final = concatinationarray + concat2
// console.log(typeof final)
// console.log(final)
concat2 = [...concatinationarray]
console.log(concat2)