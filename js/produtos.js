let cart = JSON.parse(localStorage.getItem('cart')) || [];
let totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

function addToCart(product, price) {
    cart.push({ product, price });
    totalPrice += price;
    displayCart();
    alert(`${product} foi adicionado ao carrinho.`);
    saveCart();
}

function removeFromCart(index) {
    totalPrice -= cart[index].price;
    cart.splice(index, 1);
    displayCart();
    saveCart();
}

function clearCart() {
    cart = [];
    totalPrice = 0;
    displayCart();
    saveCart();
}

function displayCart() {
    let cartItems = document.getElementById('cart-items');
    let totalPriceElement = document.getElementById('total-price');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        let li = document.createElement('li');
        li.textContent = item.product;
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });
    totalPriceElement.textContent = `Total: R$ ${totalPrice.toFixed(2)}`;
}

function toggleCartModal() {
    let modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
