// Include general test framework
var test = require('./test-fw.js');
var exp = []
var out = []

// Set up inputs and expected result
var str = ['Tester', 'Another string', 'Friday', 'Cold', 'Temperature', 'Mite', 'End']
var index = Math.floor(Math.random() * 6 )

// Expected output
exp[0] = str[index] + ', hello!'

// Run user code
test.test('./join-string.js', [ str[index] ], function(out, err) {

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
    console.log('You got this wrong.\nWe provided a test value of ' + str[index] + '.\nYou output "' + out[0] + '" instead of "' + exp[0] + '".')
    process.exit(1)    
  }
  
});
