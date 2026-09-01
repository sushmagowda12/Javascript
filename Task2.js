//javaScript Tasks


/* Task 1 — var, let, const
Create three variables:
var → student name
let → student age
const → college name
Requirements:
Print all three values.
Change the var value.
Change the let value.
Try changing the const value and observe the error.
Try redeclaring the var variable.
Try redeclaring the let variable and observe the error.*/

//Ans:
var student_name="Sushma"
let student_age=23
const college_name="GEC"

console.log(student_name)
console.log(student_age)
console.log(college_name)

student_name="Varsha"
student_age=25
//college_name="JSS" Uncaught error it is showing

console.log(student_name)
console.log(student_age)
console.log(college_name)


/*🟢 Task 2 — User Information
Get the following information from the user using prompt():
Name
Age
City
Print the result in the console.
Expected:
Name: Naveen
Age: 22
City: Trichy*/
//Ans:
var Name=prompt("Enter the name")
var age=prompt("enter the age")
var city=prompt("enter the city")

console.log(Name)
console.log(age)
console.log(city)


/*🟢 Task 3 — Welcome Message
Get the user's name using prompt().
Display:
Welcome Naveen!
Use alert().
ANS:*/
var name=prompt("enter user name")
alert(name)

/*🟢 Task 4 — Age Calculator
Ask the user for their birth year.
Calculate their approximate age using:
Current Year - Birth Year
Print the age in the console.
Example:
Birth Year: 2000
Age: 26
ans:*/
var Birth_year=prompt("Enter the birth year")
var Current_year=2026,age
age=Current_year-Birth_year
console.log(age)

/*🔵 Data Type Tasks
Task 5 — Identify Data Types
Create variables containing:
"Hello"
100
25.5
true
false
undefined
null
Use typeof and print each data type.
ans:*/
let str = "Hello";
let number = 100;
let decimal = 25.5;
let value1 = true;
let value2 = false;
let value3 = undefined;
let value4 = null;

console.log("Hello:", typeof message);
console.log("100:", typeof number);
console.log("25.5:", typeof decimal);
console.log("true:", typeof value1);
console.log("false:", typeof value2);
console.log("undefined:", typeof value3);
console.log("null:", typeof value4);

// Task 6 — Student Data


let student = {
    name: "Sushma",
    age: 24,
    city: "Bangalore",
    qualification: "BE",
    isStudent: true
};

console.log("Complete Object:", student);
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Qualification:", student.qualification);
console.log("isStudent:", student.isStudent);


// Task 7 — Fruit Array

let fruits = [
    "Apple",
    "Mango",
    "Orange",
    "Banana",
    "Grapes",
    "Papaya"
];

console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
console.log("Last fruit:", fruits[fruits.length - 1]);
console.log("Total number of fruits:", fruits.length);


// Task 8 — Basic Calculator

let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);


// Task 9 — Shopping Bill


let shirt = 999;
let pant = 1499;
let shoes = 1999;

let totalPrice = shirt + pant + shoes;

console.log("Shirt:", shirt);
console.log("Pant:", pant);
console.log("Shoes:", shoes);
console.log("Total Price:", totalPrice);

// Task 10 — Simple Marks Calculation


let tamil = 80;
let english = 75;
let maths = 90;

let totalMarks = tamil + english + maths;
let averageMarks = totalMarks / 3;
console.log("Tamil:", tamil);
console.log("English:", english);
console.log("Maths:", maths);
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);



// Task 11 — Post Increment

let a11 = 10;

let b11 = a11++;

console.log("a:", a11);
console.log("b:", b11);



// Task 12 — Pre Increment

let a12 = 10;

let b12 = ++a12;
console.log("a:", a12);
console.log("b:", b12);

// Task 13 — Post Decrement

let a13 = 20;

let b13 = a13--;

console.log("a:", a13);
console.log("b:", b13);

// Task 14 — Pre Decrement

let a14 = 20;

let b14 = --a14;

console.log("a:", a14);
console.log("b:", b14);


// Task 15 — Find the Final Values

let a15 = 5;

let b15 = a15++;

let c15 = ++a15;

let d15 = b15--;

console.log("a:", a15);
console.log("b:", b15);
console.log("c:", c15);
console.log("d:", d15);

// Task 16 — Assignment Operators


let num1 = 10;
num1 += 5;
console.log("After += 5:", num1);

let num2 = 10;
num2 -= 5;
console.log("After -= 5:", num2);

let num3 = 10;
num3 *= 5;
console.log("After *= 5:", num3);

let num4 = 10;
num4 /= 5;
console.log("After /= 5:", num4);

let num5 = 10;
num5 %= 3;
console.log("After %= 3:", num5);

let num6 = 10;
num6 **= 2;
console.log("After **= 2:", num6);



// Task 17 — Mini Student Profile
let studentName = "Sushma";
let studentAge = 24;
let studentCity = "Bangalore";
let college = "ABC College";

let subjects = [
    "JavaScript",
    "HTML",
    "CSS",
    "Java",
    "Python"
];

let studentProfile = {
    name: studentName,
    age: studentAge,
    city: studentCity,
    subjects: subjects,
    isStudent: true
};

console.log("Student Name:", studentProfile.name);
console.log("Student Age:", studentProfile.age);
console.log("City:", studentProfile.city);
console.log("College:", college);
console.log("First Subject:", studentProfile.subjects[0]);
console.log(
    "Last Subject:",
    studentProfile.subjects[studentProfile.subjects.length - 1]
);
console.log("Total Subjects:", studentProfile.subjects.length);
console.log("Complete Object:", studentProfile);


// Final Challenge — User + Calculator

let number1 = Number(prompt("Enter first number:"));
let number2 = Number(prompt("Enter second number:"));

console.log("First Number:", number1);
console.log("Second Number:", number2);

console.log("Addition:", number1 + number2);
console.log("Subtraction:", number1 - number2);
console.log("Multiplication:", number1 * number2);
console.log("Division:", number1 / number2);
console.log("Modulus:", number1 % number2);
console.log("Power:", number1 ** number2);