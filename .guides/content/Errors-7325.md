You will often make mistakes when writing code. You will soon get used to this, what is important is developing the skill of learning how to understand the errors and then fix them (debugging).

Look at the code on the left. This code contains a simple syntax error. 

Now press the button below to run the code.

{Run the code}(node content/1-intro/error.js 3 4 5)

When you run the code, you will see an error appear.

## Understanding the error
The error looks quite unfriendly. However, if you read the error carefully and look back through your code, you should be able to work out what to do to fix it. Have a look at the explanation below.

This is the error message:
```
ReferenceError: digit4 is not defined
```
Let's break it down:
- `ReferenceError:` This is simply telling us that there is an error.
- `digit4 is not defined` This is telling us that that the variable `digit4` is not defined anywhere in our code although we have tried to use it.

The information that comes below these initial lines is really for more advanced debugging situations and can be safely ignored for now.
