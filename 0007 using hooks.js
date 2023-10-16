// functions starting with `use` are Hooks
// hooks are more restrictive than other functions because
// you can only call them at top of components (or other hooks)

// so we can use this concept to share data between components
// moving the state up from myButton into myApp
export default function MyApp()
{
    const [count, setCount] = useState(0);

    function handleClick()
    {
        // basically the input of `setCount` becomes the new `count`
        // in effect we increment `count`
        setCount(count + 1);
    }

    return (
        <div>
            <h1>these buttons share state</h1>
            {/* we pass both the count and the onClick method to the function
                and we call these `props`*/}
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
        </div>
    )
}

function MyButton({ count, onClick })
{
    return (
        // when the button is clicked, it calls the `onClick` that was passed to it
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}