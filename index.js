var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 function getRandomNumber(min, max) {
  var number = Math.random() * (max - min) + min;
  return Math.floor(number);
}
 var itemPrice = getRandomNumber(1, 100);
 var newItem = {[itemName]: itemPrice}
 cart.push(newItem);
 console.log(itemName + ' has been added to your cart.')
 return cart;
}

function viewCart() {
  // write your code here
  if (cart.length === 0){
    console.log('Your shopping cart is empty.')
  } else {
    cart = cart.map(i => )
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
