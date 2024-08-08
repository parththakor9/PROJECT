document.addEventListener('DOMContentLoaded', function()
 {

    function updateCartCount()
     {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        document.getElementById('cartCount').innerText = cart.reduce((count, item) => count + item.quantity, 0);
    }
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event)
     {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        console.log('Form submitted:', { name, email, message });
        document.getElementById('confirmationMessage').style.display = 'block';
        contactForm.reset();
    });
    updateCartCount();
});
