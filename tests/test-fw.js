
var vm = require('vm');
var fs = require('fs');

var test = {
  test: function(file, argv, cb) {
    var data = fs.readFileSync(file);
    var input = [];
    var output = [];

    var scope = {
      output: function(val) {
        output.push(val);
      },
      process: {
        argv: ['javascript', file].concat(argv)
      },
      console: console
    }

    // 
    // We will replace the console.log function with one which stores the
    // console output so we can check the test. We hold a pointer to the 
    // original "normal" console.log function so we can put it back after
    // running the student code, without effecting any code that comes after.
    //
    var normalConsoleLogFunction= console.log;
    scope.console.log= function(val){
      output.push(val);
    }


    //
    // Execute the code the student has provided.
    //
    try {
      vm.runInNewContext(data, scope)

      // 
      // Put back the console.log function to the original
      //
      console.log= normalConsoleLogFunction;

      if(typeof cb == 'function') {
        cb(output, null);
      }
    }
    catch(e) {
      // 
      // Put back the console.log function to the original
      //
      console.log= normalConsoleLogFunction;

      if(typeof cb == 'function') {
        var msg = '';

        var CLIEngine = require("eslint").CLIEngine;

        var cli = new CLIEngine({
            envs: ["browser", "mocha"],
            useEslintrc: false,
            rules: {
                // semi: 2
            }
        });

        var report = cli.executeOnFiles([file]);        // console.log(report);

        if(report.errorCount) {
          for (var i = 0; i < report.results.length; i++) {
            for (var j = 0; j < report.results[i].messages.length; j++) {
              var obj = report.results[i].messages[j];

              if(msg.length > 0) {
                msg += '\n';
              }

              msg += "error: '" + obj.message + "' at line " + obj.line + ", column " + obj.column 
            }
          };
        }
        else {
          msg = e.toString()    
        }
        cb(null, msg);      
      }      
    }

    return output;
  }

}

module.exports = test;
