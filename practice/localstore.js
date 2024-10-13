const productValue = () => {
    const productName = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');
    const productText = productName.value;
    const productNumber = productQuantity.value;
    productName.value = ''
    productQuantity.value = ''
    productShowDisplay(productText, productNumber)
    setLocalStore(productText, productNumber)

}

const productShowDisplay = (product, productNumber) => {
    const productContainer = document.querySelector('#product-container');
    const li = document.createElement('li');
    li.textContent = `${product} ${productNumber}`
    productContainer.appendChild(li);

}

const getLocalStore = () => {
    let cart = {};
    const getCart = localStorage.getItem('cart');
    if (getCart) {
        cart = JSON.parse(getCart);
    }
    return cart
}
const setLocalStore = (product, quantity) => {
    const cart = getLocalStore();
    cart[product] = quantity;
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify)
}


const showLocalStoreAllDisplay = () => {
    const saveCart = getLocalStore()
    for (const product in saveCart) {
        const quantity = saveCart[product];
        productShowDisplay(product, quantity);
    }
}
showLocalStoreAllDisplay()