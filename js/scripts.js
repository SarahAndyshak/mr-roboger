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
// function beepBoop(n) {
//   if (n !== 1) {
//     return n;
//   } else if (n = 1) {
//     return "Beep!";
//   }
// }

// // returns "Beep!" for n = 1, "Boop!" for n = 2 n for other values of n.
// function beepBoop(n) {
//   if (n !== 1 && n !== 2) {
//     return n;
//   } else if (n === 1) {
//     return "Beep!";
//   } else if (n === 2) {
//     return "Boop!"
//   }
// }

// returns "Won't you be my neighbor?" for n = 3 etc. Rearranged for descending order for later function
// function beepBoop(n) {
//   if (n === 3) {
//     return "Won't you be my neighbor";
//   } else if (n === 2) {
//     return "Boop!";
//   } else if (n === 1) {
//     return "Beep!";
//   } else if (n !== 1 && n !== 2 && n !== 3) {
//     return n;
//   }
// }

// update to remove unnessary statements in final else if based on yesterday's notes.
function beepBoop(n) {
  if (n === 3) {
    return "Won't you be my neighbor";
  } else if (n === 2) {
    return "Boop!";
  } else if (n === 1) {
    return "Beep!";
  } else {
    return n;
  }
}

// create an array and populate it
function beepBoop(n) {
  const outputArray = [];
  for (let i = 0; i <= n; i++) {
    if ([i] === 3) {
      outputArray.push("Won't you be my neighbor");
    } else if ([i] === 2) {
      outputArray.push("Boop!");
    } else if ([i] === 1) {
      outputArray.push("Beep!");
    } else {
      return outputArray;
    }
  }
  return outputArray;
};

// try adding continue from yesterday
function beepBoop(n) {
  const outputArray = [];
  for (let i = 0; i <= n; i++) {
    if ([i] === 3) {
      outputArray.push("Won't you be my neighbor");
    } else if ([i] === 2) {
      outputArray.push("Boop!");
    } else if ([i] === 1) {
      outputArray.push("Beep!");
    } else if ([i] !== 1 && [i] !== 2 && [i] !== 3) { // try changing this line
      return outputArray;
    }
  }
  return outputArray;
};