```javascript
// ======================================================
// JAVASCRIPT PRACTICE TASKS - 1 TO 32
// ======================================================


// 🟢 TASK 1 — FOR LOOP
console.log("===== TASK 1 =====");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// 🟢 TASK 2 — REVERSE NUMBER
console.log("===== TASK 2 =====");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// 🟢 TASK 3 — EVEN NUMBERS
console.log("===== TASK 3 =====");

for (let i = 1; i <= 20; i++) {

    if (i % 2 == 0) {
        console.log(i);
    }

}


// 🟢 TASK 4 — ODD NUMBERS
console.log("===== TASK 4 =====");

for (let i = 1; i <= 20; i++) {

    if (i % 2 != 0) {
        console.log(i);
    }

}


// 🟡 TASK 5 — MULTIPLICATION TABLE
console.log("===== TASK 5 =====");

let number = Number(prompt("Enter a number:"));

for (let i = 1; i <= 10; i++) {

    console.log(number + " x " + i + " = " + (number * i));

}


// 🔵 TASK 6 — WHILE LOOP COUNTDOWN
console.log("===== TASK 6 =====");

let count = 10;

while (count >= 1) {

    console.log(count);
    count--;

}


// 🔵 TASK 7 — SUM OF NUMBERS
console.log("===== TASK 7 =====");

let i = 1;
let sum = 0;

while (i <= 10) {

    sum = sum + i;
    i++;

}

console.log("Sum =", sum);


// 🟣 TASK 8 — DO WHILE
console.log("===== TASK 8 =====");

let num = 1;

do {

    console.log(num);
    num++;

} while (num <= 5);


// 🟣 TASK 9 — DO WHILE UNDERSTANDING
console.log("===== TASK 9 =====");

let a = 10;

do {

    console.log(a);
    a++;

} while (a <= 5);

// Output: 10
// Reason:
// do...while executes at least once before checking
// the condition.


// 🟠 TASK 10 — STRING CHARACTERS
console.log("===== TASK 10 =====");

let name = "javascript";

for (let character of name) {

    console.log(character);

}


// 🟠 TASK 11 — ARRAY VALUES
console.log("===== TASK 11 =====");

let fruits = [
    "apple",
    "orange",
    "banana",
    "mango",
    "grapes"
];

for (let fruit of fruits) {

    console.log(fruit);

}


// 🟠 TASK 12 — STUDENT NAMES
console.log("===== TASK 12 =====");

let students = [
    "Arun",
    "Priya",
    "Rahul",
    "Sneha",
    "Kiran"
];

for (let student of students) {

    console.log("Student: " + student);

}


// 🔴 TASK 13 — EMPLOYEE OBJECT
console.log("===== TASK 13 =====");

let employee = {

    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"

};

for (let key in employee) {

    console.log(key + " " + employee[key]);

}


// 🔴 TASK 14 — PRODUCT OBJECT
console.log("===== TASK 14 =====");

let product = {

    productName: "Laptop",
    price: 50000,
    brand: "Dell",
    category: "Electronics",
    stock: 10

};

for (let key in product) {

    console.log(key + " " + product[key]);

}


// 🟡 TASK 15 — SIMPLE FUNCTION
console.log("===== TASK 15 =====");

function welcome() {

    console.log("Welcome to JavaScript");

}

welcome();
welcome();
welcome();


// 🟡 TASK 16 — FUNCTION WITH PARAMETER
console.log("===== TASK 16 =====");

function greet(name) {

    console.log("Hello " + name);

}

greet("Naveen");
greet("Arun");
greet("Priya");


// 🟡 TASK 17 — MULTIPLE PARAMETERS
console.log("===== TASK 17 =====");

function student(name, age, department) {

    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Department: " + department);

}

student("Arun", 21, "ECE");

student("Priya", 22, "CSE");

student("Rahul", 20, "ISE");


// 🔵 TASK 18 — ADDITION FUNCTION
console.log("===== TASK 18 =====");

function add(a, b) {

    return a + b;

}

let result = add(10, 20);

console.log(result);


// 🔵 TASK 19 — SALARY
console.log("===== TASK 19 =====");

function salary(amount) {

    return amount;

}

let salaryResult = salary(50000);

console.log(salaryResult);


// 🟡 TASK 20 — BONUS CALCULATOR
console.log("===== TASK 20 =====");

function bonus(salary, bonusAmount) {

    return salary + bonusAmount;

}

let total = bonus(50000, 5000);

console.log("Total Salary =", total);


// 🟣 TASK 21 — DEFAULT PARAMETER
console.log("===== TASK 21 =====");

function employeeDetails(name, role = "Developer") {

    console.log("Name: " + name);
    console.log("Role: " + role);

}

employeeDetails("Arun");

employeeDetails("Priya", "Designer");


// 🔥 TASK 22 — NAMED FUNCTION
console.log("===== TASK 22 =====");

function square(number) {

    return number * number;

}

console.log(square(2));
console.log(square(5));
console.log(square(10));
console.log(square(7));
console.log(square(8));


// 🔥 TASK 23 — ANONYMOUS FUNCTION
console.log("===== TASK 23 =====");

let calculate = function(a, b) {

    return a + b;

};

let calculateResult = calculate(10, 20);

console.log(calculateResult);


// 🔥 TASK 24 — ARROW FUNCTION
console.log("===== TASK 24 =====");

let multiply = (a, b) => {

    return a * b;

};

let multiplicationResult = multiply(5, 4);

console.log(multiplicationResult);


// 🔴 TASK 25 — SCOPE
console.log("===== TASK 25 =====");

function test() {

    if (true) {

        var x = 10;
        let y = 20;
        const z = 30;

        console.log(x);
        console.log(y);
        console.log(z);

    }

    // var can be accessed outside the block
    console.log(x);

    // y and z cannot be accessed here
    // console.log(y);
    // console.log(z);

}

test();


// 🟠 TASK 26 — HOISTING WITH VAR
console.log("===== TASK 26 =====");

console.log(hoistA);

var hoistA = 10;


// 🟠 TASK 27 — HOISTING WITH LET
console.log("===== TASK 27 =====");

// This will give ReferenceError
// because let has Temporal Dead Zone.

// console.log(hoistB);
// let hoistB = 20;


// 🟠 TASK 28 — HOISTING WITH CONST
console.log("===== TASK 28 =====");

// This will give ReferenceError
// because const has Temporal Dead Zone.

// console.log(hoistC);
// const hoistC = 30;


// 🟢 TASK 29 — IIFE
console.log("===== TASK 29 =====");

(function() {

    console.log("Welcome to JavaScript");

})();


(function(product, discount) {

    console.log(
        product + " has " + discount + "% discount"
    );

})("Laptop", 20);


// 🔵 TASK 30 — CALLBACK / HIGHER ORDER FUNCTION
console.log("===== TASK 30 =====");

function welcomeMessage() {

    console.log("Welcome");

}

function execute(callback) {

    callback();

}

execute(welcomeMessage);


// 🟣 TASK 31 — GENERATOR FUNCTION
console.log("===== TASK 31 =====");

function* cashback() {

    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";

}

let cashbackResult = cashback();

for (let value of cashbackResult) {

    console.log(value);

}


// ======================================================
// 🏆 TASK 32 — EMPLOYEE MANAGEMENT SYSTEM
// ======================================================

console.log("===== TASK 32 =====");


// Employee data

let employees = [

    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },

    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },

    {
        name: "Rahul",
        age: 28,
        department: "IT",
        role: "Team Lead",
        salary: 50000
    },

    {
        name: "Sneha",
        age: 26,
        department: "Finance",
        role: "Accountant",
        salary: 38000
    }

];


// 1. FOR...OF
// Print every employee

console.log("----- ALL EMPLOYEES -----");

for (let employee of employees) {

    console.log("Name:", employee.name);
    console.log("Age:", employee.age);
    console.log("Department:", employee.department);
    console.log("Role:", employee.role);
    console.log("Salary:", employee.salary);

    console.log("--------------------");

}


// 2. FOR...IN
// Print keys and values

console.log("----- KEYS AND VALUES -----");

for (let employee of employees) {

    for (let key in employee) {

        console.log(key + ": " + employee[key]);

    }

    console.log("--------------------");

}


// 3 & 4. FUNCTION WITH PARAMETERS

console.log("----- EMPLOYEE FUNCTION -----");

function displayEmployee(
    name,
    age,
    department,
    role,
    salary
) {

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("Role:", role);
    console.log("Salary:", salary);

    console.log("--------------------");

}


for (let employee of employees) {

    displayEmployee(
        employee.name,
        employee.age,
        employee.department,
        employee.role,
        employee.salary
    );

}


// 5. RETURN
// Function returns salary

console.log("----- EMPLOYEE SALARY -----");

function getSalary(employee) {

    return employee.salary;

}


for (let employee of employees) {

    let employeeSalary = getSalary(employee);

    console.log(
        employee.name + " Salary = " + employeeSalary
    );

}


// 6. CONDITION
// Check salary >= 40000

console.log("----- SALARY CHECK -----");

for (let employee of employees) {

    if (employee.salary >= 40000) {

        console.log(
            employee.name + " has salary >= 40000"
        );

    } else {

        console.log(
            employee.name + " has salary < 40000"
        );

    }

}


// 7. ARROW FUNCTION
// Calculate yearly salary

console.log("----- YEARLY SALARY -----");

let yearlySalary = (salary) => {

    return salary * 12;

};


for (let employee of employees) {

    let yearly = yearlySalary(employee.salary);

    console.log(
        employee.name + " Yearly Salary = " + yearly
    );

}


// 8. GENERATOR
// Employee benefits

console.log("----- EMPLOYEE BENEFITS -----");

function* benefits() {

    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";

}


let employeeBenefits = benefits();

for (let benefit of employeeBenefits) {

    console.log(benefit);

}


// ======================================================
// END OF ALL 32 TASKS
// ======================================================

console.log("===== ALL TASKS COMPLETED =====");
```
