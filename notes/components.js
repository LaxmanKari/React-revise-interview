/**
 * Components
 * A component is a function that takes props and returns JSX.

   jsx
     function Greeting({ name }) {
      return <h1>Hello {name}</h1>;
     }

 * 1. Capitalized names are components. Lowercase names are treated as DOM tags (known html elements to browser).
      <h1> complies to jsx("h1", { children: "Hello" }) // DOM tag
      <Greeting name="Alice" /> complies to jsx(Greeting, { name: "Alice" }) // Component
 * 2. Components should be pure: the same props and state give the same output, with no mutating outside 
      variables during render. Side effects go in event handlers or useEffect.
 * 3. Never define a component inside another component. It gets a new identity every render, 
      so React remounts it and its state is lost.
 * 4. Class components are legacy. Know the difference, but write function components.
 */


/**
 * Side effects:- First, what a pure function is: given the same inputs, it returns the same output and 
 * changes nothing outside itself.

js
// pure
function add(a, b) { return a + b; }

// not pure: it changes something outside itself
let total = 0;
function addToTotal(n) { total += n; }

 * A side effect is anything a function does besides computing its return value, meaning anything 
 * that reaches outside the function or the render:

1. Fetching data (network requests)
2. Changing the DOM manually (document.title = "...")
3. Timers (setTimeout, setInterval)
4. Subscriptions and event listeners (window.addEventListener, WebSockets)
5. Writing to localStorage
6. Logging or analytics calls
7. Mutating variables outside the component

Why React cares

 * React expects your component body (the render) to be pure, because React may call it multiple times, 
 * pause it, or throw the result away (Strict Mode double-renders on purpose in development to expose 
 * impurities). If rendering fires an API call or mutates something, you’d get duplicate requests and 
 * unpredictable bugs.


Where side effects belong:-

 * Event handlers. For effects caused by a user action (a click, a submit). This is the preferred place.
 * useEffect runs after the render is committed to the screen, so it can’t block painting, and it has a 
 * cleanup function for undoing the effect (clearing timers, removing listeners).

Interview one-liner: “Rendering must be pure, so anything that touches the outside world 
(network, DOM, timers, storage) goes into event handlers or useEffect, never directly in the component body.”
 */