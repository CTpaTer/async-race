import './winners.css';
import { BaseComponent } from '../../utils/base-component';
import createNewElement from '../../utils/createNewElement';

export class Winners extends BaseComponent {
    private winnersTitle: HTMLElement;
    private spanTitle: HTMLElement;
    constructor() {
        super('div', ['winners-wrapper']);
        this.winnersTitle = createNewElement('div', 'winners__title');
        this.spanTitle = createNewElement('span', 'span-title');
        this.spanTitle.innerText = `Winners`;
        this.winnersTitle.appendChild(this.spanTitle);
        this.container.appendChild(this.winnersTitle);
    }
}
