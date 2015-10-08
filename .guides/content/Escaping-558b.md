Now comes a few words on how to deal with strange characters that you want to insert into your strings.

Press this button to run the code on the left {Run}(node run-user.js 3-string/escape.js)

## The ' character
For example, let's consider the following string

```javascript
This is Shahneila's PC
```

We cannot code this as 

```javascript
str = 'This is Shahneila's PC'
```

as Javascript thinks that the `'` in `Shahneila's` is the end of the string.

Instead we have to *escape* the character. This let's Javascript know what we really intend.

```javascript
str = 'This is Shahneila\'s PC'
```

You can see how we put the `\` character before the `'`. This is know as *escaping* the character.

## Inserting a new line
Another useful scenario for escaping is when you want to insert and new line into your text (also know as a *carriage return* from the days of typewriters).

Look at the code on the left and you can see we use the `\n` escape to achieve this.

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
