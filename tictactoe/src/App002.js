// https://react.dev/learn/tutorial-tic-tac-toe
// passing data through props

// passing the value prop to the square
function Square( {value} )
{
    function handleClick()
    {
        console.log('clicked');
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
                onClick={handleClick}
            >
                {value}
            </button>;
}


export default function Board()
{
    return (
        <>
            <div className="board-row">
                {/* call the Square function
                    returns the JSX element defined above
                    and we can pass PROPS within the element
                */}
                <Square value="1" />
                <Square value="2" />
                <Square value="3" />
            </div>
            <div className="board-row">
                <Square value="4" />
                <Square value="5" />
                <Square value="6" />
            </div>
            <div className="board-row">
                <Square value="7" />
                <Square value="8" />
                <Square value="9" />
            </div>
        </>
    )
    
}