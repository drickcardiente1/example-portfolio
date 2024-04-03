function detectScreenSize() {
    const screenHeight = window.innerHeight;
    return { height: screenHeight };
}

const screenSize = detectScreenSize();

function divideAndGetNumbers(number) {
    const result = [];
    const divisor = Math.ceil(number / 5);
    let currentNumber = 0;
    while (currentNumber < number) {
        currentNumber += divisor;
        result.push(currentNumber);
    }
    return result;
}

var id = 1;
var oldId = 1;
var prevScrollPos = 0;
var all_lengths = divideAndGetNumbers(document.documentElement.offsetHeight);

window.addEventListener('scroll', function () {
    if (window.innerWidth >= 1200) {
        const pageHeight = window.scrollY + window.innerHeight;
        if (window.scrollY > prevScrollPos) {
            for (let i = 0; i < all_lengths.length; i++) {
                if (pageHeight >= all_lengths[i] - 500) {
                    oldId = id;
                    id = i + 1;
                }
            }

            if (oldId !== id) {
                document.querySelector(`.monitor-section${id}`).classList.add('animate__bounceInLeft');
                document.querySelector(`.monitor-section${oldId}`).classList.add('animate__bounceOutLeft');
            }
        } else {
            for (let i = 0; i < all_lengths.length; i++) {
                if (pageHeight >= all_lengths[i] - 400) {
                    oldId = id;
                    id = i + 1;
                }
            }
            if (oldId !== id) {
                document.querySelector(`.monitor-section${id}`).classList.remove('animate__bounceOutLeft');
                document.querySelector(`.monitor-section${id}`).classList.add('animate__bounceInRight');
            }
        }

        prevScrollPos = window.scrollY;
    }else{
        console.log("hello world")
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const portfolioCarousel = document.getElementById('portfolioCarousel');
    portfolioCarousel.addEventListener('shown.bs.carousel', function () {
        setTimeout(function () {
            nextSlide();
        }, 800);
    });
});

function nextSlide() {
    const portfolioCarousel = document.getElementById('portfolioCarousel');
    const carousel = bootstrap.Carousel.getInstance(portfolioCarousel);
    carousel.next();
}