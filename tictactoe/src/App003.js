// https://react.dev/learn/tutorial-tic-tac-toe
// now we've gone over passing data through properties
// now we want to import state so the squares remember
// that they have been touched
// hold on to that feeling

// `npm install` to install dependencies
// `npm start` to start a local server
// opens in browser `localhost:3000`

// import the useState module from react
import { useState } from "react";

// passing the value prop to the square
// since we have useState, we'll define it within the square function
function Square()
{
    // initial state `value` is null,
    // which we can change by calling `setValue` to change state
    const [value, setValue] = useState(null);

    // `handleClick()` when button is pressed
    // since we define it as the `onClick` in the return,
    // we tell react to re-render the `square` element
    // whenever this function is run (the button is pressed)
    function handleClick()
    {
        console.log('clicked');
        // set `value` to now be `X`
        setValue('X');
    }

    // return the button with `square` class
    // holds the `value` prop which is unique for each button
    //
    // also we add an onClick, which prints to the browser console
    // each button has different instances of handleClick so
    // they will either pile on the counter or not
    // <button className="square" onClick={handleClick}>{value}</button>
    return <button
                className="square"
                onClick={handleClick} // still need to handle the click
            >
                {value} {/* and the value still goes here */}
            </button>;
}


export default function Board()
{
    return (
        <>
            <div className="board-row">
                {/*
                    instead of calling props we will make use of reactivity, state
                    note that each button has its own state
                */}
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
            <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </>
    );    
}

// pausing here, at
// https://react.dev/learn/tutorial-tic-tac-toe#react-developer-tools