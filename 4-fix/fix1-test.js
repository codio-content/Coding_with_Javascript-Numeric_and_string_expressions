// Include general test framework
var test = require('../test-fw.js');
var exp = []
var out = []

// Set up inputs and expected result
var str = ['Tester', 'Another string', 'Friday', 'Cold', 'Temperature', 'Mite', 'End']
var str2 = ['Alice', 'Bob', 'Tariq', 'Shahneila', 'Susan', 'Mike', 'Calista']
var index = Math.floor(Math.random() * 6 )
var index2 = Math.floor(Math.random() * 6 )
var i0 = str[index]
var i1 = str2[index2]

// Expected output
exp[0] = i0 + ' ' + i1

// Run user code
test.test('/home/codio/workspace/4-fix/fix1.js', [i0, i1], function(out, err) {

  if(err) {
    console.log(err)
    process.exit(1)      
  }

  console.log('Well done!!')
  process.exit(0)
});
