
// Get input from the command line
var digit1 = process.argv[2]
var digit2 = process.argv[3]
var digit3 = process.argv[4]

// There's an error on this line
var num = digit1 + notDefinedVariable

// Output
console.log('digit1 = ' + digit1)
console.log('digit2 = ' + digit2)
console.log('digit3 = ' + digit3)
console.log('num = ' + num)
