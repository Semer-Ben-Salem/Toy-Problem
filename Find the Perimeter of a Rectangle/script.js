/*
Create a function that takes length and width and finds the perimeter of a rectangle.
Examples

findPerimeter(6, 7) ➞ 26

findPerimeter(20, 10) ➞ 60

findPerimeter(2, 9) ➞ 22
*/

function findPerimeter(length, width) {
  if (Number.isInteger(length + width) && length > 0 && width > 0) {
    return (length + width) * 2;
  }
  return 'please provide two integers greater than 0';
}
