//let this user enter a price
let price = prompt("Enter the price: ");

//replaces the dollar sign from the price if the user entered it
//I use parseFloat to convert the string to a number and then multiply
// by 0.9 to get the discounted price
let newPrice = parseFloat(price.replace("$", "")) * 0.9;

//prints the discounted price to the console
console.log("Your price after discount is: $" + newPrice);
