
// Get input from the command line
var digit1 = process.argv[2]
var digit2 = process.argv[3]
var digit3 = process.argv[4]

// The variables digit1, digit2, and digit3 are now assigned 
// values passed into the program.

// Do some math
var num = digit1 * (digit2 + digit3)

// the variable num now contains the results of our math

// Print some output
console.log('Our Results:')
console.log('digit1 = ' + digit1)
console.log('digit2 = ' + digit2)
console.log('digit3 = ' + digit3)
console.log('num = ' + num)

