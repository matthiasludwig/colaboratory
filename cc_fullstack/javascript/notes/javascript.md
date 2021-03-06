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
* `.src` or `style` to modify the attributes src and style of an element

### Project: Chore Bot

* Follow the CSS specificity rule when defining id, class and src

## DOM Events with Javascript

* `.addEventListener('type', function);` is a universal method to add an Event Listener to a DOM Object
* `.removeEventListener('type', function)` is to remove an Event Listener after it is not needed anymore
* JavaScript stores events in Event Objects, which include properties and methods
  * `.target` to access the object that triggered the event
  * `.name` to access the name of the Event
  * `.timeStamp` to get the milliseconds from when the document was loaded when the Event was triggered
  * `.key` stores the key in the Keyboard Events

### Additional Event Types

There are additional Event types besides the `.onclick` Event. A documentation of other Events can be found in the [MDN Documentation.](https://developer.mozilla.org/en-US/docs/Web/Events)

## Handlebars.js

1. Add Handlebars.js to your HTML (For example via a CDN)
2. Create a Handlebars Script in your HTML
3. In the JS grab the innerHTML of the Script
4. Use `Handlebars.compile()` to return a templating function
5. Pass in a context to the templating function to save the returned compiled template
6. Render the compiled templated on the HTML page

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Languages</title>
    <link href="public/style.css" type="text/css" rel="stylesheet">
    <script src="handlebars.min.js"></script>
    <script id="languagesTemp" type="text/x-handlebars-template">
    {{#each languages}}
      <div class="card">
        {{#if this.modern}}
          <p>I should learn {{this.name}}.</p>
          {{else}}
            <p>When I have time, I'll learn {{this.name}}</p>
          {{/if}}
        </div>
      {{/each}}
    </script>
  </head>
  <body>
    <h1>
      Thoughts on Languages:
    </h1>
    <div id="goals">
    </div>
  <script src="public/main.js" type="text/javascript"></script>  
  </body>
</html>
```

## Intermediate Javascript

### Classes

Example of how to create a class. A class enables us to create many objects who share certain properties and methods.
**Do not include commas between methods**

```javascript
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior ++;
  }
}

const halley = new Dog('Halley');
console.log(halley.name);
console.log(halley.behavior);

halley.incrementBehavior();

console.log(halley.name);
console.log(halley.behavior);
```

#### Inheritance and static Methods

```javascript
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  
  static generatePassword() {
    return Math.floor(Math.random() * 10000);
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);
```

### Modules

Modules are reusable pieces of code that can be exported and again imported.

1. Create an object that represents the module
2. Add proporties or methods to the object
3. Export the module with `module.exports`

```javascript
let Airplane = {};

Airplane.myAirplane = "StarJet";

module.exports = Airplane;
```

Importing a module via `require('./filepath');`

```javascript
const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
}

displayAirplane();
```

### Errors and Error Handling

Possible Errors: SyntaxError, ReferenceError, TypeError. A comprehensive list can be found on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

**Example of error Handling in Javascript:**

```javascript
const const_var = "constant variable";
try {
  const_var = "new value!";
} catch(e) {
  console.log(e);
}
```

### Promises

Promises represent a the eventual outcome of an asynchronous operation.

A Promise can be one of three states:

* Pending
* Fulfilled
* Rejected

#### Example to create a Promise

```javascript
const inventory = {
  sunglasses: 0,
  pants: 1088,
  bags: 1344
};

// Write your code below:
function myExecutor(resolve, reject) {
  if (inventory.sunglasses > 0) {
    resolve("Sunglasses order processed.");
  }
  else {
    reject("That item is sold out.");
  }
};

function orderSunglasses() {
  return new Promise(myExecutor);
}

let orderPromise = orderSunglasses();

console.log(orderPromise);
```

* `setTimeout` - NodeJS function that takes a callback function and Milliseconds
* `.then` - Takes (onFullfilled, onRejected) callback functions. Always returns a promise.

Full example:

```javascript
const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:

function handleSuccess(resolvedValue) {
  console.log(resolvedValue);
}

function handleFailure(rejectingReason) {
  console.log(rejectingReason);
}

checkInventory(order).then(handleSuccess, handleFailure);

// library.js

const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};

const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let inStock = order.every(item => inventory[item[0]] >= item[1]);
            if (inStock) {
                resolve(`Thank you. Your order was successful.`);
            } else {
                reject(`We're sorry. Your order could not be completed because some items are sold out.`);
            }
        }, 1000);
    })
};

