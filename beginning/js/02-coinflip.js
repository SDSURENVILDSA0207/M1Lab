// Coin Flip Game (Math.random)

const coinFlip = Math.random(); // 0 <= coinFlip < 1
const choice = prompt('Choose "Heads" or "Tails":')?.trim().toLowerCase();

if (choice !== "heads" && choice !== "tails") {
  alert('Invalid choice. Please enter "Heads" or "Tails".');
} else {
  const result = coinFlip < 0.5 ? "heads" : "tails";

  if (result === "heads" && choice === "heads") {
    alert("The flip was heads and you chose heads...you win!");
  } else if (result === "heads" && choice === "tails") {
    alert("The flip was heads but you chose tails...you lose!");
  } else if (result === "tails" && choice === "heads") {
    alert("The flip was tails but you chose heads...you lose!");
  } else {
    alert("The flip was tails and you chose tails...you win!");
  }
}
