// Main Advertisement

// main sliding in start
var swiper = new Swiper('.image-slider', {
    slidesPerView: 1, // Show one slide at a time
    spaceBetween: 0, // No space between slides
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Make pagination bullets clickable
    },
    navigation: {
        nextEl: '.custom-next-button', // Custom class for the next button
        prevEl: '.custom-prev-button', // Custom class for the previous button
    },
    loop: true, // Enable loop mode for continuous sliding
    centeredSlides: false, // Ensure slides are aligned from right to left
    initialSlide: 0, // Start with the first slide
    autoplay: {
        delay: 5000, // Delay between slides in milliseconds (5 seconds)
        disableOnInteraction: false, // Continue autoplay after user interactions
    },
});


//-----------------------------------------------------------------------

// shop by category sliding
const carouselInner = document.getElementById('carousel-inner');
const prevButton = document.getElementById('prev-slide');
const nextButton = document.getElementById('next-slide');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;

// Update active dot based on current slide
function updateActiveDot() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Next slide function
nextButton.addEventListener('click', function() {
    if (currentSlide < 1) { // 0 and 1 for two slides
        currentSlide++;
        carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateActiveDot();
    }
});

// Previous slide function
prevButton.addEventListener('click', function() {
    if (currentSlide > 0) {
        currentSlide--;
        carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateActiveDot();
    }
});

// Handle dot clicks
dots.forEach((dot) => {
    dot.addEventListener('click', function() {
        const slideIndex = parseInt(this.getAttribute('data-slide'));
        if (slideIndex !== currentSlide) {
            currentSlide = slideIndex;
            carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
            updateActiveDot();
        }
    });
});

// Initialize the first dot as active
updateActiveDot();  

//------------------------------------------------------------------------

// Featured Product section sliding
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slide = document.querySelector('.featured-products-slide');
    const groups = document.querySelectorAll('.featured-products-group');
    const paginationDots = document.querySelector('.featured-pagination-dots'); // Updated class name
    let currentIndex = 0;

    // Create pagination dots
    groups.forEach((_, index) => {
        const dot = document.createElement('span');
        if (index === 0) dot.classList.add('active'); // Set the first dot as active
        dot.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
        paginationDots.appendChild(dot);
    });

    function showSlide(index) {
        const slideWidth = slide.offsetWidth / groups.length;
        slide.style.transform = `translateX(-${index * slideWidth}px)`;
        
        // Update active dot
        paginationDots.querySelectorAll('span').forEach((dot, dotIndex) => {
            dot.classList.toggle('active', dotIndex === index);
        });
    }

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            showSlide(currentIndex);
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentIndex < groups.length - 1) {
            currentIndex++;
            showSlide(currentIndex);
        }
    });

    // Initialize display
    showSlide(currentIndex);
});


//-----------------------------------------------------------------------------------
let products = {}; // Initialize an empty object to store products

