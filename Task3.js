/*JavaScript Tasks — Beginner Level
Task 1 — Variables
Create variables using var, let, and const.
Name
Age
City
College
Requirements:
Print all values.
Change the var value.
Change the let value.
Try changing the const value.
Try redeclaring each variable and observe what happens.*/

var name="sushma";
let age=23;
var city="chikkamagaluru";
const college="GEC";
console.log(name);
console.log(age);
console.log(city);
console.log(college);
name="Deepa";
age=22;
//college="SDM"; uncaught error
console.log(name);
console.log(age);
console.log(city);
//console.log(college)
//var name="Nethra";Cannot redeclare block-scoped variable 'name'.
//let age=24;Cannot redeclare block-scoped variable 'age'.
//var city="ckm";Cannot redeclare block-scoped variable 'city'.
//const college="GttC"Cannot redeclare block-scoped variable 'college'.

/*Task 2 — Printing Statements
Use:*///Create one example for each.
//console.log()
var a=12;
console.log(a);

alert("HI how are you");

confirm("are you there");

b=prompt("enter your name");
c=prompt("enter your place");
document.writeln(c);


/*Task 3 — User Details
Get from the user:
Name
Age
City
Qualification
Print the details in the console.*/

var Name=prompt("enter your name");
let Age=Number(prompt("enter your age"));
var City=prompt("enter your city");
var Qualification=prompt("enter your qualification");
console.log(Name);
console.log(Age);
console.log(City);
console.log(Qualification);


/*🟡 Data Type Tasks
Task 4 — Find Data Types
Create variables containing:
"JavaScript"
100
99.5
true
false
undefined
null
Print their values and use typeof to identify their data types.*/

var sub="javascript";
let num=100;
let dec=99.5;
var yes=true;
var no=false;
let num1=undefined;
let num2=null;
console.log(sub);
console.log(num);
console.log(dec);
console.log(yes);
console.log(no);
console.log(num1);
console.log(num2);

/*Task 5 — Student Array
Create an array containing:
Student names
Example:
let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
Print:
First student
Second student
Last student
Total students
Use only:
array[index]
array.length*/
let students=["Arun", "Priya", "Kumar", "Divya", "Rahul"];
console.log("first student",students[0]);
console.log("second student",students[1]);
console.log("last student",students[students.length-1]);
console.log(students.length)

/*Task 6 — Employee Object
Create an employee object containing:
name
age
role
skills
isWorking
qualification
skills and qualification should be arrays.
Print:
Employee name
Age
Role
First skill
Last qualification
Working status
This follows the same array-inside-object structure from your notes.*/

var employee={
ename:"Sushma",
eage:23,
erole:"developer",
skills:["html","css","js"],
equalification:["diploma","be","mtech"],
iswoeking:"yes"
};
console.log("employee name",employee.ename);
console.log("age",employee.eage);
console.log("role",employee.erole);
console.log("first skill",employee.skills[0]);
console.log("last qualification",employee.equalification[employee.equalification.length-1]);

/*🔵 Arithmetic Operator Tasks
Task 7 — Calculator
Create:
let a = 20;
let b = 5;
Calculate:
Addition
Subtraction
Multiplication
Division
Modulus
Exponentiation*/
let a1=20;
let b1=5;
console.log("addition",a1+b1);
console.log("subtraction",a1-b1);
console.log("multiplication",a1*b1);
console.log("division",a1/b1);
console.log("modulus",a1%b1);
console.log("exponential",a1**b1);

/*Task 8 — Shopping Bill
Create:
Shirt = 999
Pant = 1499
Shoes = 1999
Bag = 799
Calculate:
Total price
Use arithmetic operators only.*/

let shirt=999;
let pant=1499;
let shoes=1999;
let bag=799;
totalprice=shirt+pant+shoes+bag;
console.log("total price",totalprice);

/*Task 9 — Increment & Decrement
Find the output without running the code first.
A
let a = 10;

let b = a++;

console.log(a);11
console.log(b);10
B
let a = 10;

let b = ++a;

console.log(a);11
console.log(b);11
C
let a = 10;

let b = a--;

console.log(a);9
console.log(b);10
D
let a = 10;

let b = --a;

console.log(a);9
console.log(b);9
*/
//answered on the sameline after the statement

