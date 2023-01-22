// Business Logic


// still in process. functions that work are not commented out for comparison.
// works
function beepBoop(n) {
  if(n = 1) {
    return "Beep!";
  };
}

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

// works - returns "Beep!" for n = 1, n for other values of n.
function beepBoop(n) {
  if (n !== 1) {
    return n;
  } else if (n = 1) {
    return "Beep!";
  }
}

// works - returns "Beep!" for n = 1, "Boop!" for n = 2 n for other values of n.
function beepBoop(n) {
  if (n !== 1 && n !== 2) {
    return n;
  } else if (n === 1) {
    return "Beep!";
  } else if (n === 2) {
    return "Boop!"
  }
}

// works - returns "Won't you be my neighbor?" for n = 3 etc. Rearranged for descending order for later function
function beepBoop(n) {
  if (n === 3) {
    return "Won't you be my neighbor";
  } else if (n === 2) {
    return "Boop!";
  } else if (n === 1) {
    return "Beep!";
  } else if (n !== 1 && n !== 2 && n !== 3) {
    return n;
  }
}

// update to remove unnessary statements in final else if based on yesterday's notes. This function does work.
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

// // create an array and populate it -- doesn't work; tried declaring outputArray outside of function, didn't work either
// function beepBoop(n) {
//   const outputArray = [];
//   for (let i = 0; i <= n; i++) {
//     if ([i] === 3) {
//       outputArray.push("Won't you be my neighbor");
//       // console.log([i], "3") not showing up in console when uncommented and tested
//     } else if ([i] === 2) {
//       outputArray.push("Boop!");
//     } else if ([i] === 1) {
//       outputArray.push("Beep!");
//     } else {
//       return outputArray;
//     }
//   }
//   return outputArray;
// };

// needed to push i into the array, wasn't happening with previous command - works!
function beepBoop(n) {
  let outputArray = [];
  for (let i = 0; i <= n; i++) {
    if (i === 3) {
      outputArray.push("Won't you be my neighbor");
    } else if (i === 2) {
      outputArray.push("Boop!");
    } else if (i === 1) {
      outputArray.push("Beep!");
    } else { outputArray.push(i)
    }
  }
  return outputArray;
  };

// // try adding continue method from yesterday's research -- doesn't help, still returns empty array
// function beepBoop(n) {
//   const outputArray = [];
//   for (let i = 0; i <= n; i++) {
//     if ([i] === 3) {
//       outputArray.push("Won't you be my neighbor");
//       continue;
//     } else if ([i] === 2) {
//       outputArray.push("Boop!");
//       continue;
//     } else if ([i] === 1) {
//       outputArray.push("Beep!");
//     } else {
//       return outputArray;
//     }
//   }
// };

// // remove continue, add back in final else if from practice yesterday -- doesn't work.
// function beepBoop(n) {
//   const outputArray = [];
//   for (let i = 0; i <= n; i++) {
//     if ([i] === 3) {
//       outputArray.push("Won't you be my neighbor");
//     } else if ([i] === 2) {
//       outputArray.push("Boop!");
//     } else if ([i] === 1) {
//       outputArray.push("Beep!");
//     } else if ([i] === n) {
//       return outputArray;
//     }
//   }
//   return outputArray;
// };

// Try changing array from const to let, remove brackets from i; works but doesn't print 0 before first number.
function beepBoop(n) {
  let outputArray = [];
  for (let i = 0; i <= n; i++) {
    if (i === 3) {
      outputArray.push("Won't you be my neighbor");
    } else if (i === 2) {
      outputArray.push("Boop!");
    } else if (i === 1) {
      outputArray.push("Beep!");
    } else if (i === n) {
      return outputArray;
    }
  }
  return outputArray;
};

// // Try adding continue back in, doesn't work.
// function beepBoop(n) {
//   let outputArray = [];
//   for (let i = 0; i <= n; i++) {
//     if (i === 3) {
//       outputArray.push("Won't you be my neighbor");
//       continue;
//     } else if (i === 2) {
//       outputArray.push("Boop!");
//       continue;
//     } else if (i === 1) {
//       outputArray.push("Beep!");
//       continue;
//     } else if (i === n) {
//       return outputArray;
//       continue;
//     }
//   }
//   return outputArray;
// };

// // create an array from version of function beepBoop() without the push methods; doesn't work
// function newArray() {
//   const newArray = [];
//   newArray.push(beepBoop(n));
// }

// add continue back in
function beepBoop(n) {
  let outputArray = [];
  for (let i = 0; i <= n; i++) {
    if (i === 3) {
      outputArray.push("Won't you be my neighbor");
    } else if (i === 2) {
      outputArray.push("Boop!");
    } else if (i === 1) {
      outputArray.push("Beep!");
    } else if (i === n) {
      return outputArray;
    }
  }
  return outputArray;
};


// Try to figure out how to change 10, 12, 13 etc into correct strings riffing on this function
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

//sample loop from lesson; trying to figure out how to combine this with above function
// const array = [1, 2, 3, 4];
// let doubledArray = [];
// for (let i = 0; i < array.length; i++) {
//     doubledArray.push(array[i] * 2);
//   }

// // still returns empty ; seems like includes only works on strings and arrays, can't figure it out.
// const array = [1, 2, 3, 4];
// let newArray = [];
// function transform() {
//   newArray.forEach(function(element) {
//     if (element.toString().includes("1")) {
//       outputArray.push("Beep!");
//     }
//   })
//   return newArray;
// }

// // tried moving array declarations into function; still returns empty array.
// function transform() {
//   const array = [1, 2, 3, 4];
//   let newArray = [];
//   newArray.forEach(function(element) {
//     if (element.toString().includes("1")) {
//       outputArray.push("Beep!");
//     }
//   })
//   return newArray;
// }

// // trying another method adapted from lessons -- returned false for both n = 3 and n = 4 and doesn't display looped??? doesn't seem to help
// const array = [1, 2, 3, 4];
// let newArray = [];

// function transform(array, n) {
//   for (let i = 0; i < array.length; i ++) {
//     if (array[i] === n) {
//       return true;
//     };
//     console.log("looped");
//   }
//   return false;
// }

// Add another array and loop to add words
function beepBoop(n) {
  let outputArray = [];
  let finalArray = [];
  for (let i = 0; i <= n; i++) {
    if (i === 3) {
      outputArray.push("Won't you be my neighbor");
    } else if (i === 2) {
      outputArray.push("Boop!");
    } else if (i === 1) {
      outputArray.push("Beep!");
    } else { 
      outputArray.push(i)
    }
  }
  //return outputArray; // not needed bc 2nd array

  for (let i = 0; i <= n; i++) {
    let strings = outputArray[i].toString(); //create a variable to store string
    if (strings.includes("3")) {
      finalArray.push("Won't you be my neighbor!");
    } else if (strings.includes("2")) {
      finalArray.push("Boop!");
    } else if (strings.includes("1")) {
      finalArray.push("Beep!");
    } else { 
      finalArray.push(outputArray[i])
    }

    //finalArray.push(outputArray[i].toString());
    }
    return finalArray;

  };


// User Logic
function handleFormSubmission(event) {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value; // this part may need to change to grab results of beepBoop()
  const beepBoop = beepBoop(n); // need to get the array produced by beepBoop() in order to append to "div#add-array"
  
  document.querySelector("div#add-array").append(beepBoop); // I think this needs to be the array returned by beepBoop(); not sure how to grab it right now
}

window.addEventListener("load", function() {
  document.querySelector("form#number-change").addEventListener("submit", handleFormSubmission);
});