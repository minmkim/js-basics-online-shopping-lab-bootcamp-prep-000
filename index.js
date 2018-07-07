var cart = []

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemDescription = { item: (Math.random() * 100) }
  cart.push(itemDescription)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  
  var returnLine = "In your cart, you have"
  var iterator = 0
  for (itemName in cart) {
    if (iterator === 0) {
      returnLine = returnLine + ` ${itemName} at ${cart[iterator][itemName]}`
      iterator++
    } else {
      returnLine = returnLine + `, ${itemName} at ${cart[iterator][itemName]}`
    }
  }
  return (returnLine + ".")
}

function total() {
  var totalCounter = 0
  var iterator = 0
  for (var itemName in cart) {
    totalCounter = totalCounter + parseInt(cart[iterator][itemName], 10)
    iterator++
  }
  return totalCounter
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
