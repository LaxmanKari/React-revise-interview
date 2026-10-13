/**
 * State in React:
 * State is data owned by a component that changes over time. Changing it triggers a re-render.
 * const [count, setCount] = useState(0);
 */

/**
 * Key points:
 * State is a snapshot per render (we saw this in the batching question).
 * Never mutate directly. Always create a new object or array:
 * 
 * jsx
 * setUser({ ...user, age: 30 });
 * setItems([...items, newItem]);
 */

/**
 * React compares by reference (Object.is). A mutated object has the same reference, so there is no re-render.
 * Use the updater form when the next state depends on the previous: setCount(c => c + 1).
 * Lazy initial state: useState(() => expensiveCompute()) runs only on the first render.
 * Giving a function to useState is different from giving it a value. The function is called once, the value is used on every render.
 * If a value can be computed from props or state, don’t store it in state. Derive it during render.
 * Each component instance has its own state. Two <Counter /> components don’t share it.
 */