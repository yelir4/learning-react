// https://react.dev/learn/tutorial-tic-tac-toe#taking-turns
// "Taking turns"

// `npm install` to install dependencies
// `npm start` to start a local server
// opens in browser `localhost:3000`


// want to be able to mark `O` on the board
// prevent written squares from being rewritten

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
    // by default, `X` moves first
    // add another piece of state to the `Board`
    const [xIsNext, setXIsNext] = useState(true);

    // create array of squares, all indexes `filled` with initial value `null`
    // each entry in the array corresponds to Square[entry]
    // ex: ['O', null, 'X', 'X', null, ...] etc.
    const [squares, setSquares] = useState(Array(9).fill(null));

    // define handleClick here
    // `i` index of the square that we update
    // MAKE SURE WE FLIP THE VALUE OF `xIsNext`
    function handleClick(i)
    {
        // initial check: if box has already been marked, return early
        if (squares[i])
        {
            return; // returns if squares[i] already has a value (not null)
        }

        // `nextSquares` copy of squares array
        const nextSquares = squares.slice();

        // update `nextSquares` for the button index that was pressed
        // character depends on value of `xIsNext`
        if (xIsNext)
        {
            nextSquares[i] = "X";
        }
        else
        {
            nextSquares[i] = "O";
        }

        // `setSquares` passes the whole array size to update it
        setSquares(nextSquares);
        // set xIsNext here (flip)
        setXIsNext(!xIsNext);
    }

    return (
        <>
            {/* define instances of the `Square` component
                pass `value` which is index of array above

                `onClick` when `Button` is clicked, it asks
                the `Board` class to do something `onSquareClick`
                we use an arrow function that points to `handleClick`
                so we can pass square index to `handleClick`
                and re-render the components
                without causing an infinite loop
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
