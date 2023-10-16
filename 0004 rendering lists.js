// we can use JS for loop and array map() functions
// to render lists of components


const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
];

// our default function we export
export default function ShoppingList() {
    // inside the component,
    // use map() function to transform array of products into
    // array of <li> items
    const listItems = products.map(product =>
        // `listItems` ordered by the `key` which is the `id`
        // and the content is the title itself
        // keys hold even when we later insert, delete, or reorder items
        <li key={product.id}>
            {product.title}
        </li>
    );

    // return within the function
    return (
        <ul>{listItems}</ul>
    );
}


// console.log(listItems);