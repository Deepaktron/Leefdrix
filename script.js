// Product data - Replace the image paths and product details accordingly
const products = [
    // Trending Products
    {
        name: 'Juicy Red Apples',
        image: 'static/images/apple.png',
        price: 'Rs 90.00',
        originalPrice: 'Rs 112.50',
        availability: '50 in stock',
        description: 'Fresh and juicy red apples, perfect for a healthy snack.',
        sku: '123464',
    },
    {
        name: 'Exotic Fresh Coconuts',
        image: 'static/images/coconut.png',
        price: 'Rs 260.00',
        originalPrice: 'Rs 305.00',
        availability: '30 in stock',
        description: 'Delicious and fresh coconuts, straight from the tropics.',
        sku: '123465',
    },
    {
        name: 'Sweet Seedless Grapes',
        image: 'static/images/grapes.png',
        price: 'Rs 225.00',
        originalPrice: 'Rs 250.00',
        availability: '40 in stock',
        description: 'Sweet and juicy seedless grapes, ideal for snacking.',
        sku: '123466',
    },
    {
        name: 'Tropical Ripe Guavas',
        image: 'static/images/guava.png',
        price: 'Rs 320.00',
        originalPrice: 'Rs 425.00',
        availability: '20 in stock',
        description: 'Tropical guavas with a sweet and tangy flavor.',
        sku: '123467',
    },
    {
        name: 'Succulent Fresh Shrimp',
        image: 'static/images/shrimp.png',
        price: 'Rs 750.00',
        originalPrice: 'Rs 1,000.00',
        availability: '15 in stock',
        description: 'Fresh and succulent shrimp, great for seafood dishes.',
        sku: '123468',
    },
    {
        name: 'Premium Fresh Fish',
        image: 'static/images/fish.png',
        price: 'Rs 900.00',
        originalPrice: 'Rs 1,200.00',
        availability: '25 in stock',
        description: 'High-quality fresh fish, perfect for your meals.',
        sku: '123469',
    },
    {
        name: 'Tender Chicken Breast',
        image: 'static/images/chicken.png',
        price: 'Rs 600.00',
        originalPrice: 'Rs 800.00',
        availability: '35 in stock',
        description: 'Tender and juicy chicken breast, ideal for cooking.',
        sku: '123470',
    },
    {
        name: 'Flavorful Mutton Chops',
        image: 'static/images/mutton.png',
        price: 'Rs 1,200.00',
        originalPrice: 'Rs 1,600.00',
        availability: '10 in stock',
        description: 'Flavorful mutton chops, great for grilling and stews.',
        sku: '123471',
    },
    // Fresh Arrivals
    {
        name: 'Creamy Avocados',
        image: 'static/images/avocado.png',
        price: 'Rs 80.00',
        originalPrice: 'Rs 100.00',
        availability: '12 in stock',
        description: 'Fresh creamy avocados, perfect for a healthy snack or addition to your meals.',
        sku: '123456',
    },
    {
        name: 'Tropical Pineapples',
        image: 'static/images/pineapple.png',
        price: 'Rs 170.00',
        originalPrice: 'Rs 200.00',
        availability: '10 in stock',
        description: 'Juicy pineapples sourced directly from tropical regions.',
        sku: '123457',
    },
    {
        name: 'Fresh Peaches',
        image: 'static/images/peach.png',
        price: 'Rs 135.00',
        originalPrice: 'Rs 150.00',
        availability: '8 in stock',
        description: 'Sweet and juicy peaches, harvested at the peak of ripeness.',
        sku: '123458',
    },
    {
        name: 'Zesty Kiwis',
        image: 'static/images/kiwi.png',
        price: 'Rs 75.00',
        originalPrice: 'Rs 100.00',
        availability: '20 in stock',
        description: 'Tangy and fresh kiwis, full of vitamins and flavor.',
        sku: '123459',
    },
    {
        name: 'Fresh Mussels',
        image: 'static/images/mussel.png',
        price: 'Rs 350.00',
        originalPrice: 'Rs 500.00',
        availability: '15 in stock',
        description: 'Fresh mussels, perfect for seafood lovers and gourmet dishes.',
    },
    {
        name: 'Rich Dark Chocolate',
        image: 'static/images/chocolate.png',
        price: 'Rs 225.00',
        originalPrice: 'Rs 300.00',
        availability: '50 in stock',
        description: 'Luxurious dark chocolate with a rich and intense flavor.',
        sku: '123461',
    },
    {
        name: 'Crunchy Almonds',
        image: 'static/images/almond.png',
        price: 'Rs 450.00',
        originalPrice: 'Rs 600.00',
        availability: '30 in stock',
        description: 'Crunchy and delicious almonds, perfect for snacking or cooking.',
        sku: '123462',
    },
    {
        name: 'Sweet Bananas',
        image: 'static/images/banana.png',
        price: 'Rs 60.00',
        originalPrice: 'Rs 80.00',
        availability: '25 in stock',
        description: 'Naturally sweet bananas, ideal for a quick snack or breakfast.',
        sku: '123463',
    },
];

