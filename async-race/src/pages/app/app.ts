import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Garage } from '../garage/garage';
import { Winners } from '../winners/winners';
import createNewElement from '../../utils/createNewElement';
import { UiComponent } from '../../utils/ui';
import { insertAmountCars, generateRandomCars } from '../../components/functions';

export class App {
    private readonly rootElement: HTMLElement;
    private readonly garage: Garage;
    private readonly winners: Winners;
    private readonly header: Header;
    private readonly footer: Footer;
    private readonly ui: UiComponent;
    private readonly main: HTMLElement;

    constructor(element: HTMLElement) {
        this.rootElement = element;
        this.header = new Header();
        this.footer = new Footer();
        this.winners = new Winners();
        this.garage = new Garage();
        this.ui = new UiComponent();
        this.rootElement.appendChild(this.header.container);
        this.main = createNewElement('main', 'main');
        this.main.appendChild(this.garage.container);
        this.rootElement.appendChild(this.main);
        this.rootElement.appendChild(this.footer.container);

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

        const clickAddCar: HTMLButtonElement | null = document.querySelector('.btn-create');
        if (clickAddCar) {
            clickAddCar.addEventListener('click', () => {
                const inputName = document.querySelector('input[type="text"]') as HTMLInputElement;
                const inputColor = document.querySelector('input[type="color"]') as HTMLInputElement;
                const garageCarWrapper = document.querySelector('.garage-cars') as HTMLElement;
                const car = {
                    name: inputName.value,
                    color: inputColor.value,
                };
                this.ui.createCar(car);
                insertAmountCars();
                garageCarWrapper.innerHTML = '';
                this.ui.createGarageCars();
            });
        }

        // delete car on click 'Remove'
        document.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            const garageCarWrapper = document.querySelector('.garage-cars') as HTMLElement;
            if (target.classList.contains('btn-remove')) {
                const id = target.dataset.remove;

                this.ui.deleteCar(Number(id));
                insertAmountCars();
                garageCarWrapper.innerHTML = '';
                this.ui.createGarageCars();
            }
        });

        // Generate random cars
        const generateCars: HTMLButtonElement | null = document.querySelector('.btn-gen-cars');
        const garageCarWrapper = document.querySelector('.garage-cars') as HTMLElement;
        if (!generateCars) throw new Error();
        generateCars.addEventListener('click', () => {
            generateRandomCars();
            insertAmountCars();
            garageCarWrapper.innerHTML = '';
            this.ui.createGarageCars();
        });
    }
}
