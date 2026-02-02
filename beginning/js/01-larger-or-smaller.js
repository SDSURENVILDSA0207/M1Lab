// Larger or Smaller?

const num1 = parseInt(prompt("Enter the first integer:"), 10);
const num2 = parseInt(prompt("Enter the second integer:"), 10);

if (Number.isNaN(num1) || Number.isNaN(num2)) {
  document.write("Please refresh and enter valid integers.");
} else if (num1 > num2) {
  document.write(`The larger number is: ${num1}`);
} else if (num2 > num1) {
  document.write(`The larger number is: ${num2}`);
} else {
  document.write(`Both numbers are equal: ${num1}`);
}
