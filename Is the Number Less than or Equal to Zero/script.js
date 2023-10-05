/*
Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
Examples

lessThanOrEqualToZero(5) ➞ false

lessThanOrEqualToZero(0) ➞ true

lessThanOrEqualToZero(-2) ➞ true
*/

function lessThanOrEqualToZero(num) {
  if (typeof num === 'number') {
    if (num > 0) {
      return false;
    }
    return true;
  }
  return ' we accept only numbers';
}
