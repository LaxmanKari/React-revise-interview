/**
 * React Fundamentals
 */

/**
 * 1. React is a JavaScript library for building user interfaces out of reusable components.
 * 2. It's only the view layer of the application.
 * 3. Routing, data fetching and global state come from the ecosystem, 
 *    which is why it’s a “library” and not a “framework” like Angular.
 */

/**
 * Why React
 * 1. Declarative. You describe what the UI should look like for a given state, and React figures out 
 *    the DOM updates. Vanilla JS is imperative: you manually do getElementById, appendChild and so on.
 * 2. Component-based. UI is split into small, reusable, testable pieces.
 * 3. Efficient updates. The virtual DOM plus reconciliation means only the changed DOM nodes are touched.
 * 4. One-way data flow. Data goes parent → child via props, so it’s easy to trace bugs.
 * 5. Ecosystem and portability. React Native, Next.js, a huge community and a big job market.
 */

/**
 * Core concepts, in learning order
 *  1. JSX. HTML-like syntax that compiles to React.createElement calls. Expressions go in {}.
 *  2. Components. Functions that take props and return JSX. Names must be capitalized.
 *  3. Props. Read-only inputs from the parent. children is a special prop for nested content.
 *  4. State. Data that changes over time and triggers re-renders (useState).
 *  5. Events. camelCase handlers like onClick, which receive a synthetic event.
 *  6. Conditional rendering. Ternary, &&, early return.
 *  7. Lists and keys. .map() plus a stable, unique key.
 *  8. Forms. Controlled inputs (state is the source of truth) vs uncontrolled (DOM is, via refs).
 *  9. Lifting state up and composition. Shared state lives in the closest common parent. Prefer composition over inheritance.
 *  10. Hooks
 *      useState, useReducer: state
 *      useEffect, useLayoutEffect: side effects
 *      useRef: mutable value or DOM access, no re-render
 *      useContext: avoid prop drilling
 *      useMemo, useCallback: memoization
 *      Custom hooks: reusable logic
 *  11. Lifecycle. Mount, update and unmount, expressed through effects and their cleanup.
 *  12. Virtual DOM and reconciliation. Diffing the old and new trees, keys, Fiber.
 *  13. Performance. React.memo, code splitting with lazy and Suspense, virtualization.
 *  14. Advanced APIs. Refs and forwardRef, Portals, Error Boundaries, HOCs, render props.
 *  15. Ecosystem. React Router, Redux/Zustand, React Query, Next.js.
 *  16. Modern React (18/19). Concurrent rendering, transitions, automatic batching, Server Components.
 */