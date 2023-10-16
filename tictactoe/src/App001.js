// https://react.dev/learn/tutorial-tic-tac-toe

// exported from CodeSandbox
// download the zip, extract it to this folder,
// then we run `npm install` to install dependencies
// and `npm start` to start a local server
// which we can open in our browser

// this is what our module `exports`
// `export` makes it available outside of this file,
// `default` tells that its the main function of the file
// which is rendered in `index.js` within the `root` class
// which is defined in `/public/index.html`
// export default function Square() {
//   // what comes after return is returned as a value to the function caller
//   // `button` JSX element, combines JavaScript and HTML tags
//   // `className="square"` is a button PROPERTY (prop)
//   return <button className="square">O</button>;
// }

// now making some changes to the above
// change the name from `Square` to `Board` since now it isnt really
// just a square
export default function Board()
{
  // we want to return more than one JSX element
  // but in actuality we are only able to return one
  // thus we use `<>`
  return (
    <>
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </>
  );
}

// ok moving on