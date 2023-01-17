import './header.css';
import { BaseComponent } from '../../utils/base-component';
import createNewElement from '../../utils/createNewElement';

export class Header extends BaseComponent {
    header: HTMLElement;
    btnGarage: HTMLElement;
    btnWinners: HTMLElement;
    constructor() {
        super('header', ['header']);

        this.header = createNewElement('div', 'header__buttons');
        this.btnGarage = createNewElement('button', 'btn-garage');
        this.btnGarage.innerText = 'Garage';
        this.btnWinners = createNewElement('button', 'btn-winners');
        this.btnWinners.innerText = 'Winners';
        this.header.appendChild(this.btnGarage);
        this.header.appendChild(this.btnWinners);

        this.container.appendChild(this.header);
    }
}
