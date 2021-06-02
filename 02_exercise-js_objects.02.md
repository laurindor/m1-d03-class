# Exercise | Morse Code - JS Object practice

## Prompt

Given the following alphabet:

```js
{
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  v: '...-',
  x: '-..-',
  y: '-.--',
  z: '--..'
}
```

## Iteration 1): Try encoding the following strings:

```js
const firstWord = "hello world";
```

```js
const secondWord = "we love javascript";
```

## Iteration 2): Decode the following messages:

```
... .- -- ..- . .-..    -- --- .-. ... .    .. -. ...- . -. - . -..    -- --- .-. ... .    -.-. --- -.. .
```

```
-.-- --- ..- .-.  .. -. ... - .-. ..- -.-. - --- .-. ...  .-- .. ... ....  -.-- --- ..- .-.  .-  -. .. -.-. .  .-- . . -.- . -. -..
```

```
-.-- --- ..- .-.    .. -. ... - .-. ..- -.-. - --- .-. ...    .-.. --- ...- .    -.-- --- ..-
```

```
..  .-.. --- ...- .  - ---  -... .  -.-. .... .- .-.. .-.. . -. --. . -..  ... .- -.-- ...  - .... .  ... . ..  .--- . -.. -.. .- ....  -.-. .-.. .- ... ...  --- ..-.  ... . .--. - . -- -... . .-.  ... ---  .-- .  .-- .. .-.. .-..  -.-. .... .- .-.. .-.. . -. --. .  - .... . --
```

## Bonus

Ask the user if they want to encode or decode. Add the ability to take in morse code and spit out the decoded message.

#### Hints: (don't look unless you need to!)

Each letter of the alphabet is given as a key in the array.

You need to translate every letter in the input string into a bunch of dots and dashes (the value at a particular key in the object).

This repetition of the translation action implies a loop.

The data that this loops runs on, where you translate each letter into a set of dots an dashes, implies an array of characters (one element for each letter of the word- `['c','a','t']` represents the word `cat`).

You can transform a string into an array of individual characters easily in javascript:

```js
const word = "hello";
const wordArray = word.split("");
```
