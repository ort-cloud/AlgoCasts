//* --- Directions
//* Given a string, return true if the string is a palindrome
//* or false if it is not.  Palindromes are strings that
//* form the same word if it is reversed. *Do* include spaces
//* and punctuation in determining if the string is a palindrome.
//* --- Examples:
//*   palindrome("abba") === true
//*   palindrome("abcdefg") === false

//! Solution 1. Most direct.
//* Takes in a string.
//* reversed then splits the string into individual elements,
//* then reverses the order and joins them back together
//* then return the boolean response to the question:
//* is the original string is exactly the same as it's reversed counterpart?
/* function palindrome(str) {
  const reversed = str
    .split("")
    .reverse()
    .join("");

  return str === reversed;
} */

//! Alt Solution. Not ideal. More work.
function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
