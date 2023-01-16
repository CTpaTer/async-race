import './winners.css';
import { BaseComponent } from '../../components/base-component';
import createNewElement from '../../components/createNewElement';

export class Winners extends BaseComponent {
    private test: HTMLElement;
    private spanTest: HTMLElement;
    constructor() {
        super('div', ['winners-wrapper']);
        this.test = createNewElement('div', 'winners__test');
        this.spanTest = createNewElement('span', 'span-title');
        this.spanTest.innerText = `Winners`;
        this.test.appendChild(this.spanTest);
        this.container.appendChild(this.test);
    }
}
