The way you handle inputs and outputs is very similar to Flode.

{Run the code on the left}(node run-user.js content/1-intro/io-debug.js 6 7 8)

## Inputs
You will get input for your code from the command line. JavaScript makes this easy by providing access to the command line arguments in a List like this:
```javascript
var input0= process.argv[2]
var input1= process.argv[3]
```
*The first two elements in the `argv` list are the name of the JavaScript interpreter and the file our code is contained in.*

## Outputs
To output data, use the `console.log()` function as shown on the left. This can contain any valid JavaScript expressions.