module.exports = { checkInventory };
```

`.catch()` can be used to define the "onFailure" function from `.then`:

```javascript
prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
```

`.all()` combines all Promises that can run concurrently into one promise:

```javascript
let myPromises = Promise.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]);

myPromises
  .then((arrayOfValues) => {
    console.log(arrayOfValues);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
```

### Async/Await

This enables us to write asynchronous code more easily using JS Promises. Here are the three possibilities to write asynchronous code:

1. Callback functions
2. Promises
3. async/await

As an Overview here are all three approaches shown in code:

```javascript
const fs = require('fs');
const promisifiedReadfile = require('./promisifiedReadfile');

// Here we use fs.readfile() and callback functions:
fs.readFile('./file.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  let firstSentence = data;
  fs.readFile('./file2.txt',  'utf-8', (err, data) => {
    if (err) throw err;
    let secondSentence = data;
    console.log(firstSentence, secondSentence)
  });
});

// Here we use native promises with our "promisified" version of readfile:
let firstSentence;
promisifiedReadfile('./file.txt', 'utf-8')
  .then((data) => {
    firstSentence = data;
    return promisifiedReadfile('./file2.txt', 'utf-8')
  })
  .then((data) => {
    let secondSentence = data;
    console.log(firstSentence, secondSentence)
  })
  .catch((err) => {console.log(err)});

// Here we use promisifiedReadfile() again but instead of using the native promise .then() syntax, we declare and invoke an async/await function:
async function readFiles() {
  let firstSentence = await promisifiedReadfile('./file.txt', 'utf-8')
  let secondSentence = await promisifiedReadfile('./file2.txt', 'utf-8')
  console.log(firstSentence, secondSentence)
}
readFiles()
```

* `async`-functions always return a Promise
* `await` returns the result of a Promise

## Requests

* `XMLHttpRequest()` Object (xhr) makes asynchronous Requests
* [More information about XML](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction)
* [More information about the JS Event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)

![Overview of XHR Request](../img/xhr.png)

Overview of a basic XHR 'GET' request:

```javascript
const xhr = new XMLHttpRequest();

const url = "https://api-to-call.com/endpoint";

xhr.responseType = 'json';

xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
}

xhr.open('GET', url);
xhr.send();
```

## Requests with ES6

* The `.fetch()` method contains a Request object that contains the necessary data an API needs.
* And sends the the request object to the API endpoint provided.
* Returns a promise which ultimately resolves to an response object which contains the status of the promise with information the API send back.

**Boilercode `.fetch()` code for 'GET' requests:**

```javascript
fetch("https://api-to-call.com/endpoint").then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Request failed!'); // will be executed if response.ok is falsy
},
// second function for .then() that handles errors
 networkError => {
  console.log(networkError.message);
}).then(jsonResponse => { // second then() function
  return jsonResponse;
});
```

**Boilercode `.fetch()` code for 'POST' requests:**

```javascript
fetch("https://api-to-call.com/endpoint", {method: 'POST', body: JSON.stringify({id: '200'})}).then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  return jsonResponse;
});
```

**Boilercode `.fetch()` code with async/await functions for 'GET' requests:**

```javascript
const getData = async () => {
  try {
    const response = await fetch("https://api-to-call.com/endpoint");
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error("Request failed!"); // Is only executed if first if() is not true
  } catch(error) {
    console.log(error);
  }
}
```

**Boilercode `.fetch()` code with async/await functions for 'POST' requests:**

```javascript
const getData = async () => {
  try {
    const response = await fetch("https://api-to-call.com/endpoint", {
      method: 'POST',
      body: JSON.stringify({id: 200})});
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error("Request failed!"); // Is only executed if first if() is not true
  } catch(error) {
    console.log(error);
  }
};
```
