<h1>🌠State Changes</h1>
<div>
  <h3>1.What is state in React?</h3>

#State is a JavaScript object that holds data that can change over time in a component.

#Changing the state updates the component automatically and re-renders it on the screen.
</div>

<div>
  <h3>2. How state changes work</h3>

#When you call the setter function (e.g., setCount(5)), React:

Updates the state value.

Marks the component for re-render.

#React then re-renders the component with the new state.

#Only the component with state change is re-rendered (not the whole app).
</div>

<div>
  <h3>3. Key points about state changes</h3>

#Do not modify state directly (e.g., count = 5 → ❌). Always use the setter function (setCount).

#State updates can be asynchronous.

#You can have multiple states in one component:
</div>

<h2><b>Output</b></h2>
<img width="1918" height="1021" alt="output" src="https://github.com/user-attachments/assets/cc8f3112-cc16-4077-8299-4ea914169908" />
