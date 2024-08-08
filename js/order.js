document.addEventListener('DOMContentLoaded', function()
 {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cartItems');
    
    if (cartItems.length > 0)
 {
        const ul = document.createElement('ul');
        cartItems.forEach(item => 
{
            const li = document.createElement('li');
            li.textContent = `${item.product} - $${item.price}`;
            ul.appendChild(li);
        });
        cartItemsContainer.appendChild(ul);
    } 
else 
{
        cartItemsContainer.textContent = 'Your cart is empty.';
    }
});

document.getElementById('orderForm').addEventListener('submit', function(event) 
{
    event.preventDefault();
    document.getElementById('orderForm').style.display = 'none';
    document.getElementById('orderMessage').style.display = 'block';
    localStorage.removeItem('cart');
});
