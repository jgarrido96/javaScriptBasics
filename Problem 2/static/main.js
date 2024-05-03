

// Task 1 & 2
let num1 = 5;
let num2 = 7;

// Task 3
console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);


//Task 4
num1 = num1 + num2;
num2 = num1 + num2;

console.log("Updated num1:", num1);
console.log("Updated num2:", num2);

// Task 5
console.log("Is num1 equal to num2?", num1 == num2);
console.log("Is num1 greater than num2?", num1 > num2);
console.log("Is num1 not equal to num2?", num1 !=  num2);

// Task 6
let isPositive = 5;
let isEven = 4;

let num3 = isPositive % 2;
let num4 = isEven % 2;

console.log("Are both numbers positive?", isPositive && isEven > 0);
console.log("Is at least one number even?", num3 || num4 == 0); // This is returning me 1, which I'm taking to be true. Let me know if I'm doing something wrong!
