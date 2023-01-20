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

* 

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

Test: "It should create an array and push values into the array.