The way you handle inputs and outputs is very similar to Flode.

Click the button below to run the code on the left. The results of the program will appear just below the button.

{Run the code on the left}(node content/1-intro/io-debug.js 6 7 8)

## Inputs
You will get input for your code from the command line. JavaScript makes this easy by providing access to the command line arguments like this:

```javascript
var digit1 = process.argv[2]
var digit2 = process.argv[3]
var digit3 = process.argv[4]
```
You will learn more about how this works later. For now, we will provide this for you.

## Outputs
To output data, use the `console.log()` function as shown on the left. This can contain any valid JavaScript expressions.
