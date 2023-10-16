// sometimes we want the component to "remember" some information
// and display it

// import useState from React
import { useState } from 'react';

// now we declare a state variable within our component
function MyButton()
{
    // we get two things from useState:
    // current state `count`, and function to update the state
    // `setCount`
    // convention is [something, setSomething]
    //
    // on first display, count will be `0` because we pass `0` to useState
    const [count, setCount] = useState(0);

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}



// in the app it would look like this
export default function MyApp()
{
    return (
        <div>
            <h1>counters that update separately</h1>
            {/* each button remembers its own `count`, independent of other buttons */}
            <MyButton />
            <MyButton />
        </div>
    )
}