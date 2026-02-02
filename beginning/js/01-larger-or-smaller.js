let num1 = parseInt(prompt("Enter first number:"));
let num2 = parseInt(prompt("Enter second number:"));

if (num1 > num2) {
  document.write(num1 + " is larger");
} else if (num2 > num1) {
  document.write(num2 + " is larger");
} else {
  document.write("Both numbers are equal");
}
