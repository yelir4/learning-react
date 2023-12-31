// https://react.dev/learn/tutorial-tic-tac-toe#adding-time-travel
// adding time travel
// make it into a `Game` board

// `npm install` to install dependencies
// `npm start` to start a local server
// opens in browser `localhost:3000`


// we'll have to lift `Board` state up into the `Game`
// so we can save game history, and move backwards in time

// import the useState module from react
import { useState } from "react";

// the `Square` function is instantiated in `Board`
// `value` character to display
// `onSquareClick` event handler for onClick event (defined in `Board`)
function Square({value, onSquareClick})
{
    // return the square JSX component
    // className irrelevant in JS, just that we customize it in css
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}

// board class, holds the nine squares
function Board({ xIsNext, squares, onPlay })
{
    // define handleClick here
    // `i` index of the square that we update
    // MAKE SURE WE FLIP THE VALUE OF `xIsNext`
    function handleClick(i)
    {
        // initial check: if box has already been marked, return early
        // add here `calculateWinner` since returning early in that case
        // would also be nice (cant modify the board)
        if (calculateWinner(squares) || squares[i])
        {
            return;
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

        // call the onPlay function that `Game` passed to us
        // pass it `nextSquares` as we're ready to change state
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    // display winning text by adding `status` section to Board
    let status;
    // this only displays if there IS a winner (not if its NULL)
    // else display whose turn is next
    if (winner)
    {
        status = "Winner: " + winner;
    }
    else
    {
        status = "Next Player: " + (xIsNext ? "X" : "O");
    }

    return (
        <>
            {/* define instances of `Square` component
                pass `value` which is index of array above

                `onClick` when `Button` is clicked, it asks
                the `Board` class to do something `onSquareClick`
                we use an arrow function that points to `handleClick`
                so we pass index to `handleClick`
                and re-render the components
                without causing an infinite loop
            */}
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
            {/* display the status here
                note ` className="status" ` is nothing particular, just that
                we can customize this class's appearance in css
            */}
            <div className="status">{status}</div>
        </>
    );    
}


// `Game` top-level component
export default function Game()
{
    // define some state: X vs O turn
    const [xIsNext, setXIsNext] = useState(true);
    // array of a single item which itself is array of 9 nulls
    // that way we have an array for the nine different states
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1]; // essentially an array of 9 null indexes

    // handlePlay function, called by `Board` to update the game
    // we call it `onPlay` in board
    // passed `nextSquares` to update the state to
    function handlePlay(nextSquares)
    {
        // update `history` using updated `squares` array as a new entry
        // swap `xIsNext`
        // `...history` creates new array with all items in history, followed by `nextSquares`
        // etc "enumerate history"
        // remember `history` is an array of arrays [ [null, null, null], [X, null, null] ]
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

    // jump to different moves in the history
    function jumpTo(nextMove)
    {
        // todo
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) // only consider after blank
        {
            description = 'Go to move #' + move;
        }
        else
        {
            description = 'Go to game start';
        }
        return (
            <li>
                <button onClick={() => jumpTo(move)}>
                    {description}
                </button>
            </li>
        );
    });

    return (
        <div className="game">
            <div className="game-board">
                {/* pass properties to the Board component */}
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                {/* display the moves element we just created */}
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

// new helper function
// passed the `squares` array (board state)
// NOTE doesn't matter whether we define `calculateWinner` before or after `Board`
function calculateWinner(squares)
{
    // `lines` is an array of arrays
    // list all of the winning combinations (rows, columns, diagonals)
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // iterate through all indexes of `lines`
    for (let i=0; i<lines.length; ++i)
    {
        // temp variable which takes the values which are INDEXES
        // puts in an array that we use to compare `squares` we passed in
        const [a, b, c] = lines[i];

        // if `a` the first value is not null,
        // and its equal to b and c, we have a winner
        // return the value of `a` to show who the winner is
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        {
            return squares[a];
        }
    }

    // none of the combinations match so there's no winner
    return null;
}