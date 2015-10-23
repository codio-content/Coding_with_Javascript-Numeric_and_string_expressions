You will often make mistakes when writing code. You will soon get used to these, but here is how to interpret them.

Take a look at the code on the left. This shows a simple syntax error. 

Now press the button below to run the code and see the error.

{Run the code}(node run-user.js content/1-intro/error.js)

Once you have run the code, you will see the error appear.

## Interpreting the error
The error looks pretty unfriendly but the important information is really what comes first.

```
ReferenceError: notDefinedVariable is not defined
```

- `ReferenceError: notDefinedVariable is not defined` is the error message. You can see it is telling us that that the variable `notDefinedVariable` is not yet defined.

The information that comes below these initial lines is really for more advanced debugging situations and can be safely ignored for now.
