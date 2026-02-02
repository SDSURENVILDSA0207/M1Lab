// Coin Flip Game Redux (10 flips)

let coinFlip; // declared only

for (let i = 0; i < 10; i++) {
  coinFlip = Math.floor(Math.random() * 2); // 0 or 1
  if (coinFlip === 0) {
    console.log("Heads");
  } else {
    console.log("Tails");
  }
}
