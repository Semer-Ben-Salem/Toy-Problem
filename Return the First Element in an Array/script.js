/*
Create a function that takes an array containing only numbers and return the first element.
Examples

getFirstValue([1, 2, 3]) ➞ 1

getFirstValue([80, 5, 100]) ➞ 80

getFirstValue([-500, 0, 50]) ➞ -500
*/
function getFirstValue(arr) {
  if (Array.isArray(arr)) {
    for (const elem of arr) {
      if (typeof elem !== 'number') {
        return 'please provide only numbers';
      }
    }
    return arr[0];
  }
  return 'please input an array';
}
