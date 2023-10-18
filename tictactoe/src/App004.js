// https://react.dev/learn/tutorial-tic-tac-toe#completing-the-game
// complete the game

// `npm install` to install dependencies
// `npm start` to start a local server
// opens in browser `localhost:3000`


// we need to maintain each `Square`'s state in `Board`
// we'll have the `Board` pass properties
// so we declare the shared state within `Board` (the parent)

// import the useState module from react
import { useState } from "react";

// we pass the `value` from `Board` to `Square` here
// we are also passed `onSquareClick` from `Board`
function Square({value, onSquareClick})
{
    // return the square JSX component with {value}
    // and set `onSquareClick` to Click
    // that we are passed by `Board`
    return (
        // imagine we did this with onMouseEnter
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}

// board class, holds the nine squares
export default function Board()
{
    // create array of squares
    // all of them filled with initial value `null`
    // each entry in the array corresponds to Square[entry]
    // ex: ['O', null, 'X', 'X', null, ...] etc.
    const [squares, setSquares] = useState(Array(9).fill(null));

    // define handleClick here
    // `i` index of the square that we update
    function handleClick(i)
    {
        // make copy of squares array
        const nextSquares = squares.slice();
        // update square index
        nextSquares[i] = "X";
        // set the state of `squares` with the changes we made
        // React recognizes that component state changed
        // => re-render components that use `Board` and
        // `Squares` state
        setSquares(nextSquares);
    }

    return (
        <>
            {/* the square's value is the state from the index
                from the array we declared above

                onSquareClick -> gets an ARROW FUNCTION
                that calls `handleClick`
                we do this so we can pass square index to `handleClick`
                without having that function run EVERY time
                that the state re-renders
                causing an infinite loop
                (???)

                click -> code after `=>` runs
            */}
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </>
    );    
}

// now state management is handled by `Board` component!
// `Board` passses prop to the child `Square` component
// so they can be displayed correctly
// when `Square` is clicked, it ASKS `Board` to update
// its state.
// state change -> both `Board` and `Square` (child)
// automatically re-renders
//
// keeping all square states in `Board` helps it determine
// the winner, in the future
//
// `onSomething` for props that represent events
// `handleSomething` for function defs that handle those events



// why is immutability important
// ex: we use squares.slice() instead of modifying existing array
// benefits: "time travel", jump back to previous moves
// important for when you want to "undo" something in applications
// also avoid re-rendering parts that you dont need to