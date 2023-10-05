/*
Write a function that takes an integer minutes and converts it to seconds.
Examples

convert(5) ➞ 300

convert(3) ➞ 180

convert(2) ➞ 120
*/

function convert(minutes) {
  if (Number.isInteger(minutes) && minutes >= 0) {
    return minutes * 60;
  }
  return 'you must input an integer equal or greater than 1';
}
