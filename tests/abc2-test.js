// Include general test framework
var test = require('./test-fw.js');
var exp = []
var out = []

// Setup inputs
A = Math.floor( Math.random() * 10) + 1
B = Math.floor( Math.random() * 10) + 1
C = Math.floor( Math.random() * 10) + 1

// Expected output
//exp[0] = Math.round((i0 * (i1 + i2/3)) * 1000) / 1000
exp[0] = A * (B + C/3)

// Run user code
test.test('./challenges/abc2.js', [A, B, C], function(out, err) {

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
  //out[0] = Math.round(out[0] * 1000) / 1000 
  if(out[0] == exp[0]) {
    console.log('Well done!!')
    process.exit(0)
  }
  else {
    console.log('You got this wrong. We provided a test value of ' + A + ', ' + B + ' and ' + C + '. You output ' + out[0] + ' instead of ' + exp[0] + '.')
    process.exit(1)    
  }
  
});
