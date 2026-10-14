/**
 * Lists and Keys
 */

{todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}

/**
 * What key does: it gives React a stable identity for each item, so during reconciliation it can match old items to new ones,
 *  even when they’re reordered, inserted or removed.
 * 
 * 
 * Rules:
 * Keys must be unique among siblings (not globally) and stable across renders.
 * Use a real ID from your data.
 * Don’t use Math.random(). The key changes every render, so every item remounts.
 * Don’t use the array index if the list can be reordered, filtered, or have items inserted or removed. Index is acceptable 
 * only for static lists that never change order.
 * Put the key on the outermost element returned from map (e.g., on <Fragment key=...> if you return a fragment).
 * key is not accessible as a prop inside the child. Pass the ID separately if you need it.
 */

/**
 * Why index keys break things: say you have [A, B, C] with keys 0, 1, 2, and you delete A. 
 * The list becomes [B, C] with keys 0, 1. React thinks item 0 changed from A to B, so it reuses A’s 
 * state and DOM for B. The result is wrong input values and stale state. With real IDs, React correctly sees “A was removed”.
 * 
 * Interview-worthy: changing a key forces a remount, which is a clean way to reset state: <Form key={userId} />.
 */