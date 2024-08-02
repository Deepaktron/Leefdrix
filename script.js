
// Toggle Category Menu Visibility
document.addEventListener('DOMContentLoaded', () => {
    const categoryButton = document.querySelector('.category-button');
    const categoryMenu = document.querySelector('.category-menu');

    categoryButton.addEventListener('click', () => {
        categoryMenu.classList.toggle('open');
    });
});


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



document.addEventListener('DOMContentLoaded', function() {
    const texts = document.querySelectorAll('.parallax-text');
    let currentIndex = 0;
    let isAnimating = false; // Prevents overlapping animations

    const showNextText = () => {
        if (currentIndex < texts.length) {
            const text = texts[currentIndex];
            text.classList.add('visible');
            text.classList.remove('hidden');
            currentIndex++;
            setTimeout(showNextText, 600); // Wait for the slide-in animation to complete before showing the next text
        }
    };

    const hideText = () => {
        if (currentIndex > 0) {
            const text = texts[currentIndex - 1];
            text.classList.add('hidden');
            text.classList.remove('visible');
            currentIndex--;
            setTimeout(hideText, 600); // Wait for the slide-out animation to complete before hiding the next text
        }
    };

    const handleScroll = () => {
        const viewportHeight = window.innerHeight;
        const section = document.querySelector('.parallax-section');
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < viewportHeight * 0.75 && !isAnimating) {
            if (currentIndex === 0) {
                isAnimating = true;
                showNextText();
                isAnimating = false;
            }
        } else {
            if (currentIndex > 0 && !isAnimating) {
                isAnimating = true;
                hideText();
                isAnimating = false;
            }
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
});
