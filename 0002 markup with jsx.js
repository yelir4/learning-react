// https://react.dev/learn#writing-markup-with-jsx
// jsx is optional but mostly used for convenience
// https://react.dev/learn/installation

// stricter than HTML
// ex: <br />
// components cant return multiple JSX tags
// either wrap in shared parent like <div>..</div>
// or an empty <>...</>


function AboutPage()
{
    return (
        <>
            <h1>About</h1>
            <p>Hello There<br /> How do you do</p>
        </>
    );
}

// there are converters for porting html to jsx


// adding styles
// <img className="avatar" />
// CSS className

// then in a separate CSS file,

/*
.avatar
{
    border-radius: 50%;
}
*/


// you display data with markup
// use {} curly braces to escape back into JavaScript
// ex:
/*
return (
    <h1>{user.name}</h1>
);

// and for escaping from JSX
return (
    <img
        className="avatar"
        src={user.imageUrl}
    />
);

*/

// you can put complex expressions inside JSX curly braces
// like string concatenation

const user =
{
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

export default functoin Profile()
{
    return (
        <>
            <h1>user.name</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    );
}

// style={{}} is not a special syntax,
// rather a regular {} inside the style={} JSX curly braces
// `style` attribute used when styles depend on JS variables

// up next is https://react.dev/learn#conditional-rendering