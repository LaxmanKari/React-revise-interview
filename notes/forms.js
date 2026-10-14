/**
 * Forms:
 * 
 * Controlled input. React state is the source of truth:
 */

const [name, setName] = useState("");
<input value={name} onChange={e => setName(e.target.value)} />

/**
 * Each keystroke triggers onChange, then setState, then a re-render with the new value.
 * You get easy validation, formatting, and conditional disabling, because the value is always in your hands.
 * If you pass value without onChange, the input is read-only and React warns you.
 * The classic bug is value={undefined} initially, which makes it switch from uncontrolled to controlled. Initialize with "".
 */

/**
 * Uncontrolled input. The DOM holds the value, and you read it when needed:
 */

const ref = useRef();
<input defaultValue="hi" ref={ref} />
// on submit: ref.current.value

/**
 * Fewer re-renders and simpler code.
 * Use it for simple forms and for <input type="file">, which is always uncontrolled.
 */

/**
 * Other points:
 * 
 * Handle submit with <form onSubmit={handle}> and call e.preventDefault().
 * Multiple fields: use one state object plus name attributes: setForm({ ...form, [e.target.name]: e.target.value }).
 * textarea and select use value like inputs in React (not children or selected).
 * For large forms, libraries like React Hook Form use uncontrolled inputs to avoid re-render on every keystroke.
 */

/**
 * explore show vs hide using conditional rendering and using css.
 * 
 * conditional rendering - unmounts the component from the dom and removes it from memory.
 * css - hides the component from the dom but keeps it in memory.
 */