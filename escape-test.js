// Include general test framework
var test = require('./test-fw.js');
var exp = []
var out = []

// Set up inputs and expected result
var str = ['Shahneila', 'Tariq', 'Mike', 'Jill', 'Susan', 'Bob', 'Alice', 'Kazar']
var index = Math.floor(Math.random() * 7 )
var index2 = Math.floor(Math.random() * 7 )
i0 = str[index]
i1 = str[index2]

// Expected output
exp[0] = i0 + '\'s done\nand ' + i1 + '\'s done'

// Run user code
test.test('./escape.js', [i0, i1], function(out, err) {

  if(err) {
    console.log(err)
    process.exit(1)      
  }

  // Check for no output
  if( out.length == 0) {
    console.log('There were no outputs from your code!')
    process.exit(1)  
  }

  // Evaluate result
  if(out[0] == exp[0]) {
    console.log('Well done!!')
    process.exit(0)
  }
  else {
    console.log('You got this wrong.\nWe provided you with ' + i0 + ' and ' + i1 + '.\nYou output "' + out[0] + '" instead of "' + exp[0] + '".')
    process.exit(1)    
  }

});
