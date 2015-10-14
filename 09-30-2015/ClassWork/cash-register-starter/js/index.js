//save total as variable and set it to zero
//get the data from input
//input shows up on receipt as line item
//input gets added to the total
// clear input field
// WRITE CODE HERE
// To create a cash register
// A SUPER handy function that makes
// our normal values look pretty
// when we place them on the page
// function currencyFormat(number) {
//     var currency = parseFloat(number);
//     currency = currency.toFixed(2);
//     currency = '$' + currency;
//     return currency;
// }
​
var total = 0;
​
$('form').on('submit', updateReceipt);
​
function updateReceipt() {
​
    event.preventDefault();
​
    var newEntry = $('input').val();
​
    // Not using var here keeps
    // us from using a local variable
    total = parseFloat(total) + parseFloat(newEntry);
​
    $('#entries').append('<div>' + newEntry + '</div>');
    $('#total').html(total);
}