// Object to store selected size and quantity for each product
const productSelections = {};

// Function to open the product widget with the selected product's details
function openProductWidget(index) {
    const widget = document.getElementById('product-widget');
    const product = products[index];

    // Populate the widget with product details
    document.getElementById('widget-product-name').textContent = product.name;
    document.getElementById('widget-product-image').src = product.image;
    document.getElementById('widget-product-price').textContent = product.price;
    document.getElementById('widget-product-availability').textContent = product.availability;
    document.getElementById('widget-product-description').textContent = product.description;

    // Restore previously selected size and quantity or set default values
    const selectedSize = productSelections[index]?.size || '';
    const selectedQuantity = productSelections[index]?.quantity || 1;

    // Set the quantity input to the previously selected quantity
    document.getElementById('quantity-input').value = selectedQuantity;

    // Remove the 'active' class from all size buttons and set the previously selected size
    document.querySelectorAll('.size button').forEach(button => {
        button.classList.remove('active');
        if (button.textContent === selectedSize) {
            button.classList.add('active');
        }
    });

    // Show the widget
    widget.style.display = 'block';
}

// Event listener for closing the widget
document.getElementById('close-widget').addEventListener('click', () => {
    document.getElementById('product-widget').style.display = 'none';
});

// Quantity increase button event listener
document.getElementById('increase-quantity').addEventListener('click', function() {
    let quantityInput = document.getElementById('quantity-input');
    let currentValue = parseInt(quantityInput.value);

    // Increase the value by 1
    quantityInput.value = currentValue + 1;

    // Store the updated quantity in the productSelections object
    const productIndex = getCurrentProductIndex();
    if (productIndex !== null) {
        productSelections[productIndex].quantity = quantityInput.value;
    }
});

// Quantity decrease button event listener
document.getElementById('decrease-quantity').addEventListener('click', function() {
    let quantityInput = document.getElementById('quantity-input');
    let currentValue = parseInt(quantityInput.value);

    // Decrease the value by 1, but don't go below 1
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;

        // Store the updated quantity in the productSelections object
        const productIndex = getCurrentProductIndex();
        if (productIndex !== null) {
            productSelections[productIndex].quantity = quantityInput.value;
        }
    }
});

// Size button click event listeners to handle active state
document.querySelectorAll('.size button').forEach(button => {
    button.addEventListener('click', function() {
        // Remove the 'active' class from all size buttons
        document.querySelectorAll('.size button').forEach(btn => btn.classList.remove('active'));

        // Add the 'active' class to the clicked button
        this.classList.add('active');

        // Store the selected size in the productSelections object
        const productIndex = getCurrentProductIndex();
        if (productIndex !== null) {
            productSelections[productIndex].size = this.textContent;
        }
    });
});

