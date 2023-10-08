/*
Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

    wins get 3 points
    draws get 1 point
    losses get 0 points

Examples

footballPoints(3, 4, 2) ➞ 13

footballPoints(5, 0, 2) ➞ 15

footballPoints(0, 0, 1) ➞ 0
*/

function footballPoints(wins, draws, losses) {
  if (
    Number.isInteger(wins + losses + draws) &&
    wins >= 0 &&
    draws >= 0 &&
    losses >= 0
  ) {
    return `${wins * 3 + draws} pts`;
  }
  return 'please provide wins draws losses as integers greater or equal to 0';
}
