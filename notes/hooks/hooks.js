/**
 * Hooks
 * Hooks are functions whose names start with use. 
 * They let function components use React features like state, effects, context and refs.
 * Custom hooks let you reuse stateful logic without changing the component tree.
 */

/**
 * How hooks work internally (an SDE2 favourite)
 * 
 * React stores a component’s hooks as a linked list on its fiber, in call order. On each render, the 1st use... call 
 * reads slot 1, the 2nd reads slot 2, and so on. React doesn’t know hooks by name, only by position.
 * 
 * The Rules of Hooks:
 * Call hooks only at the top level. Not inside conditions, loops, or nested functions.
 * Call hooks only from function components or custom hooks.
 */