/**
 * Conditional rendering
 */

if (loading) return <Spinner />; // early return
return <div>{isAdmin ? <Admin /> : <User />}</div>; // ternary
{
  hasError && <Error />;
} // && (watch for the 0 bug)

/**
 * Returning null renders nothing, but the component is still mounted while its parent renders it. Its hooks still run.
 * false, null, undefined and true render nothing. Numbers (including 0) and strings render.
 */

// For many cases, use a lookup object instead of nested ternaries:
const views = { loading: <Spinner />, error: <Error />, ok: <Data /> };
return views[status];