/*
🟣 Assignment Operator Tasks
Task 10
Start with:
let num = 10;
Perform separately:
num += 5
num -= 3
num *= 2
num /= 4
num %= 3
num **= 2
Print the result after each operation.
🔴 Comparison Operator Tasks
Your notes cover <, >, <=, >=, ==, !=, ===, and !==.*/
let NUM=10;
console.log(NUM += 5);
console.log(NUM -= 3);
console.log(NUM *= 2);
console.log(NUM /= 4);
console.log(NUM %= 3);
console.log(NUM **= 2);

/*Task 11 — Find Output
Predict the result:
console.log(10 > 5);true
console.log(10 < 5);false
console.log(10 >= 10);true
console.log(10 <= 9);false

console.log(5 == "5");true
console.log(5 === "5");false

console.log(10 != "10");false
console.log(10 !== "10");true
*/
//Answered on the same line


/*🟠 Logical Operator Tasks
Task 12 — AND
Find the output:
console.log(true && true);true
console.log(true && false);false
console.log(false && true);false
console.log(false && false);false
Task 13 — OR
console.log(true || true);true
console.log(true || false);true
console.log(false || true);true
console.log(false || false);false
Task 14 — NOT
console.log(!true);false
console.log(!false);true
console.log(!(5 > 10));true
console.log(!(10 > 5));false


🔥 Task 15 — Combination
Find the output without executing:
console.log(5 == "5" && !(5 === 5) || 6 > 7);
true && false
false

console.log(10 > 5 && 8 < 12 || 4 === "4");
true && true || false
true

console.log(7 === 7 && 10 != "10" || 5 >= 5);
true && false|| true
true

console.log(15 < 10 || 20 > 15 && 5 == "5");
false || true && true
true

These follow the same comparison + logical style in your code.
🟤 Ternary Operator Tasks
Task 16 — Voting
Create:
let age = 20;
Use the ternary operator:
age >= 18 → "Eligible to vote"
age < 18  → "Not eligible"*/

let vote_age=20;
vote_age>=18?console.log("eligible to vote"):console.log("not eligible");

/*Task 17 — Password
Create:
let password = true;
Use ternary:
true  → "Login successful"
false → "Wrong password"
🟢 Concatenation & Template String*/
let password=true;
password=true?console.log("login succesful"):console.log("wrong password");

/*Task 18 — User Introduction
Create:
let name = "Naveen";
let age = 25;
let city = "Trichy";
Print:
My name is Naveen. I am 25 years old. I live in Trichy.
Do it two ways:
Using +
Using template literals `${}`
Your notes cover both approaches.*/
let str_name = "Naveen";
let str_age = 25;
let str_city = "Trichy";
console.log("My name is "+str_name+"."+"I am "+str_age+" years old."+"I live in "+str_city+".");
console.log(`My name is ${str_name}. I am ${str_age} years old. I live in ${str_city}.`);

/*🔵 Type Casting Tasks
Task 19 — String Conversion
Use String() to convert:
100
true
undefined
null
[1, 2]
Print the result and its typeof.*/
let str1="hello";
console.log(typeof(100+str1));
console.log(typeof(true+str1));
console.log(typeof(undefined+str1));
console.log(typeof(null+str1));
console.log(typeof([1,2]+str1));

/*Task 20 — Number Conversion
Predict the output:
console.log(Number());0
console.log(Number(""));0
console.log(Number("123"));123
console.log(Number("a1"));NAN
console.log(Number(true));1
console.log(Number(false));0
console.log(Number(undefined));NAN
console.log(Number(null));0
Your notes specifically cover these conversions.*/


/*Task 21 — Boolean Conversion
Predict:
console.log(Boolean());false
console.log(Boolean(""));false
console.log(Boolean("hello"));true
console.log(Boolean(123));true
console.log(Boolean(true));true
console.log(Boolean(false));false
console.log(Boolean(undefined));false
console.log(Boolean(null));false
console.log(Boolean([]));true
console.log(Boolean({}));true

/*🔴 Flow Control Tasks
Task 22 — Voting Eligibility
Get age using prompt().
18 or above → "You can vote"
Below 18   → "You can't vote"
Use:
if
else*/
let vage=prompt("enter the age");
if (vage>=18)
{
    console.log("you can vote");
}
else{
   console.log("you can't vote");  
}

