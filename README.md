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

Test: "It should return 1 if something is inputted.
Code: 
const number = 1;
beepBoop(number);
Expected Output: 1
function beepBoop(number) {
  return 1;
}


Test: "It should return "Beep!" if 1 is inputted.
Code: 
const number = 1;
beepBoop(1);
Expected Output: "Beep!"
function beepBoop(1)

Test: "It should return "Boop!" if 2 is inputted.
Code: beepBoop(2)
Expected Output: "Boop!"
function beepBoop() {
  let n = 1;
  return "Beep!";
  let n = 2;
  return "Boop!";
}


Test: "It should return an array of number from 0 to the user's inputted number"
Code:
Expected Output:

Test:
Code:
Expected Output: