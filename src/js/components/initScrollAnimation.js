export const initScrollAnimation = () => {
    // VARS
    const scrollElements = document.querySelectorAll('.js-scroll');

    // LISTENERS
    window.addEventListener('scroll', handleScrollAnimation, false);

    // HANDLERS
    function handleScrollAnimation() {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else if (elementOutofView(el)) {
                hideScrollElement(el);
            }
        });
    }

    // FUNCTIONS
    function elementInView(el, dividend = 1) {
        const elementTop = el.getBoundingClientRect().top;
        return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
    }

    function elementOutofView(el) {
        const elementTop = el.getBoundingClientRect().top;
        return elementTop > (window.innerHeight || document.documentElement.clientHeight);
    }

    function displayScrollElement(element) {
        element.classList.add('scrolled');
    }

    function hideScrollElement(element) {
        element.classList.remove('scrolled');
    }
};
