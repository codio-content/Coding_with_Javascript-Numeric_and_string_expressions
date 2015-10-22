
// Get input from the command line
input0 = process.argv[2]
input1 = process.argv[3]
input2 = process.argv[4]

// Some math
num = input0 * (input1 + input2)

// Some output
console.log('input0 = ' + input0)
console.log('input1 = ' + input1)
console.log('input2 = ' + input2)
console.log('num = ' + num)

// More info about command line arguments
console.log('process.argv[0] = "' + process.argv[0] + '"')
console.log('process.argv[1] = "' + process.argv[1] + '"')
