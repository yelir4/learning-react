// use if statements to conditionally include JSX
let content;
if (isLoggedIn)
{
    content = <AdminPanel />;
}
else
{
    content = <LoginForm />;
}

// note vanilla js i think doesnt need `;` ??
// so we need to keep the parens on the same line as `return`
// {content} depends on the bool as defined above
// i just put if(hi) so the code isnt grayed out
if(hi){
return (
    <div>
        {content}
    </div>
);
}


// OR WE can do conditions like this
<div>
    {isLoggedIn ? (
        <AdminPanel />
    ) : (
        <LoginForm />
    )}
</div>

//OR
//<div>
//    {isLoggedIn && <AdminPanel />}
//</div>

