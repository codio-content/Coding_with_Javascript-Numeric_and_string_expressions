
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
      }
    }

    for (var i = 0; i < argv.length; i++) {
      input.push({ i: 0, val: argv[i]});
      
      (function(n) {
        Object.defineProperty(scope, 'input' + n, {
          get: function() {
            return input[n].val
          },
          set: function(val) {
            if(input[n].i++ > 0) {
              input[n].val = val
            }
          }
        });
      })(i);

    }

    try {
      vm.runInNewContext(data, scope)

      if(typeof cb == 'function') {
        cb(output, null);
      }
    }
    catch(e) {
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
