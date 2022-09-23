// function getMilk(money) {   
// var toBuy = Math.floor(money/1.5);
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("buy" + toBuy);
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");
// }

// getMilk(4);


// function lifeInWeeks(age) {
//     var yearsRemaining = 90 - age;
//     var days = yearsRemaining * 365;
//     var weeks = yearsRemaining * 52;
//     var months = yearsRemaining * 12;
//     console.log("You have " + days + " days and " + weeks + " weeks, and " + months + " months left.");
// }


// function bmiCalculator(weight, height) {
//     // var bmi = bmiCalculator(65, 1.8) ; 
//     var bmi = weight / (height * height) ;
//     // return bmi;
//     if (bmi < 18.5) {
//         console.log("Your BMI is " + bmi + " , so you are underweight.");
//     } else if (bmi > 18.5 && bmi < 24.9) {
//         console.log("Your BMI is " + bmi +  ", so you have a normal weight.");
//     } else if (bmi > 24.9) {
//         consol.log("Your BMI is " + bmi +  ", so you are overweight.");
//     }
// }

// bmiCalculator(65, 1.8);



// function isLeap(year) {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 return "Leap year."
//             } else {
//                 return "Not leap year."
//             }
//         }
//         else {
//             return "Leap year."
//         }
//     } else {
//         return "Not leap year."
//     }  
// }


// var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
// var guestName = prompt("What is your name?");

// if (guestList.includes(guestName)) {
//     alert("Welcome!");
// } else {
//     alert("You are not in List ");
// }

// var output = [];
// var count = 0;
// var lastElem = output[output.length - 1];

// function fizzBuzz() {
    
//     if (count !== lastElem) {
//         count = count + 1;
//     } if (count % 3 === 0) {
//         count = "Fizz" ;
//     } if (count % 5 === 0) {
//         count = "Buzz" ;
//     } if (count % 3 === 0 && count % 5 === 0) {
//         count = "FizzBuzz" ;
//     } 
    
//     output.push(count);
//     console.log(output);
// }



// var output = [];
// var count = 1;
// // var lastElem = output[output.length - 1];

// function fizzBuzz() {




//     if (count % 3 === 0) {
//         output.push("Fizz");
//     } else if (count % 5 === 0) {
//       output.push("Buzz");
//     } else if (count % 3 === 0 && count % 3 === 0) {
//       output.push("FizzBuzz");
//     } else {
//         output.push(count);
//     }

//     count++;
//     console.log(output);
// }
















