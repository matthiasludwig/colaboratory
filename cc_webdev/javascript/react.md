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

## Programming Pattern

### Stateless Components inherit from Stateful Components

* `props` should never change its data. The only way to change a prop is when the Parent props state changes.
* `setState()` changes the state of the stat object.
* Stateless Components (Child.js) inherit from Stateful Components (Parent.js)

### Child components update their parent's state

`Parent.js`

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };
    this.changeName = this.changeName.bind(this);
  }
  
  changeName(newName) {
    this.setState( {name: newName});
  }

  render() {
    return <Child name={this.state.name} onChange={this.changeName} />
  }
}

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);
```

`Child.js`

```javascript
import React from 'react';

export class Child extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }
  
  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names" onChange={this.handleChange}>
          <option value="Frarthur">
            Frarthur
          </option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
      </div>
    );
  }
}
```

### Child Components Update Siblings Components

One child to display data and another one to change data.

### Authentification and OAuth

1. Login with a service (e.g. facebook, twitter, google, ...)
2. The service displays the level of permission the requesting App wants
3. If the user agrees, he will be redirected to the app with an access token

OAuth 2 and it's implementations:

#### Client Credentials Grant

Instead of an API Key, the service returns a *client_ID* and a *client_secret*

#### Authorization Code Grant

Most commonly used by popular services.

*A user is redirected to the authenticating site, verifies the application requesting access and permissions, and is redirected back to the referring site with an authorization code.*

Then:

*The requesting application then takes this code and submits it to the authenticating API, along with the application’s client ID and client secret to receive an access token and a refresh token. This access token and refresh token are then used in the same manner as the previous flow.*

#### Implicit Grant

*The result of this interaction is an access token, and typically no refresh token. The access token is then used by application to make additional requests to the service, but is not sent to the server side of the requesting application.*
