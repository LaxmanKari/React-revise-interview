/**
 * 1. JSX
 * JSX is syntax sugar. It isn’t HTML and the browser never sees it. Babel/SWC compiles it:

jsx:-
<h1 className="title">Hi {name}</h1>

// compiles to:-
jsx("h1", { className: "title", children: ["Hi ", name] })

 * That call returns a plain JS object (a React element) describing the UI. It is not a real DOM node.

Rules and gotchas:

1. Return a single root. Use <>...</> (Fragment) to avoid extra DOM nodes.
2. className and htmlFor, not class and for. Attributes are camelCase.
3. {} takes expressions only, not statements. Use ternaries, not if.
4. Styles are objects: style={{ color: "red" }}.
5. JSX escapes values by default (Cross-site scripting), which protects against XSS. dangerouslySetInnerHTML 
   bypasses that.
6. {0 && <X/>} renders 0. Use {count > 0 && <X/>}. This is a classic bug.
 */