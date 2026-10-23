
// Build an array of 3 colors and print each one.

// STEP 1: Create an array called "colors" with exactly
//         three strings: "red", "green", "blue"
//         Use let to declare it.
const colors = ["red", "green", "blue"];
// STEP 2: Use a for loop to print each color.
//         Each line should say exactly:
//         "Color: red"
//         "Color: green"
//         "Color: blue"
//         Use: console.log("Color: " + colors[i])
for (let i = 0; i < colors.length; i++) {
  console.log("Color: " + colors[i]);
}
// ============================================
//  MAIN: Number Analyzer
// ============================================

const numbers = [];
for (let i=0; i<=4; i++) {
    let ber = prompt("Enter number " + (i+1));
    ber = parseFloat(ber)
    numbers.push(ber)
}
let aString = ""
for (let k=0; k<numbers.length; k++) {
    aString += numbers[k];

if (k<numbers.length -1) {
    aString += ", ";
}
}
console.log("Numbers: " + aString)
// STEP 6: Calculate the sum of all numbers.
// Use a for loop to add each number to a running total.
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
// Print:
console.log("Sum: " + sum);

// STEP 7: Calculate the average.
// Average = sum / numbers.length
let average = sum / numbers.length;
// Print:
console.log("Average: " + average);

// STEP 8: Count how many numbers are even.
// A number is even if number % 2 equals 0.
// Use a for loop and an if statement.
let count = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        count++;
    }
}
// Print:
console.log("Even count: " + count);

// STEP 9: Find the largest number.
// Start with the first number as the largest.
// Loop through the rest and update if you find a bigger one.
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
// Print:
console.log("Largest: " + largest);
// STEP 6: Calculate the sum of all numbers.
//         Use a for loop to add each number to a running total.
//         Print: console.log("Sum: " + sum)

// STEP 7: Calculate the average.
//         Average = sum / numbers.length
//         Print: console.log("Average: " + average)
//         (No rounding needed)

// STEP 8: Count how many numbers are even.
//         A number is even if number % 2 equals 0.
//         Use a for loop and an if statement.
//         Print: console.log("Even count: " + count)

// STEP 9: Find the largest number.
//         Start with the first number as the largest.
//         Loop through the rest and update if you find a bigger one.
//         Print: console.log("Largest: " + largest)
