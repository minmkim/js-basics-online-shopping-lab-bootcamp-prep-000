var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemDescription = { item: Math.random() }
  cart.push(itemDescription)
  return `${item} has been added to your cart.`
}

function viewCart() {
  var returnLine = "In your cart, you have"
  for (var i = 0; i < cart.length; i++) {
    if (i === 0) {
      console.log(`${cart[i]}`)
      returnLine = returnLine + `${cart[i]} at `
    }
    
  }
}
viewCart()

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
