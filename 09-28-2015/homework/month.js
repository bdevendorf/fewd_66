console.log('What month is it?');

//var toppings = ['cheese', 'olive', 'pepperoni', 'pineapple'];

//console.log(toppings[2]);

var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

console.log(month[5]);

var birthmonth = 5;
if(birthmonth < 7) {
	halfmonth = birthmonth + 6;
} else {
	halfmonth = birthmonth - 6;
}

console.log(month[halfmonth]);

var pizza = {
	timeToCook: 30,
	toppings: ['cheese','olives','pepperoni','pineapple']
};