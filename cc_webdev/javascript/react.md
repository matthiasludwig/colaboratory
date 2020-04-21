# React.js

Devloped by facebook:

* Fast
* Modular
* Scalable
* Flexible

JSX is an extension of Javascript:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

// Copy code here:
ReactDOM.render(<h1>Hello world</h1>,
document.getElementById('app'));
```

## Components

A component is a small resusable chunk of code that is responsible for one job (mostly rendering HTML).

Basic creation of a React Component:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(
    <MyComponentClass />,
    document.getElementById('app')
);
```

Example for an Authorization Component:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    const login = (
    <form action='#' onSubmit={this.authorize}>
        <input type="password" placeholder="Password" />
        <input type="submit"/>
    </form>
    );
    const contactInfo = (
    <ul>
      <li>
        client@example.com
      </li>
      <li>
        555.555.5555
      </li>
    </ul>
    );
    return (
      <div id="authorization">
        <h1>{(this.state.authorized ? 'Contact': 'Enter the Password')}</h1>
      {(this.state.authorized ? contactInfo: login)}
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />,
  document.getElementById('app')
);
```

## this.props

We can use the `this.props` object to pass information from one Component to another. To pass information to a Component we can do it the following way:
`<Componentname message="testmessage" />`

```javascript
// Talker.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button onClick={this.handleClick} />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);
```

```javascript
// Button.js

import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Click me!
      </button>
    );
  }
}
```

**Summary of the `props` lesson**

* Passing a prop by giving an attribute to a component instance
* Accessing a passed-in prop via this.props.prop-name
* Displaying a prop
* Using a prop to make decisions about what to display
* Defining an event handler in a component class
* Passing an event handler as a prop
* Receiving a prop event handler and attaching it to an event listener
* Naming event handlers and event handler attributes according to convention
* this.props.children
* getDefaultProps

## this.state

Opposite to `props` the `state` object is not passed in from the outside, but created within the Component.
A component decides its own state.

In React, whenever you define an event handler that uses this, you need to add `this.methodName = this.methodName.bind(this)` to your constructor function.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: green }
    this.changeColor = this.changeColor.bind(this);
  }
  
  changeColor() {
    let newColor = this.state.color == green ? yellow : green;
    this.setState({ color: newColor });
  }
  
  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));
```
