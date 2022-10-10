var removeCartItemsButton = document.getElementsByClassName('btn-danger')
console.log(removeCartItemsButton)

for (var i = 0; i < removeCartItemsButton.length; i++) {
    var button = removeCartItemsButton[i]
    button.addEventListener('click', function (event) {
        console.log('clicked')
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-item')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = priceElement.innerText
        console.log(price)
    }

}