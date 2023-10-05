/*
Create a function that takes voltage and current and returns the calculated power.
Examples

circuitPower(230, 10) ➞ 2300

circuitPower(110, 3) ➞ 330

circuitPower(480, 20) ➞ 9600
*/

function circuitPower(voltage, current) {
  if (typeof (voltage + current) === 'number') {
    return voltage * current;
  }
  return 'please provide numbers';
}
