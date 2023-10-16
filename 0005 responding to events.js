// we can declare event handler functions within our components
// and respond to events this way

function MyButton()
{
    function handleClick()
    {
        alert('you clicked me');
    }

    return (
        // note that handleClick has no parentheses
        // we only pass it down, and react calls the event handler
        // when the user presses the button
        <button onClick={handleClick}>
            Click me
        </button>
    );
}