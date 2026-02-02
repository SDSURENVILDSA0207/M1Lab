// Countdown

const input = parseInt(prompt("Enter a number to count down from:"), 10);

if (Number.isNaN(input)) {
  console.log("Please refresh and enter a valid number.");
} else {
  for (let i = input; i >= 0; i--) {
    console.log(i);
  }
}
