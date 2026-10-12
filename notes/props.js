/**
 * Props
 * 1. Data flows one way, parent → child.
 * 2. Props are read-only. Never mutate them.
 * 3. children is the prop for nested JSX, and it’s the basis of composition.
 * 4. Defaults come from destructuring: ({ size = "md" }).
 * 5. Passing a function as a prop is how a child talks up to the parent (callbacks).
 * 6. Prop drilling is passing props through many layers just to reach a deep child. Context or composition fixes it.
 */

/**
 * Case 1: Reassigning a prop directly
 *         In development, React freezes the props object (Object.freeze). 
 *         Because modules run in strict mode, this throws:
           TypeError: Cannot assign to read only property 'name' of object
           In production, the freeze is skipped for performance, so it may silently “work”. 
           You can’t rely on it, and it breaks React’s model.
 */

/**
 * Case 2: Mutating a nested object or array (the dangerous one)
 * The freeze is shallow. It covers only the top-level props object, not what’s inside it.
 */

/**
 * Interview one-liner: “Props are immutable. React freezes them shallowly in development, 
 * so reassigning throws, but mutating nested objects slips through and causes stale UI and 
 * memoization bugs. Children should call a callback so the owner updates its state.”
 */

/**
 * Child comp re-renders if the parent re-renders, even if the child’s props are unchanged.
 * (Doesn't mean DOM is touched, react skips if the object is same)
 * React.memo is a HOC that memoizes the child, so it only re-renders if its props change.
 * It does a shallow comparison of the props object. If you pass a new object or array each time, 
 * it will always re-render. Use useMemo or useCallback to keep the same reference.
 */

/**
 * Re-executing the component function. That’s all “render” means in React.
 * When React renders a component, it:
 * Calls your function again with the current props and state.
 * Gets back the new element tree (the plain objects from jsx()).

 * So “re-computing” and “re-executing” are the same thing here: every line in the function body runs 
 * again, including your variables, calculations, and the JSX creation.
 */

/**
 * State survives renders. Local variables are recreated every render, but useState hands back the stored value. 
 * That’s why useState exists.
 * Expensive work reruns. A heavy calculation in the body runs on every render unless you memoize it with 
 * useMemo.
 * Functions are recreated. Handlers defined in the body are new function objects each render. 
 * That’s why useCallback exists and why memo comparisons can fail.
 * Purity. Since React may call your function multiple times (or discard a result), 
 * it must not cause side effects.

 * Interview one-liner: “Render means React calls the component function to produce a new element tree. 
 * It’s a calculation, not a DOM update. The DOM is only touched in the commit phase, and only for the 
 * differences.”
 */

/**
 * The official names
 * React’s docs describe it as three steps: Trigger → Render → Commit.
 * Trigger. Something schedules a render: the initial root.render(), or a state update (setState, 
 * dispatch) in a component.
 * Render. React calls your component functions and works out what changed.
 * Commit. React applies those changes to the DOM.
 */

/**
 * Render phase
 * Reconciliation phase	Calls components, builds the new fiber tree, diffs against the previous one	
 * Can be interrupted (in concurrent rendering)
 */

/**
 * Commit phase		
 * Applies DOM changes, runs layout effects, then schedules passive effects (useEffect)	
 * Cannot be interrupted, it’s synchronous
 */

/**
 * Commit phase sub-steps
 * The commit phase itself has three parts, which come up in deeper interviews:
 * Before mutation. Reads DOM state (e.g., getSnapshotBeforeUpdate in class components).
 * Mutation. The actual DOM updates happen.
 * Layout. useLayoutEffect runs synchronously, after the DOM is updated but before the browser paints.
 * After the browser paints, useEffect (passive effects) runs.
 

 * Why the two-phase split matters
 * The render phase must be pure, because React may pause, restart or discard it (concurrent features, 
   Strict Mode double-render).
 * The commit phase is where side effects are allowed, since it runs exactly once per committed update.

 * Interview one-liner: “React updates in two phases: the render phase, which is pure and interruptible 
 * and calculates what changed, and the commit phase, which is synchronous and applies the changes to the
 * DOM and runs effects.”
 */