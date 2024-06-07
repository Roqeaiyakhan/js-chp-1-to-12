//CHAPTER-13 TESTING SETS (MULTIPLE) OF CONDITIONS

// WE'VE ALREADY SEEN
// if (badal) {
//   alert("It's gonna be raining soon in Peshawar!");
// } else {
//   alert("No chance of rain in Peshawar!");
// }

// FIND LARGEST OF THREE NUMBERS
const firstNumber = +prompt("enter first number");
const secondNumber = +prompt("enter second number");
const thirdNumber = +prompt("enter third number");

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
  console.log("First number that is " + firstNumber + " is the largest number");
} else if (secondNumber > thirdNumber) {
  console.log(
    "Second number that is " + secondNumber + " is the largest number"
  );
} else {
  console.log("Third number that is " + thirdNumber + " is the largest number");
}

// GRADING SYSTEM
// const userName = prompt("Please enter your name");
// const score = +prompt("Please enter your score");

// if (score >= 90) {
//   alert(userName + " your Grade is A");
// } else if (score >= 80) {
//   alert(userName + " your Grade is B");
// } else if (score >= 70) {
//   alert(userName + " your Grade is C");
// } else if (score >= 60) {
//   alert(userName + " your Grade is D");
// } else {
//   alert(userName + " your Grade is F");
// }

//.........................CHAPTER-14: IF STATEMENTS NESTED............................//

//what is a nested if

// if (10 > 8) {
//   if (8 > 5) {
//     console.log("yes 8 > 5");
//   }
// }

// User Authentication
// const username = prompt("Please enter your username");
// let password = "";

// if (username === "admin") {
//   password = prompt("Please enter your password");
//   if (password === "secret") {
//     document.write("Login successful. Welcome, Admin!");
//   } else {
//     document.write("Incorrect password. Please try again.");
//   }
// } else {
//   document.write("User not found. Please check your username.");
// }

// Ticket Pricing
// const age = +prompt("Please enter your age");
// const isStudent = +prompt(`Are you a student\n0.No\n1.Yes`);

// if (age < 12) {
//   document.write("Child Ticket: $5");
// } else {
//   if (age >= 12 && age < 18 && isStudent) {
//     document.write("Student Ticket: $10");
//   } else {
//     document.write("Adult Ticket: $15");
//   }
// }