export function initHamburger() {
    // VARS
    const hamburger = document.querySelector('[data-hamburger]');
    const activeClass = 'hamburger--active';

    // LISTENERS
    hamburger?.addEventListener('click', handleOnClickHamburger, false);

    // HANDLERS
    function handleOnClickHamburger() {
        hamburger.classList.toggle(activeClass);
    }
}
