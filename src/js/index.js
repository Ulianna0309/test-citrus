import {initLazyLoadFonts} from "./components/initLazyLoadFonts";
import {initMobMenu} from "./components/initMobMenu";
import {initScrollLocker} from "./components/menus/initScrollLocker";
import { initScrollDownButton } from './components/initSrollDown';
import { initSlider } from './components/initSlider';



window.addEventListener('load', handleOnLoadPage, false);

function handleOnLoadPage() {
    initLazyLoadFonts();
    initMobMenu();
    initScrollLocker();
    initScrollDownButton();
    initSlider();
}



