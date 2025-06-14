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











// Product data
const products = {
    'product-1': {
        name: "Avocado (500g)",
        price: 80,
        originalPrice: 120,
        description: "Fresh and creamy avocados.",
        image: 'static/images/avocado.png',
        availability: "In Stock"
    },
    'product-2': {
        name: "Blueberries (250g)",
        price: 200,
        originalPrice: 250,
        description: "Sweet and juicy blueberries.",
        image: 'static/images/blueberry.png',
        availability: "Out of Stock"
    },
    'product-3': {
        name: "Sweet Potato (1kg)",
        price: 120,
        originalPrice: 150,
        description: "Nutritious and delicious sweet potatoes.",
        image: 'static/images/sweet-potato.png',
        availability: "Out of Stock"
    },
    'product-4': {
        name: "Almond Milk (1L)",
        price: 150,
        originalPrice: 190,
        description: "Creamy and dairy-free almond milk.",
        image: 'static/images/almond-milk.png',
        availability: "In Stock"
    },
    'product-5': {
        name: "Kiwi (6 pcs)",
        price: 90,
        originalPrice: 120,
        description: "Tangy and sweet kiwis.",
        image: 'static/images/kiwi.png',
        availability: "Out of Stock"
    },
    'product-6': {
        name: "Quinoa (500g)",
        price: 200,
        originalPrice: 250,
        description: "High-protein and gluten-free quinoa.",
        image: 'static/images/quinoa.png',
        availability: "In Stock"
    },
    'product-7': {
        name: "Chia Seeds (200g)",
        price: 120,
        originalPrice: 150,
        description: "Nutritious chia seeds for a healthy diet.",
        image: 'static/images/chia-seeds.png',
        availability: "In Stock"
    },
    'product-8': {
        name: "Coconut Water (500ml)",
        price: 60,
        originalPrice: 80,
        description: "Refreshing coconut water.",
        image: 'static/images/coconut-water.png',
        availability: "Out of Stock"
    },
    'product-9': {
        name: "Spinach (1kg)",
        price: 50,
        originalPrice: 70,
        description: "Fresh and healthy spinach.",
        image: 'static/images/spinach.png',
        availability: "In Stock"
    },
    'product-10': {
        name: "Tofu (250g)",
        price: 90,
        originalPrice: 120,
        description: "Versatile and protein-rich tofu.",
        image: 'static/images/tofu.png',
        availability: "In Stock"
    },
    'product-11': {
        name: "Matcha Powder (100g)",
        price: 300,
        originalPrice: 350,
        description: "Premium quality matcha powder.",
        image: 'static/images/matcha.png',
        availability: "In Stock"
    },
    'product-12': {
        name: "Dragon Fruit (1 kg)",
        price: 250,
        originalPrice: 300,
        description: "Exotic and vibrant dragon fruit.",
        image: 'static/images/dragon-fruit.png',
        availability: "In Stock"
    },
    'product-13': {
        name: "Pumpkin (1kg)",
        price: 80,
        originalPrice: 100,
        description: "Fresh and nutritious pumpkin.",
        image: 'static/images/pumpkin.png',
        availability: "In Stock"
    },
    'product-14': {
        name: "Fresh Turmeric (100g)",
        price: 60,
        originalPrice: 80,
        description: "Healthy fresh turmeric.",
        image: 'static/images/turmeric.png',
        availability: "In Stock"
    },
    'product-15': {
        name: "Lemongrass (100g)",
        price: 40,
        originalPrice: 50,
        description: "Aromatic and flavorful lemongrass.",
        image: 'static/images/lemongrass.png',
        availability: "In Stock"
    },
    'product-16': {
        name: "Fresh Ginger (200g)",
        price: 50,
        description: "Spicy and fresh ginger.",
        image: 'static/images/ginger.png',
        availability: "In Stock"
    },
    'product-17': {
        name: "Celery (1 bunch)",
        price: 60,
        originalPrice: 80,
        description: "Crisp and fresh celery.",
        image: 'static/images/celery.png',
        availability: "In Stock"
    },
    'product-18': {
        name: "Raspberries (250g)",
        price: 220,
        originalPrice: 270,
        description: "Sweet and tangy raspberries.",
        image: 'static/images/raspberry.png',
        availability: "In Stock"
    },
    'product-19': {
        name: "Mango (1kg)",
        price: 150,
        originalPrice: 200,
        description: "Sweet and juicy mangoes.",
        image: 'static/images/mango.png',
        availability: "In Stock"
    },
    'product-20': {
        name: "Peach (500g)",
        price: 120,
        originalPrice: 150,
        description: "Fresh and juicy peaches.",
        image: 'static/images/peach.png',
        availability: "In Stock"
    },
    'product-21': {
        name: "Grapes (250g)",
        price: 100,
        originalPrice: 130,
        description: "Sweet and crunchy grapes.",
        image: 'static/images/grapes.png',
        availability: "In Stock"
    },
    'product-22': {
        name: "Pineapple (1 pcs)",
        price: 70,
        originalPrice: 90,
        description: "Tropical and sweet pineapple.",
        image: 'static/images/pineapple.png',
        availability: "In Stock"
    },
    'product-23': {
        name: "Cucumber (1 pcs)",
        price: 30,
        originalPrice: 40,
        description: "Crisp and refreshing cucumber.",
        image: 'static/images/cucumber.png',
        availability: "In Stock"
    },
    'product-24': {
        name: "Cabbage (1kg)",
        price: 60,
        originalPrice: 80,
        description: "Fresh and crunchy cabbage.",
        image: 'static/images/cabbage.png',
        availability: "In Stock"
    },
    'product-25': {
        name: "Condiments (200g)",
        price: 150,
        originalPrice: 180,
        description: "A variety of flavorful condiments.",
        image: 'static/images/condiments.png',
        availability: "In Stock"
    },
    'product-26': {
        name: "Dairy Products (1L)",
        price: 60,
        originalPrice: 80,
        description: "Fresh and creamy dairy products.",
        image: 'static/images/dairy.png',
        availability: "In Stock"
    },
    'product-27': {
        name: "Dessert (500g)",
        price: 250,
        originalPrice: 300,
        description: "Delicious desserts for everyone.",
        image: 'static/images/Dessert.png',
        availability: "Out of Stock"
    },
    'product-28': {
        name: "Fresh Fish (1kg)",
        price: 400,
        originalPrice: 500,
        description: "Freshly caught fish.",
        image: 'static/images/fish.png',
        availability: "In Stock"
    },
    'product-29': {
        name: "Frozen Foods (1kg)",
        price: 350,
        originalPrice: 450,
        description: "A variety of frozen foods.",
        image: 'static/images/frozen_foods.png',
        availability: "In Stock"
    },
    'product-30': {
        name: "Mixed Fruits (1kg)",
        price: 150,
        originalPrice: 200,
        description: "A mix of fresh fruits.",
        image: 'static/images/fruits.png',
        availability: "In Stock"
    },
    'product-31': {
        name: "Juicy Red Apples",
        price: 90,
        originalPrice: 112.50,
        description: "Fresh and juicy red apples.",
        image: 'static/images/apple.png',
        availability: "In Stock"
    },
    'product-32': {
        name: "Exotic Fresh Coconuts",
        price: 260,
        originalPrice: 305,
        description: "Fresh coconuts for a tropical taste.",
        image: 'static/images/coconut.png',
        availability: "In Stock"
    },
    'product-33': {
        name: "Sweet Seedless Grapes",
        price: 225,
        originalPrice: 250,
        description: "Delicious and sweet seedless grapes.",
        image: 'static/images/grape.png',
        availability: "Out of Stock"
    },
    'product-34': {
        name: "Organic Carrots",
        price: 70,
        originalPrice: 90,
        description: "Fresh and organic carrots.",
        image: 'static/images/carrot.png',
        availability: "In Stock"
    },
    'product-35': {
        name: "Ripe Avocados",
        price: 150,
        originalPrice: 180,
        description: "Creamy and delicious ripe avocados.",
        image: 'static/images/ripe-avocado.png',
        availability: "In Stock"
    },
    'product-36': {
        name: "Tropical Mangoes",
        price: 120,
        originalPrice: 150,
        description: "Sweet and succulent mangoes.",
        image: 'static/images/mangoes.png',
        availability: "In Stock"
    },
    'product-37': {
        name: "Nutty Almonds",
        price: 350,
        originalPrice: 400,
        description: "Nutritious and crunchy almonds.",
        image: 'static/images/almond.png',
        availability: "Out of Stock"
    },
    'product-38': {
        name: "Zesty Lemons",
        price: 80,
        originalPrice: 100,
        description: "Fresh and zesty lemons.",
        image: 'static/images/lemon.png',
        availability: "In Stock"
    },
    'product-39': {
        name: "Hearty Spinach",
        price: 60,
        originalPrice: 80,
        description: "Fresh and healthy spinach.",
        image: 'static/images/spinach-leaves.png',
        availability: "In Stock"
    },
    'product-40': {
        name: "Flavorsome Bell Peppers",
        price: 150,
        originalPrice: 180,
        description: "Colorful and flavorsome bell peppers.",
        image: 'static/images/bell-pepper.png',
        availability: "In Stock"
    },
    'product-41': {
        name: "Delicious Strawberries",
        price: 250,
        originalPrice: 300,
        description: "Sweet and juicy strawberries.",
        image: 'static/images/strawberry.png',
        availability: "In Stock"
    },
    'product-42': {
        name: "Savory Broccoli",
        price: 90,
        originalPrice: 110,
        description: "Fresh and nutritious broccoli.",
        image: 'static/images/broccoli.png',
        availability: "Out of Stock"
    },
    'product-43': {
        name: "Sweet Peas",
        price: 100,
        originalPrice: 130,
        description: "Sweet and crunchy peas.",
        image: 'static/images/peas.png',
        availability: "In Stock"
    },
    'product-44': {
        name: "Nutritious Oats",
        price: 150,
        originalPrice: 180,
        description: "Healthy and nutritious oats.",
        image: 'static/images/oats.png',
        availability: "In Stock"
    },
    'product-45': {
        name: "Sweet Cherries",
        price: 220,
        originalPrice: 270,
        description: "Fresh and sweet cherries.",
        image: 'static/images/cherry.png',
        availability: "In Stock"
    },
    'product-46': {
        name: "Sweet Bananas",
        price: 60,
        originalPrice: 80,
        description: "Fresh and sweet bananas, great for breakfast.",
        image: 'static/images/banana.png',
        availability: "In Stock"
    }
};

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

