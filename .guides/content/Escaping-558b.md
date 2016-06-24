Sometimes you will need to use special characters in your strings which JavaScript would normally recognise as code. To do this we "escape" the characters which tells JavaScript to not interpret them as code, but as a string element instead.

Press this button to run the code on the left {Run}(node content/3-string/escape.js)

## The `'` character
Look at the following string:

```javascript
This is Shahneila's PC
```

We are not able to code this as: 

```javascript
str = 'This is Shahneila's PC'
```

because JavaScript thinks that the `'` in `Shahneila's` is the end of the string.

The solution is to *escape* the character. This lets JavaScript know that we want to use the `'` as part of the string.

```javascript
str = 'This is Shahneila\'s PC'
```

You can see how we put the `\` character before the `'`. This is known as *escaping* the character.

## Inserting a new line
Another time you might find escaping useful is when you want to insert a new line into your text.

Look at the code on the left and you can see that `\n` escape is used to insert a new line.

(The `\n` for *newline* or *line feed* and `\r` for *carriage return* are from the days of electric typewriters. A *carriage return* slides the assembly back to the start of the line and *line feed* moves down one line.)

## Useful escapes
The following list shows you some typical uses of escaped characters. 

| Escape Sequence | Description |
|-|-|
|\'|	Single quotation mark|
|\"|	Double quotation mark|
|\\|	Backslash|
|\b|	Backspace|
|\f|	Form feed|
|\n|	New line|
|\r|	Carriage return|
|\t|	Horizontal tab|
