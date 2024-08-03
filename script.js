
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




document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('card-slider');
    const cardContainers = Array.from(slider.children);
    const cardWidth = cardContainers[0].offsetWidth;
    const numCards = cardContainers.length;

    // Duplicate the cards to create an infinite loop effect
    cardContainers.forEach(card => slider.appendChild(card.cloneNode(true)));
    slider.style.width = `${cardWidth * cardContainers.length * 2}px`; // Set the width of the slider

    let currentIndex = 0;

    function slide() {
        currentIndex++;
        if (currentIndex >= numCards) {
            slider.style.transition = 'none'; // Disable transition for instant snap back
            slider.style.transform = `translateX(0)`;
            currentIndex = 0;
            setTimeout(() => {
                slider.style.transition = 'transform 0.5s ease'; // Re-enable transition
                slider.style.transform = `translateX(-${cardWidth}px)`;
            }, 20); // Short delay to ensure the transition is applied correctly
        } else {
            slider.style.transition = 'transform 0.5s ease'; // Enable transition
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

    document.getElementById('next-button').addEventListener('click', () => {
        slide();
    });

    document.getElementById('prev-button').addEventListener('click', () => {
        if (currentIndex <= 0) {
            currentIndex = numCards - 1;
            slider.style.transition = 'none'; // Disable transition for instant snap back
            slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            setTimeout(() => {
                slider.style.transition = 'transform 0.5s ease'; // Re-enable transition
                slider.style.transform = `translateX(-${(currentIndex - 1) * cardWidth}px)`;
            }, 20);
        } else {
            goToSlide(currentIndex - 1);
        }
    });

    setInterval(slide, 2000); // Automatic slide every 3 seconds
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
    let currentIndex = 0;

    function showSlide(index) {
        const slideWidth = slide.offsetWidth / groups.length;
        slide.style.transform = `translateX(-${index * slideWidth}px)`;
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
