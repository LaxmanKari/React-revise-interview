/**
 * Events:
 * In web dev, events are actions or occurences in the browser that JS can detect and respond to. 
 * Examples include clicks, mouse movements, key presses, form submissions, and page loads.
 */

<button onClick={handleClick}>Save</button>

/**
 * Handlers are camelCase (onClick, onChange) and take a function, not a string.
 * Pass the function, don’t call it.
 * onClick={handle} is correct.
 * onClick={handle()} is a bug: it runs during render and passes the result to onClick.
 * To pass arguments, wrap it: onClick={() => handle(id)}.
 * The handler receives a SyntheticEvent, a cross-browser wrapper around the native event. It has the same interface: e.target,
 * e.preventDefault(), e.stopPropagation(). The native event is at e.nativeEvent.
 * Event delegation. React doesn’t attach a listener to every element. Since React 17, it attaches them to the root 
 * container and dispatches from there. (Before 17 it was document.)
 * Bubbling and capturing work as in the DOM. Use onClickCapture for the capture phase.
 * e.preventDefault() stops the browser’s default behavior (form submit, link navigation). e.stopPropagation() stops 
 * the event bubbling to parents.
 * React’s onChange fires on every keystroke for inputs, unlike the native change event, which fires on blur.
 * Event handlers are where side effects belong when caused by user actions, and they don’t need to be pure.
 */

/**
 * Explore more on events -> event propagation, event delegation, and event bubbling. 
 */