const addCard = () => {
    const productName = document.getElementById('product-name').value;
    const productQuantity = document.getElementById('product-quantity').value;

    productName.value = ''
    productQuantity.value = ''
    displayProduct(productName, productQuantity);
    setCardStorage(productName, productQuantity)



}
const displayProduct = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li')
    li.innerHTML = `${product} ${quantity}`
    productContainer.appendChild(li)
}

const getLocalStoredCard = () => {
    let card = {};
    const getCard = localStorage.getItem('card');
    if (getCard) {
        card = JSON.parse(getCard)
    }
    return card
}


const setCardStorage = (product, quantity) => {
    const card = getLocalStoredCard();
    card[product] = quantity;
    const cartStringiFied = JSON.stringify(card)
    localStorage.setItem('card', cartStringiFied)

}

const displaySaveProduct = () => {
    const saveCard = setCardStorage();
    for (const product in saveCard) {
        const quantity = saveCard[product];
        displayProduct(product, quantity)
    }
}

displaySaveProduct()