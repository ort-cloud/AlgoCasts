//* --- Directions
//* Given a string, return a new string with the reversed
//* order of characters
//* --- Examples
//*   reverse('apple') === 'leppa'
//*   reverse('hello') === 'olleh'
//*   reverse('Greetings!') === '!sgniteerG'

//! My Solution. Same as couse/Less verbose
/* function reverse(str) {
  return str
    .split("") //* Turns string into an array of characters
    .reverse() //* Reverses the array
    .join(""); //* Joins all elements back into a string
} */

//! Course Solution 1. Using reverse
/* function reverse(str) {
  const arr = str.split("");
  arr.reverse();
  return arr.join("");
} */

//! Course Solution 2. Using For Loop w/ for...of syntax.
/* function reverse(str) {
  let reversed = '';

  for (let character of str){
    reversed = character + reversed
  }
  return reversed
} */

//! Course Solution 3. Using reduce method.
/* function reverse(str) {
  return str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
} */

//! Course Solution 3. ES6 version.
function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}


module.exports = reverse;
