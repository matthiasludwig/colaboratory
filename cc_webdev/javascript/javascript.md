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

#### Getters & Getters

* Declare a function like `get fullName()` to define a getter.
* Declare a function like `set fullName()` to set a variable.

Example:

```javascript
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof(num) == 'number' && num >= 0) {
      this._numOfSensors = num; // When assigning take care of '_'
    }
    else {
      console.log("Pass in a number that is greater than or equal to 0");
    }
  }
};

robot.numOfSensors = 100;
console.log(robot.numOfSensors);
```

#### Factory Functions

```javascript
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep(){
      console.log('Beep Boop');
    }
  }
}

const tinCan = robotFactory('P-500', true);
tinCan.beep();
```

#### Destructed Assignment

Example for a shorthand destructred assignment

```javascript
// Object example
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};
// Example of a destructed assignment
const { residence } = vampire;
console.log(residence); // Prints 'Transylvania'
```

## Javascript Interactive Websites

### Basics

```javascript
<script src="./script.js" defer or async></script>
```

* `defer` attribute defers the loading of the JS after the HTML has been loaded
* `async` downloads the script in the background while the HTML is parsed

### Javascript and the DOM

* `document` grants access to the root of the DOM
* `querySelector` to select a specific element by CSS selectors
* `getElementById` to select an element by CSS id
* `.innerHTML` and `.style` can modify the content and the style
* `createElement()`, `appendChild()` and `removeChild()` to create and add/remove elements
* `.onclick` to introduce interactive behaviour to elements