fetch('static/products.json') // Path to your json file
    .then(response => response.json())
    .then(data => {
        products = data.products;
          // The rest of your JavaScript code that relies on `products` goes here
        // Function to set the product availability
        function setAvailabilityText(availability) {
        const availabilityElement = document.getElementById('widget-product-availability');
        availabilityElement.textContent = availability; // Set text
        if (availability === "In Stock") {
            availabilityElement.className = "in-stock"; // Apply green class
        } else {
            availabilityElement.className = "out-of-stock"; // Apply red class
        }
    }

    // Event listener for opening the widget from the featured product section (without sizes)
    document.querySelectorAll('.featured-product').forEach(product => {
        product.addEventListener('click', function() {
            const productId = this.id; // Get the ID of the clicked product
            const productDetails = products[productId]; // Fetch the details from the object

            // Populate the widget
            document.getElementById('widget-product-name').textContent = productDetails.name;
            document.getElementById('widget-product-price').innerHTML = `Rs. ${productDetails.price} <span class="original-price">(Original Price: Rs. ${productDetails.originalPrice})</span>`;
            document.getElementById('widget-product-description').textContent = productDetails.description;
            document.getElementById('widget-product-image').src = productDetails.image;
        
            // Set availability text
            setAvailabilityText(productDetails.availability);

            // Hide size options for featured products
            document.querySelector('.size').style.display = 'none';

            // Show the widget
            document.getElementById('product-widget').style.display = 'block';

            // Set initial quantity to 1
            document.getElementById('quantity-input').value = 1;
        });
    });

    // Event listener for opening the widget from the product grid cards (with sizes)
    document.querySelectorAll('.product-card-container').forEach(product => {
        product.addEventListener('click', function() {
            const productId = this.id; // Get the ID of the clicked product
            const productDetails = products[productId]; // Fetch the details from the object

            // Populate the widget
            document.getElementById('widget-product-name').textContent = productDetails.name;
            document.getElementById('widget-product-price').innerHTML = `Rs. ${productDetails.price} <span class="original-price">(Original Price: Rs. ${productDetails.originalPrice})</span>`;
            document.getElementById('widget-product-description').textContent = productDetails.description;
            document.getElementById('widget-product-image').src = productDetails.image;
        
            // Set availability text
            setAvailabilityText(productDetails.availability);

            // Show size options for product card containers
            document.querySelector('.size').style.display = 'flex';

            // Show the widget
            document.getElementById('product-widget').style.display = 'block';

            // Set initial quantity to 1
            document.getElementById('quantity-input').value = 1;
        });
    });

    // Prevent multiple event listeners by checking if they have already been added
    if (!document.getElementById('increase-quantity').dataset.listenerAdded) {
        // Event listener for quantity increment
        document.getElementById('increase-quantity').addEventListener('click', function() {
            let quantityInput = document.getElementById('quantity-input');
            let currentQuantity = parseInt(quantityInput.value);
            quantityInput.value = currentQuantity + 1; // Increase the value by 1
        });

        // Event listener for quantity decrement
        document.getElementById('decrease-quantity').addEventListener('click', function() {
            let quantityInput = document.getElementById('quantity-input');
            let currentQuantity = parseInt(quantityInput.value);
            if (currentQuantity > 1) {
                quantityInput.value = currentQuantity - 1; // Decrease the value by 1, but not below 1
            }
        });

        // Mark that listeners have been added to prevent duplicates
        document.getElementById('increase-quantity').dataset.listenerAdded = true;
        document.getElementById('decrease-quantity').dataset.listenerAdded = true;
    }

    // Close widget functionality
    document.getElementById('close-widget').addEventListener('click', function() {
        document.getElementById('product-widget').style.display = 'none';
    });
    })
    .catch(error => console.error('Error loading products:', error));




// parallax functions
document.addEventListener('DOMContentLoaded', function() {
    const texts = [
        document.querySelector('.left-top .parallax-text'),
        document.querySelector('.left-bottom .parallax-text'),
        document.querySelector('.right-top .parallax-text'),
        document.querySelector('.right-bottom .parallax-text')
    ];

    let currentIndex = 0;
    let isAnimating = false;

    const showTextSequentially = (index) => {
        if (index < texts.length) {
            const text = texts[index];
            text.classList.remove('hidden');
            text.classList.add('visible');
            setTimeout(() => showTextSequentially(index + 1), 600); // Show the next text after a delay
        } else {
            isAnimating = false; // Reset animation state after the sequence completes
        }
    };

    const hideTextSequentially = (index) => {
        if (index >= 0) {
            const text = texts[index];
            text.classList.remove('visible');
            text.classList.add('hidden');
            setTimeout(() => hideTextSequentially(index - 1), 600); // Hide the previous text after a delay
        } else {
            isAnimating = false; // Reset animation state after the sequence completes
        }
    };

    const handleScroll = () => {
        const viewportHeight = window.innerHeight;
        const section = document.querySelector('.parallax-section');
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < viewportHeight * 0.75 && !isAnimating) {
            if (currentIndex === 0) {
                isAnimating = true;
                showTextSequentially(currentIndex);
                currentIndex = texts.length; // Prevents re-triggering the animation
            }
        } else if (currentIndex === texts.length && !isAnimating) {
            isAnimating = true;
            hideTextSequentially(currentIndex - 1);
            currentIndex = 0; // Reset index for potential future animations
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
});

//--------------------------------------------------------------


