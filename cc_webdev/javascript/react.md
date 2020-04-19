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