/*Task 23 — Positive or Negative
Get a number from the user.
Check:
Positive
Negative
Zero
Use if / else if / else.*/
let num3=prompt("enter the number");
if(num3>0){
    console.log("number is positive");
}
else if(num3<0){
    console.log("number is negative");
}
else{
    console.log("number is zero");
}

/*Task 24 — Grade System
Get marks from the user.
Create:
90–100 → A Grade
80–89  → B Grade
70–79  → C Grade
60–69  → D Grade
Below 60 → Fail
Use if / else if / else.
🟣 Nested If Task*/
let marks = Number(prompt("Enter your marks:"));

if (marks >= 90) {
    console.log("A Grade");
}
else if (marks >= 80) {
    console.log("B Grade");
}
else if (marks >= 70) {
    console.log("C Grade");
}
else if (marks >= 60) {
    console.log("D Grade");
}
else {
    console.log("Fail");
}

/*Task 25 — Job Eligibility
Get:
Age
Height
Weight
Rules:
Age >= 18
Height >= 160
Weight >= 60
If all conditions are satisfied:
"Congratulations! You are selected"
Otherwise display the appropriate reason.
This is based directly on the nested-if structure in your code.*/

let age1 = Number(prompt("Enter your age:"));
let height = Number(prompt("Enter your height in cm:"));
let weight = Number(prompt("Enter your weight in kg:"));

if (age1 >= 18) {

    if (height >= 160) {

        if (weight >= 60) {
            console.log("Congratulations! You are selected");
        }
        else {
            console.log("You are not selected because your weight is below 60 kg");
        }

    }
    else {
        console.log("You are not selected because your height is below 160 cm");
    }

}
else {
    console.log("You are not selected because your age is below 18");
}


/*🟡 Switch Tasks
Task 26 — Traffic Light
Get a traffic light color:
red
yellow
green
Use switch.
red    → Stop
yellow → Ready
green  → Go*/

let color = prompt("Enter traffic light color:");

switch (color) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid color");
}


/*Task 27 — Day
Create:
let day = 1;
Use switch:
1 → Monday
2 → Tuesday
3 → Wednesday
4 → Thursday
5 → Friday
6 → Saturday
7 → Sunday
Add:
default → Invalid day*/
let day=1;
switch(day){
    case 1:console.log("monday");
    break;
    case 2:console.log("tuesday");
    break;
    case 3:console.log("Wednesday");
    break;
    case 4:console.log("Thursday");
    break;
    case 5:console.log("Friday");
    break;
    case 6:console.log("Saturday");
    break;
    case 7:console.log("Sunday");
    break;
    default:console.log("invalid day");
}


/*🏆 FINAL MINI PROJECT
Task 28 — Student Result System
Create a small Student Result System using everything you've learned.
Step 1 — Get user details
Name
Age
City
Step 2 — Get marks
Tamil
English
Maths
Step 3 — Calculate
Total
Average
Step 4 — Check result
Use if / else if / else:
90+ → A
80+ → B
70+ → C
60+ → D
Below 60 → Fail
Step 5 — Check voting
Age >= 18
Step 6 — Display
Use a template string:
Name: Naveen
Age: 22
City: Trichy
Total: 250
Average: 83.33
Grade: B
Voting: Eligible*/

/* ans
// Step 1 — Get user details

let name = prompt("Enter your name:");
let age = Number(prompt("Enter your age:"));
let city = prompt("Enter your city:");


// Step 2 — Get marks

let tamil = Number(prompt("Enter Tamil marks:"));
let english = Number(prompt("Enter English marks:"));
let maths = Number(prompt("Enter Maths marks:"));


// Step 3 — Calculate Total and Average

let total = tamil + english + maths;
let average = total / 3;


// Step 4 — Check Grade

let grade;

if (average >= 90) {
    grade = "A";
}
else if (average >= 80) {
    grade = "B";
}
else if (average >= 70) {
    grade = "C";
}
else if (average >= 60) {
    grade = "D";
}
else {
    grade = "Fail";
}


// Step 5 — Check Voting Eligibility

let voting;

if (age >= 18) {
    voting = "Eligible";
}
else {
    voting = "Not Eligible";
}


// Step 6 — Display Result using Template String

console.log(`
Name: ${name}
Age: ${age}
City: ${city}
Total: ${total}
Average: ${average.toFixed(2)}
Grade: ${grade}
Voting: ${voting}
`);*/
