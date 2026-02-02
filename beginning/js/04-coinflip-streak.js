// Coin Flip Streak Game (keep flipping until Tails)

let coinFlip; // declared only

do {
  coinFlip = Math.floor(Math.random() * 2); // 0 or 1
  if (coinFlip === 0) {
    console.log("Heads");
  } else {
    console.log("Tails");
  }
} while (coinFlip === 0); // keep going while Heads, stop when Tails
