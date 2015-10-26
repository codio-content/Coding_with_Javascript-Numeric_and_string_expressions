
// Get input from the command line
var digit1 = process.argv[2]
var digit2 = process.argv[3]
var digit3 = process.argv[4]

// Some math
var num = digit1 * (digit2 + digit3)

// Some output
console.log('digit1 = ' + digit1)
console.log('digit2 = ' + digit2)
console.log('digit3 = ' + digit3)
console.log('num = ' + num)

// More info about command line arguments
console.log('process.argv[0] = "' + process.argv[0] + '"')
console.log('process.argv[1] = "' + process.argv[1] + '"')
