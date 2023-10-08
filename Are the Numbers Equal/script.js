/*
Create a function that returns true when num1 is equal to num2; otherwise return false.
Examples

isSameNum(4, 8) ➞ false

isSameNum(2, 2) ➞  true

isSameNum(2, "2") ➞ false
*/

function isSameNum(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    if (num1 === num2) {
      return true;
    }
    return false;
  }
  return 'please provide two numbers';
}
