// Get input from the command line
input0 = process.argv[2]
input1 = process.argv[3]
input2 = process.argv[4]

// There's an error on this line
num = input0 + notDefinedVariable

// Some output
console.log('input0 = ' + input0)
console.log('input1 = ' + input1)
console.log('input2 = ' + input2)
console.log('num = ' + num)