// Add event listeners to each product card
document.querySelectorAll('.product-card-container').forEach((card, index) => {
    card.addEventListener('click', () => {
        // Initialize selection for this product if not already done
        if (!productSelections[index]) {
            productSelections[index] = {
                size: '',
                quantity: 1
            };
        }
        openProductWidget(index);
        setCurrentProductIndex(index);
    });
});

// Helper functions to get/set the current product index
let currentProductIndex = null;
function setCurrentProductIndex(index) {
    currentProductIndex = index;
}

function getCurrentProductIndex() {
    return currentProductIndex;
}
















// Toggle Category Menu Visibility
document.addEventListener('DOMContentLoaded', () => {
    const categoryButton = document.querySelector('.category-button');
    const categoryMenu = document.querySelector('.category-menu');

    categoryButton.addEventListener('click', () => {
        categoryMenu.classList.toggle('open');
    });
});

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






// card sliding animations
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('card-slider');
    const cardContainers = Array.from(slider.children);
    const cardWidth = cardContainers[0].offsetWidth;
    const numCards = cardContainers.length;
    
    // Duplicate the cards to create an infinite loop effect
    cardContainers.forEach(card => slider.appendChild(card.cloneNode(true)));
    slider.style.width = `${cardWidth * cardContainers.length * 2}px`; // Set the width of the slider

    let currentIndex = 0;
    const cardsToSlide = 3; // Number of cards to slide at a time
    const slideDuration = 3000; // Duration for automatic sliding (3 seconds)
    let slidingInterval;

    function slide() {
        currentIndex += cardsToSlide;
        if (currentIndex >= numCards) {
            slider.style.transition = 'none'; // Disable transition for instant snap back
            slider.style.transform = `translateX(0)`;
            currentIndex = 0;
            setTimeout(() => {
                slider.style.transition = 'transform 0.5s ease'; // Re-enable transition
                slider.style.transform = `translateX(-${cardWidth * cardsToSlide}px)`; // Adjust for the first visible card
            }, 20); // Short delay to ensure the transition is applied correctly
        } else {
            slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    }

    function goToSlide(index) {
        if (index >= numCards) {
            index = 0;
        }
        if (index < 0) {
            index = numCards - 1;
        }
        slider.style.transition = 'transform 0.5s ease'; // Enable transition
        slider.style.transform = `translateX(-${index * cardWidth}px)`;
        currentIndex = index;
    }

    function startSliding() {
        slidingInterval = setInterval(slide, slideDuration); // Automatic slide every specified duration
    }

    function stopSliding() {
        clearInterval(slidingInterval); // Stop the automatic sliding
    }

    document.getElementById('next-button').addEventListener('click', () => {
        stopSliding(); // Stop automatic sliding on manual navigation
        slide();
        startSliding(); // Restart automatic sliding after manual navigation
    });

    document.getElementById('prev-button').addEventListener('click', () => {
        stopSliding(); // Stop automatic sliding on manual navigation
        if (currentIndex <= 0) {
            currentIndex = numCards - cardsToSlide;
            slider.style.transition = 'none'; // Disable transition for instant snap back
            slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            setTimeout(() => {
                slider.style.transition = 'transform 0.5s ease'; // Re-enable transition
                slider.style.transform = `translateX(-${(currentIndex - cardsToSlide) * cardWidth}px)`; // Adjust for the previous visible cards
            }, 20);
        } else {
            goToSlide(currentIndex - cardsToSlide); // Adjust to slide back by the specified number
        }
        startSliding(); // Restart automatic sliding after manual navigation
    });

    startSliding(); // Start the automatic sliding when the page loads
});





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












document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slide = document.querySelector('.featured-products-slide');
    const groups = document.querySelectorAll('.featured-products-group');
    const paginationDots = document.querySelector('.pagination-dots');
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














