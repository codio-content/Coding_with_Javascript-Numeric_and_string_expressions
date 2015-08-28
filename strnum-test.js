// Include general test framework
var test = require('./test-fw.js');
var exp = []
var out = []

// Setup inputs
i0 = Math.floor( Math.random() * 100) + 1
i1 = Math.floor( Math.random() * 100) + 1


// Expected output
exp[0] = '' + i0 + i1

// Run user code
test.test('./strnum.js', [i0, i1], function(out, err) {

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
    console.log('You got this wrong. We provided test values of ' + i0 + ' and ' + i1 + '. You output ' + out[0] + ' instead of ' + exp[0] + '.')
    process.exit(1)    
  }

});
