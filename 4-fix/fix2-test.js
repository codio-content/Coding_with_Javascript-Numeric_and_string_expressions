// Include general test framework
var test = require('../test-fw.js');
var exp = []
var out = []

// Setup inputs
i0 = Math.floor( Math.random() * 10) + 1
i1 = Math.floor( Math.random() * 10) + 1
i2 = Math.floor( Math.random() * 10) + 1

// Expected output
exp[0] = Math.round((i0 * (i1 + i2/3)) * 1000) / 1000

// Run user code
test.test('/home/codio/workspace/4-fix/fix2.js', [i0, i1, i2], function(out, err) {

  if(err) {
    console.log(err)
    process.exit(1)      
  }

  console.log('Well done!!')
  process.exit(0)
  
});

