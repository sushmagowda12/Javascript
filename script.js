/*1. What is a variable in JavaScript?

A variable is a named container used to store data values.

Example:

let age = 25;

Here, age is the variable and 25 is its value.

2. What are the three keywords used to create variables?

The three keywords are:
var
let
const

3. Write the syntax to create a variable using var.
var variableName = value;

Example:
var age = 25;

4. Write the syntax to create a variable using let.
let variableName = value;

Example:
let age = 25;

5. Write the syntax to create a variable using const.
const variableName = value;

Example:
const age = 25;

6. What is declaration?

Declaration means creating a variable without assigning a value to it.

Example:

let age;
Here, age is declared but no value is assigned.

7. What is initialization?

Initialization means assigning a value to a variable when it is created.

Example:

let age = 25;
Here, age is declared and initialized with 25.

8. What is reassignment?

Reassignment means changing the value of an existing variable.

Example:

let age = 25;
age = 30;
The value of age changes from 25 to 30.

9. What is redeclaration?

Redeclaration means declaring the same variable again in the same scope.

Example:

var age = 25;
var age = 30;
The variable age has been redeclared.

10. Which keyword allows redeclaration?
var
Example:
var x = 10;
var x = 20;

11. Which keyword allows reassignment?
Both:

var
let

allow reassignment.

Example:
let x = 10;
x = 20;

12. Which keyword requires initialization when declared?
const

Example:
const age = 25;

This is valid.

But:

const age;

is an error because const must be initialized when declared.

13. Identify the declaration and initialization
let age = 25;

Answer:

let age → Declaration
= 25 → Initialization
age → Variable name
25 → Value

14. What is the value of a?
var a = 100;
console.log(a);

Output:
100

15. Change the value of this variable to 200

Given:

let number = 100;

Answer:

let number = 100;
number = 200;

16. What will be the output?
var a = 10;
console.log(a);

Output:10

17. What will be the output?
var a = 10;
a = 20;
console.log(a);

Output:20

The value was reassigned from 10 to 20.

18. What will be the output?
var a = 10;
var a = 30;
console.log(a);

Output:30
var allows redeclaration.

19. Write a var variable named name with the value "John".
var name = "John";

20. Create a var variable named price with the value 500.
var price = 500;

21. Reassign price from 500 to 1000.
var price = 500;
price = 1000;

22. What will be the output?
var x = 50;
x = 100;
console.log(x);

Output:100

23. Can a var variable be reassigned?
Yes.

Example:

var x = 10;
x = 20;

24. Can a var variable be redeclared?

Yes.

Example:

var x = 10;
var x = 20;

25. Write an example of var redeclaration.
var name = "John";
var name = "David";

console.log(name);

Output:David

26. Create a let variable named age with the value 25.
let age = 25;

27. What will be the output?
let age = 20;
age = 30;
console.log(age);

Output:30

28. Can a let variable be reassigned?

Yes.
Example:

let age = 20;
age = 30;

29. Can a let variable be redeclared?

No, not in the same scope.

This produces an error:

let age = 20;
let age = 30;

30. Find the error
let name = "John";
let name = "David";

Error: name has been redeclared in the same scope.

Correct way:
let name = "John";
name = "David";

Here we are reassigning, not redeclaring.

31. Create a let variable called city and assign "Chennai".
let city = "Chennai";

32. Change the value of city to "Salem".
let city = "Chennai";
city = "Salem";

33. What will be the output?
let x = 10;
x = 50;
console.log(x);

Output:50

34. Write a let variable called salary with the value 25000.
let salary = 25000;

35. Reassign salary to 30000.
let salary = 25000;
salary = 30000;

36. Create a const variable called pi with the value 3.14.
const pi = 3.14;

37. Can a const variable be reassigned?

No.
Example:

const pi = 3.14;
pi = 3.15;

This produces an error.

38. Can a const variable be redeclared?

No.

Example:

const x = 10;
const x = 20;

This produces an error.

39. What is wrong with this code?
const age;
age = 25;

A const variable must be initialized when it is declared.

Correct:
const age = 25;

40. What happens here?
const price = 500;
price = 1000;

This produces an error because a const variable cannot be reassigned.

Correct if you need to change the value:
let price = 500;
price = 1000;

41. Create a const variable called country with the value "India".
const country = "India";

42. What will be the output?
const x = 100;
console.log(x);

Output:100

43. Which keyword should you use if the value should not be reassigned?

Use:const

Example:

const pi = 3.14;

44. What is the difference between let and const?
let                           	         const
Can be reassigned	                      Cannot be reassigned
Does not require Initialization          Must be initialized when declared
 immediately	
Cannot be redeclared in the same scope	  Cannot be redeclared in the same scope

Example:

let age = 20;
age = 25;       // Allowed
const age = 20;
age = 25;       // Error
    
45. What is the difference between var and const?
var                                  	const
Can be reassigned	               Cannot be reassigned
Can be redeclared	               Cannot be redeclared in the same scope
Can be declared without 	       Must be initialized
initialization
Function-scoped	                    Block-scoped

Example:

var x = 10;
var x = 20;     // Allowed
x = 30;         // Allowed

But:

const x = 10;
x = 20;         // Error

46. Write JavaScript code to print Hello World using console.log().
console.log("Hello World");

Output:

Hello World

47. Write JavaScript code to print the number 500 using console.log().
console.log(500);

Output:

500

Notice that 500 doesn't need quotation marks because it is a number.

48. What is the purpose of console.warn()?

console.warn() displays a warning message in the browser console.

Example:

console.warn("This is a warning");

It is useful for showing warnings to the developer.

49. What is the purpose of console.error()?

console.error() displays an error message in the browser console.

Example:

console.error("Something went wrong");

It is useful for identifying errors during development.

50. What is the purpose of each?
alert()

Displays a popup message to the user.

alert("Welcome!");

The browser displays a popup containing:

Welcome!

prompt()

Displays a popup that allows the user to enter some information.

let name = prompt("Enter your name:");
console.log(name);

The user can enter their name.

confirm()

Displays a popup with OK and Cancel buttons.

let result = confirm("Are you sure?");
console.log(result);

If the user clicks OK, the result is:

true

If the user clicks Cancel, the result is:

false

document.writeln()

Writes content directly into the HTML document.

document.writeln("Hello World");
It displays:Hello World

It is mainly useful for simple demonstrations; it is generally not preferred for updating modern web pages.

console.log()

Prints information to the browser's developer console.

console.log("Hello World");

Output in the console:Hello World*/


//Coding questions

// 1. Create variables for student name, age, and mark
let studentName = "Sushma";
let studentAge = 22;
let mark = 85;

console.log("Student Name: " + studentName);
console.log("Age: " + studentAge);
console.log("Mark: " + mark);


// 2. Ask the user's name using prompt() and display it using alert()
let name = prompt("Enter your name:");
alert("Your name is: " + name);


// 3. Ask the user's age using prompt() and print it using console.log()
let age = prompt("Enter your age:");
console.log("Your age is: " + age);


// 4. Ask the user a question using confirm()
let answer = confirm("Do you like JavaScript?");
console.log("Your answer is: " + answer);


// 5. Ask the user's name and display it on the webpage
// using document.writeln()
let webName = prompt("Enter your name:");
document.writeln("<h2>Hello, " + webName + "!</h2>");
