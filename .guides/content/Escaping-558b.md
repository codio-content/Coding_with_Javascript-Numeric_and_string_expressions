Sometimes we need to use special characters in our strings which JavaScript normally recognizes as code. To do this we "escape" the characters which tells JavaScript to not interpret them as code.

Press this button to run the code on the left {Run}(node run-user.js content/3-string/escape.js)

## The ' character
For example, let's consider the following string

```javascript
This is Shahneila's PC
```

We cannot code this as 

```javascript
str = 'This is Shahneila's PC'
```

as JavaScript thinks that the `'` in `Shahneila's` is the end of the string.

Instead we have to *escape* the character. This lets JavaScript know what we really intend.

```javascript
str = 'This is Shahneila\'s PC'
```

You can see how we put the `\` character before the `'`. This is known as *escaping* the character.

## Inserting a new line
Another useful scenario for escaping is when you want to insert a new line into your text.

Look at the code on the left and you can see we use the `\n` escape to achieve this.

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
