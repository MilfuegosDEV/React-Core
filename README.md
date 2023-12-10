# React Core Concepts

React.js is a JavaScript framework used to build user interfaces.

## Get Started 📦😃

To create a React project, you can use options like [Vite](https://vitejs.dev/) or [create-react-app](https://create-react-app.dev/).

Let's see how to get started using `vite`:

```sh
$ npm create vite@latest <Your-React-Project> -- --template react
```

> After that, install all dependencies:

```sh
$ cd <Your-React-Project>
$ npm install
```

> Initialize your React app:

```sh
$ npm run dev
```

For deployment, use:

```sh
$ npm run build
```

#### Core Concepts

##### JSX (JavaScript XML)

- JSX is a syntax extension for JavaScript recommended by React. It allows you to write HTML elements and components in a syntax similar to XML or HTML within your JavaScript code.

```jsx
const element = <h1>Hello, World!</h1>;
```

##### Components:

- React applications are built using components, which are reusable and self-contained pieces of code. Components can be either functional or class-based. They receive inputs (props) and return React elements that describe the UI.

```jsx
// Functional Component
function MyFunctionalComponent(props) {
  return <div>{props.message}</div>;
}
```

```jsx
// Class Component
class MyClassComponent extends React.Component {
  render() {
    return <div>{this.props.message}</div>;
  }
}
```

##### Props (Properties)

- Props are inputs that a React component can receive. They allow the parent component to pass data to its child components. But we have

```jsx
// Parent Component
const App = () => {
  return (
    <>
      <ChildComponent message='Hello from parent!' />
      <Button>Children text</Button>
    </>
  );
};

// Child Component
const ChildComponent = (props) => {
  return <div>{props.message}</div>;
};

// You could use this way either
const Button = ({}) => <button>{children}</button>;
```

##### State

- State is an object that represents the parts of the app that can change. It is managed within a component and can be updated using the setState method. State changes trigger a re-render of the component.

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

##### Lifecycle Methods

- Class components have lifecycle methods that allow you to perform actions at different points in the component's life, such as when it is mounted, updated, or unmounted.

```jsx
class MyComponent extends React.Component {
  componentDidMount() {
    // Executes after the component is mounted to the DOM
  }

  componentDidUpdate() {
    // Executes after the component is updated
  }

  componentWillUnmount() {
    // Executes just before the component is unmounted
  }

  render() {
    // Render method
  }
}
```

##### Hooks

- Hooks are functions that let you use state and other React features in functional components. The useState hook, for example, allows functional components to manage state.

```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

These core concepts form the foundation of building React applications. Understanding how to create components, manage state and props, use JSX, and work with lifecycle methods and hooks is essential for developing robust and efficient React applications.
