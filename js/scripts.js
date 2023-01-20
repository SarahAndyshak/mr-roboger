// Business Logic

// //works
// function beepBoop(n) {
//   if(n = 1) {
//     return "Beep!";
//   };
// }
// // doesn't work, always returns "Beep!"
// function beepBoop(n) {
//   if(n = 1) {
//     return "Beep!";
//   } else if (n !== 1) {
//     return n;
//   }
// }

// // returns n for n, ex. n = 2 returns 2. Returns 'undefined' for n = 1.
// function beepBoop(n) {
//   if (n !== 1) {
//     return n;
//   }
// }
// returns "Beep!" for n = 1, n for other values of n.
function beepBoop(n) {
  if (n !== 1) {
    return n;
  } else if (n = 1) {
    return "Beep!";
  }
}

// returns "Beep!" for n = 1, "Boop!" for n = 2 n for other values of n.
function beepBoop(n) {
  if (n !== 1 && n !== 2) {
    return n;
  } else if (n = 1 && n !== 2) {
    return "Beep!";
  } else if (n = 2) {
    return "Boop!"
  }
}