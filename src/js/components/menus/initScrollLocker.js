export const initScrollLocker = () => {
    const disableScroll = function disableScroll() {
        if (document.body.classList.contains('disable-scroll')) return false;
        const paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
        const pagePosition = window.scrollY;

        document.body.classList.add('disable-scroll');
        setStyleDisableScroll(paddingOffset, pagePosition);
        document.body.setAttribute('data-position', `${pagePosition}`);
    };

    const enableScroll = function enableScroll() {
        if (!document.body.classList.contains('disable-scroll')) return false;
        const pagePosition = document.body.getAttribute('data-position');
        document.body.classList.remove('disable-scroll');
        setStyleEnableScroll();
        window.scrollTo(0, +pagePosition);
        document.body.removeAttribute('data-position');
    };

    function setStyleDisableScroll(paddingOffset, pagePosition) {
        document.body.style.position = 'relative';
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.left = '0';
        document.body.style.top = '0';
        document.body.style.width = '100%';
        document.body.style.paddingRight = paddingOffset;
        document.body.style.top = -pagePosition + 'px';
    }

    function setStyleEnableScroll() {
        document.body.style.position = '';
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.left = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.paddingRight = '';
    }

    window.disableScroll = disableScroll;
    window.enableScroll = enableScroll;
};
