<h1>🚀React Component and Props</h1>

<div>
✅ What are React Components?

In React, components are like building blocks of your app. You can think of them as reusable functions that return UI elements (HTML-like code called JSX).

There are 2 main types:

1.Functional Components
2.Class Components (less common now)

function Welcome() {
  return <h1>Hello, welcome to my app!</h1>;
}

✅ What are Props?

Props = "Properties"

They allow you to pass data from one component to another (like function arguments).

  ✅ What are Props?

Props = "Properties"

They allow you to pass data from one component to another (like function arguments).
<div>

  function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Using the component
<Welcome name="Ann" />

</div>
Output: Hello, Ann!

Here, name="Ann" is a prop.

💡 Props in Arrow Function Style:

const Welcome = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};


Same result, just shorter syntax using destructuring.

Full Example – Parent & Child Components
// Parent Component
function App() {
  return (
    <div>
      <Welcome name="Ann" />
      <Welcome name="John" />
    </div>
  );
}

// Child Component
function Welcome(props) {
  return <h2>Hello, {props.name}!</h2>;
}


🟢 Output:
Hello, Ann!
Hello, John!
</div>
