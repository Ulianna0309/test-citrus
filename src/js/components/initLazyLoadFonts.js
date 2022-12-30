export const initLazyLoadFonts = () => {
    window.WebFontConfig = {
        google: {
            families: ['Lexend:wght@300;400;500;600;700;800;900&display=swap'],
        },
        timeout: 2000,
    };

    appendWebFontScript();

    function appendWebFontScript() {
        const webFontScript = document.createElement('script');
        webFontScript.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        webFontScript.type = 'text/javascript';
        webFontScript.async = 'true';
        webFontScript.defer = 'true';
        document.head.append(webFontScript);
    }
};
