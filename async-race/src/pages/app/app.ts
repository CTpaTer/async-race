import { Header } from '../../components/Header';
import { Garage } from '../garage/garage';
import { Winners } from '../winners/winners';
import createNewElement from '../../utils/createNewElement';

export class App {
    private readonly rootElement: HTMLElement;
    private readonly garage: Garage;
    private readonly winners: Winners;
    private readonly header: Header;
    private readonly main: HTMLElement;

    constructor(element: HTMLElement) {
        this.rootElement = element;
        this.header = new Header();
        this.winners = new Winners();
        this.garage = new Garage();
        this.rootElement.appendChild(this.header.container);
        this.main = createNewElement('main', 'main');
        this.main.appendChild(this.garage.container);
        this.rootElement.appendChild(this.main);

        const clickBattonWinners: HTMLButtonElement | null = document.querySelector('.btn-winners');
        if (clickBattonWinners) {
            clickBattonWinners.addEventListener('click', () => {
                this.main.innerHTML = '';
                this.main.appendChild(this.winners.container);
            });
        }

        const clickBattonGarage: HTMLButtonElement | null = document.querySelector('.btn-garage');
        if (clickBattonGarage) {
            clickBattonGarage.addEventListener('click', () => {
                this.main.innerHTML = '';
                this.main.appendChild(this.garage.container);
            });
        }
    }
}
