document.addEventListener('DOMContentLoaded', function() 
{
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    function showSlide(index) 
    {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide()
     {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    function prevSlide()
     {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    showSlide(slideIndex);

    let cart = [];
    const cartIcon = document.getElementById('cartIcon');
    const cartCount = document.getElementById('cartCount');

    function addToCart(product, price)
     {
        cart.push({ product, price });
        cartCount.textContent = cart.length;
        alert(product + ' has been added to the cart.');
    }
});

