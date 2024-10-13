const getInputValue = () => {
    const productName = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');
    const product = productName.value;
    const quantity = productQuantity.value;
    showDisplayProduct(product, quantity);
    setCartLocalStorage(product, quantity)
    productName.value = ''
    productQuantity.value = ''

}

const showDisplayProduct = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} ${quantity}`
    productContainer.appendChild(li)
}

const getCartLocalStorage = () => {
    let cart = {};
    const getCart = localStorage.getItem('cart');
    if (getCart) {
        cart = JSON.parse(getCart);
    }
    return cart;
}

const setCartLocalStorage = (product, quantity) => {
    const cart = getCartLocalStorage();
    cart[product] = quantity
    const stringify = JSON.stringify(cart)
    localStorage.setItem('cart', stringify)

}

const storedDataDisplayShow = () => {
    const saveCart = getCartLocalStorage()
    for (const product in saveCart) {
        const quantity = saveCart[product]
        showDisplayProduct(product, quantity);

    }

}
storedDataDisplayShow()