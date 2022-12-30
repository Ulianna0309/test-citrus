export const initMobileMenu = () => {
    const header = document.querySelector('[data-header]');
    const hamburger = document.querySelector('[data-hamburger]');
    const activeClass = 'header--open';

    // LISTENERS
    hamburger?.addEventListener('click', handleOnClickHamburger, false);

    // HANDLERS
    function handleOnClickHamburger() {
        header?.classList.toggle(activeClass);
        header?.classList.contains(activeClass) ? disableScroll() : enableScroll();
    }
};
