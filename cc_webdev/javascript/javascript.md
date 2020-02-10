# Javascript Lessons Notes

## Higher Order Functions

Calling another (higher order) function from a current function. Arrow functions can also be callback functions.
A simple example is a timing function that invokes another function and times it.

```javascript
const timeFuncRuntime = funcParameter => {
   let t1 = Date.now();
   funcParameter();
   let t2 = Date.now();
   return t2 - t1;
}

const addOneToOne = () => 1 + 1;

timeFuncRuntime(addOneToOne);
```

## Iterators

### Types of Iterators

* `.forEach()`
* `.map()`
* `.filter()`

Example Code:

```javascript
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);
```

* `findIndex()` - returns the index of the first element that evaluates to `True` of the Callback function
* `reduce()` - with the callback function `(accumulator, currentValue) => {return accumulator + currentValue}` reduces an Array with the cb funciton

[More Iterator function at MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods)

## Objects

### Object Literals

When assigning a variable with `{}` we designate an object literal.
Then it can be filled with unordered key-value pairs.

We can access the properties of an object either with dot or bracket notation.

`delete spaceship.mission` deletes a property from an object

### Advances Objects

* The keyword `this` can not be used with arrow functions.
* Privacy: Variables with a lead '_' like `_bankaccount` can not be altered directly, only reassigned. For this we need Setters and Getters
