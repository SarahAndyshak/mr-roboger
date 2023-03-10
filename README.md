# _Mr. Roboger's Neighborhood_

#### By _**Sarah Andyshak**_

#### _A program to replace specific numbers with fun phrases._

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _VS Code_

## Description

_When a user inputs a number, it returns a list of values from 0 to the inputted number. Numbers containing 3 are replaced with "Won't you be my neighbor?", numbers containing 2 are replaced with  "Boop!", and numbers containing 1 are replaced by "Beep!", with the inclusion of the higher number overriding inclusion of the lower number. Code is based on lessons from Epicodus and practiced with fellow students. For process, see the tests at the bottom of this document._

## Setup/Installation Requirements

* _Open index.html in a browser, enter a number, and click the submit button._

## Known Bugs

* None as of 2:30pm on 22 January 2023.

## License

_Enjoy the site! If you have questions or suggestions for fixing or improving the code, please contact me!_

MIT License
Copyright (c) _13 January 2023_ _Sarah Andyshak_
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Test-Driven Development
Describe: beepBoop()

Test: "It should return 1 if something is inputted."
Code: 
const n = 1;
beepBoop(n);
Expected Output: 1
function beepBoop(n) {
  return 1;
}

Test: "It should return "Beep!" if n = 1."
Code:
const n = 1;
beepBoop(n);
function beepBoop(n) {
  if(n = 1) {
    return "Beep!";
  };
}

Test: "It should not return "Beep!" if n !== 1."
Code:
const n = 2;
beepBoop(2);
Fails -- returns "Beep!" for beepBoop(n), beepBoop(1), and beepBoop(2)

Test: "It should not return "Beep!" if n !== 1."
Code: 
const n = 2;
beepBoop(2);
function beepBoop(n) {
  if(n = 1) {
    return "Beep!";
  } else if (n !== 1) {
    return n;
  }
}
Fails -- still returns "Beep!" for const n = 2.

Test: "It should return 2 if const n = 2."
Code: 
const n = 2;
beepBoop(2);

Test: "It should return "Beep!" if n = 1.
Code: 
const n = 1; 
beepBoop(1);
function beepBoop(n) {
  if (n !== 1) {
    return n;
  } else if (n = 1) {
    return "Beep!";
  }
}

Test: "It should return "Beep!" if n = 1, "Boop!" for n = 2, and n for all other values of n.
Code:
const n = 1, n = 2, n = 3, in sequence
beepBoop(1); then beepBoop(2); then beepBoop(3)
Expected outcome for beepBoop(2): "Boop!"
function beepBoop(n) {
  if (n !== 1 && n !== 2) {
    return n;
  } else if (n = 1 && n !== 2) {
    return "Beep!";
  } else if (n = 2) {
    return "Boop!"
  }
}

Test: "It should return "Won't you be my neighbor?" if n = 3
Code:
const n = 1, n = 2, n = 3, n = 4 in sequence
beepBoop(1); then beepBoop(2); then beepBoop(3), then beepBoop(4)
Expected Outcome for beepBoop(3): "Won't you be my neighbor?"
function beepBoop(n) {
  if (n === 3) {
    return "Won't you be my neighbor";
  } else if (n === 2) {
    return "Boop!"
  } else if (n === 1) {
    return "Beep!";
  } else if (n !== 1 && n !== 2 && n !== 3) {
    return n;
  }
}
Updated version:
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

Test: "It should create an array and push values into the array."
Code:
const n = 1
beepBoop(1)
Expected Outcome: [0, "Beep!"] 
Actual result: returns array beginning with "Beep!" rather than 0; doesn't return any numbers after "Won't you be my neighbor?"
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

Test: "It should create an array and push values into the array."
Code:
const n = 5
beepBoop(5)
Expected Outcome: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]

Test: "It should turn outputArray into a string."
Code: 
const n = 10;
beepBoop(10);
Expected Outcome: ["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5", "6", "7", "8", "9", "10"]
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
    finalArray.push(outputArray[i].toString());
    }
    return finalArray;

  };

Test: "It will search for a "3" and return "Won't you be my neighbor?"
Code:
const n = 13;
beepBoop(13);
Expected Outcome: ["Won't you be my neighbor?"] and nothing else because everything else is a string or a string without "3."
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
    } else if (i === 2) {
      outputArray.push("Boop!");
    } else if (i === 1) {
      outputArray.push("Beep!");
    } else { 
      outputArray.push(i)
    }

    //finalArray.push(outputArray[i].toString());
    }
    return finalArray;

  };

  Test: "It will search for a "2" and return "Boop!"
  Code:
  const n = 20;
  beepBoop(20);
  Expected Outcome: ["Boop!", "Won't you be my neighbor!", 'Boop!'] for 12, 13, and 20.

  Test: "It will search for a "1" and return "Beep!"
  Code:
  const n = 23;
  beepBoop(23);
  Expected outcome: [0, 'Beep!', 'Boop!', "Won't you be my neighbor", 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', "Won't you be my neighbor!", 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Boop!', 'Boop!', 'Boop!', "Won't you be my neighbor!"]
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