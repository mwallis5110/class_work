var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleListSubmit (event) {
    event.preventDefault();

    var item = $('input[name = "shopping-input"]').val();

    var list = $('<li>');

    list.text(item);

    shoppingListEl.append(list);

console.log(shoppingListEl);

$('inpt[type="text"]').val('');
}
// TODO: Add an event listener to the `shoppingFormEl` to handle submission

shoppingFormEl.on('submit', handleListSubmit);