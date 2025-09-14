<h1>🚀React Component and Props</h1>

<div>
<h2>✅ What are React Components?</h2>

In React, components are like building blocks of your app. You can think of them as reusable functions that return UI elements (HTML-like code called JSX).

There are 2 main types:
<div>
1.Functional Components
2.Class Components (less common now)
</div>

<pre>
function Welcome() {
  return <h1>Hello, welcome to my app!</h1>;
}
</pre>



<h2>✅ What are Props?</h2>

Props = "Properties"

They allow you to pass data from one component to another (like function arguments).

<pre>
  function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Using the component
<Welcome name="Ann" />```
</pre>

Output: Hello, Ann!

Here, name="Ann" is a prop.

<div>
💡 <h3>Props in Arrow Function Style:</h3>

<pre>
const Welcome = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};
</pre>
</div>

Same result, just shorter syntax using destructuring.

