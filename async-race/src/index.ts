import './style.css';
import { App } from './pages/app/app';

window.onload = () => {
    const appElement: HTMLElement | null = document.querySelector('.body');

    if (!appElement) throw Error('App root element not found');
    new App(appElement);
};
