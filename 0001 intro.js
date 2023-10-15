// starting 10/13/2023
// https://react.dev/learn

// react apps are made of COMPONENTS
// component can be a BUTTON or an entire PAGE


function MyButton()
{
    return (
        <button>I'm a button</button>
    );
}

// `export default` specifies file's main component
export default function MyApp()
{
    return (
        <div>
            <h1>Welcome to my app</h1>
            {/* `MyButton` starts with a capital letter
                informs you that its a React component

                react component names start with capital,
                whereas HTML tags are lowercase */}
            <MyButton />
        </div>
    );
}

// for help with JavaScript syntax
// https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
// https://javascript.info/import-export