function addToCart(productName, productPrice) 
{
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = 
    {
        name: productName,
        price: productPrice,
        quantity: 1
    };
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct)
         {
        existingProduct.quantity += 1;
    } 
    else 
    {
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${productName} has been added to your cart!`);
}
function updateCartCount() 
{
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cartCount').innerText = cart.reduce((count, item) => count + item.quantity, 0);
}
document.addEventListener('DOMContentLoaded', updateCartCount);
