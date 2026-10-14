/**
 * Lifting state up
 * 
 * Siblings can’t share data directly, so move the state to their closest common parent. 
 * Pass the value down as props and a setter callback down so children can request changes.
 * This gives a single source of truth, so the views can’t disagree.
 * Rule of thumb: state as low as possible, as high as necessary. Too high causes extra re-renders and prop drilling. 
 * If state affects only one part, push it down into its own component.
 * 
 * 
 * Prop drilling
 * 
 * Passing props through layers that don’t use them, just to reach a deep child.
 * Fixes, in order of preference: composition, then Context (when many consumers at many depths need the data).
 * 
 * 
 * Composition over inheritance
 *
 * Build components by combining other components, not by class inheritance.
 * Main techniques:
 * children for wrappers like Card, Modal, Layout
 * Slot props: <Layout header={<Header />} />
 * 
 * Specialization: DangerButton renders Button with preset props
 * Also custom hooks, render props, HOCs, compound components
 * Elements passed as children are created by the parent above, so they don’t re-render when the wrapper’s own state changes.
 * 
 * 
 * Readability

 * Use composition for shallow, structural cases. Don’t build the whole tree in App.
 * Extract and name pieces, and keep each component’s JSX small.
 * Switch to Context when many components at different depths need the same data.
 * 
 * Interview one-liner: “Lift state to the closest common parent for a single source of truth, and use composition 
 * (children and slots) to keep components flexible and avoid prop drilling. For widely shared data, use Context.”
 */