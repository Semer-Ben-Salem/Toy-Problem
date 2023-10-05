/* 
Write a function that converts hours into seconds.
Examples

howManySeconds(2) ➞ 7200

howManySeconds(10) ➞ 36000

howManySeconds(24) ➞ 86400

Notes

    60 seconds in a minute, 60 minutes in an hour
    */

function howManySeconds(hours) {
  if (Number.isInteger(hours) && hours > 0) {
    return hours * 60 * 60;
  }
  return 'pelase provide a number greater than 0';
}
