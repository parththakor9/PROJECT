let cartCount = 0;
let cart = [];

function addToCart(product, price) 
{
    cartCount++;
    document.getElementById('cartCount').textContent = cartCount;
    cart.push({ product, price });
    console.log('Cart:', cart); 
}

function placeOrder() 
{
    if (cart.length === 0) 
        {
        alert('Your cart is empty. Please add items to the cart before placing an order.');
        return;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'order.html';
}
