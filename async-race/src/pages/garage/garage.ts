import './garage.css';
import { BaseComponent } from '../../components/base-component';
import createNewElement from '../../components/createNewElement';

export class Garage extends BaseComponent {
    private test: HTMLElement;
    private spanTest: HTMLElement;
    constructor() {
        super('div', ['garage-wrapper']);
        this.test = createNewElement('div', 'garage__test');
        this.spanTest = createNewElement('span', 'span-title');
        this.spanTest.innerText = `Garage`;
        this.test.appendChild(this.spanTest);
        this.container.appendChild(this.test);
    }
}
