import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Garage } from '../garage/garage';
import { Winners } from '../winners/winners';
import createNewElement from '../../utils/createNewElement';
import { UiComponent } from '../../utils/ui';
import { insertAmountCars, generateRandomCars, animationCar, stopAnimation } from '../../components/functions';
import { SessionStorageUtil } from '../../utils/sessionStorageUtil';

const storage = new SessionStorageUtil();
const pageNumber = storage.getPageNamber();
if (!pageNumber) {
    storage.setPageNamber(1);
}

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

        // Add new car

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
                this.ui.createGarageCars(storage.getPageNamber());
            });
        }

        // Select car on click 'Select'
        document.addEventListener('click', async (e) => {
            const target = e.target as HTMLElement;
            if (target.classList.contains('btn-select')) {
                const name = document.querySelector('.update-car-name') as HTMLInputElement;
                const color = document.querySelector('.update-car-color') as HTMLInputElement;
                const button = document.querySelector('.btn-update') as HTMLButtonElement;
                const id = target.dataset.select;
                const car = await this.ui.getCar(Number(id));
                name.value = car.name;
                color.value = car.color;
                button.dataset.update = car.id;
            }
        });

        // Update car
        const clickUpdCar: HTMLButtonElement | null = document.querySelector('.btn-update');
        if (clickUpdCar) {
            clickUpdCar.addEventListener('click', () => {
                const inputName = document.querySelector('input[class="update-car-name"]') as HTMLInputElement;
                const inputColor = document.querySelector('input[class="update-car-color"]') as HTMLInputElement;
                const button = document.querySelector('.btn-update') as HTMLButtonElement;
                const id = Number(button.dataset.update);
                const garageCarWrapper = document.querySelector('.garage-cars') as HTMLElement;
                const car = {
                    name: inputName.value,
                    color: inputColor.value,
                };
                this.ui.updateCar(id, car);
                insertAmountCars();
                garageCarWrapper.innerHTML = '';
                this.ui.createGarageCars(storage.getPageNamber());
            });
        }

        // delete car on click 'Remove'
        document.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            if (target.classList.contains('btn-remove')) {
                const garageCarWrapper = document.querySelector('.garage-cars') as HTMLElement;
                const id = target.dataset.remove;

                this.ui.deleteCar(Number(id));
                insertAmountCars();
                garageCarWrapper.innerHTML = '';
                this.ui.createGarageCars(storage.getPageNamber());
            }
        });

        // Generate random cars
        const generateCars: HTMLButtonElement | null = document.querySelector('.btn-gen-cars');
        const garageCarWrapper = document.querySelector('.garage-cars') as HTMLElement;
        if (!generateCars) throw new Error();
        generateCars.addEventListener('click', async () => {
            await generateRandomCars();
            garageCarWrapper.innerHTML = '';
            this.ui.createGarageCars(storage.getPageNamber());
            await insertAmountCars();
        });

        // Next page
        const getNextPage: HTMLButtonElement | null = document.querySelector('.btn-pagin-next');
        if (!getNextPage) throw new Error();
        getNextPage.addEventListener('click', async () => {
            const cars = await this.ui.getCarsAmount();
            const currentNumber = storage.getPageNamber();
            if (currentNumber <= Math.floor(cars / 7)) {
                garageCarWrapper.innerHTML = '';
                const newPageNumber = +currentNumber + 1;
                this.ui.createGarageCars(newPageNumber);
                storage.setPageNamber(newPageNumber);
                updatePageNumber();
            }
        });

        // Previous page
        const getPreviousPage: HTMLButtonElement | null = document.querySelector('.btn-pagin-prev');
        if (!getPreviousPage) throw new Error();
        getPreviousPage.addEventListener('click', () => {
            const currentNumber = storage.getPageNamber();
            if (currentNumber > 1) {
                garageCarWrapper.innerHTML = '';
                const newPageNumber = +currentNumber - 1;
                this.ui.createGarageCars(newPageNumber);
                storage.setPageNamber(newPageNumber);
                updatePageNumber();
            }
        });

        // получение скорости нажатием на кнопку A
        document.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            if (target.classList.contains('destination-start')) {
                const id = target.dataset.start;
                if (!id) throw new Error();
                this.handleStartButtonClick(id);
            }
        });

        // остановка машины на кнопку B
        document.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            if (target.classList.contains('destination-stop')) {
                const id = target.dataset.stop;
                if (!id) throw new Error();
                this.handleStopButtonClick(id);
            }
        });

        // START / STOP RACE BUTTONS LISTENERS
        const startRaceButton: HTMLButtonElement | null = document.querySelector('.btn-start');
        if (startRaceButton) {
            startRaceButton.addEventListener('click', this.handleStartRaceButtonClick.bind(this));
        }
        const resetRaceButton: HTMLButtonElement | null = document.querySelector('.btn-reset');
        if (resetRaceButton) {
            resetRaceButton.addEventListener('click', this.handleStopRaceButtonClick.bind(this));
        }

        const updatePageNumber = () => {
            this.garage.spanPageNumber.innerText = `Page: # ${storage.getPageNamber()}`;
        };

        this.ui.createGarageCars(storage.getPageNamber());
        updatePageNumber();

        // ================= Constructor end ========================
    }

    disableStartButton(id: string) {
        const button = `[data-start="${id}"]`;
        const startButton = document.querySelector(`${button}`) as HTMLButtonElement;
        startButton.disabled = true;
    }

    undisableStartButton(id: string) {
        const button = `[data-start="${id}"]`;
        const startButton = document.querySelector(`${button}`) as HTMLButtonElement;
        startButton.disabled = false;
    }

    disableStopButton(id: string) {
        const button = `[data-stop="${id}"]`;
        const stopButton = document.querySelector(`${button}`) as HTMLButtonElement;
        stopButton.disabled = true;
    }

    undisableStopButton(id: string) {
        const button = `[data-stop="${id}"]`;
        const stopButton = document.querySelector(`${button}`) as HTMLButtonElement;
        stopButton.disabled = false;
    }

    disableRaceButton() {
        const raceButton = document.querySelector(`.btn-start`) as HTMLButtonElement;
        raceButton.disabled = true;
    }

    undisableRaceButton() {
        const raceButton = document.querySelector(`.btn-start`) as HTMLButtonElement;
        raceButton.disabled = false;
    }

    async handleStartButtonClick(idA: string) {
        const id = Number(idA);
        this.disableStartButton(idA);
        this.undisableStopButton(idA);
        const velocityInfo = await this.getCarVelocity(id);
        const velocity = velocityInfo.velocity;
        const widthLine = document.querySelector('.car') as HTMLElement;
        const distance = widthLine.offsetWidth - 200;

        const carSvg = `[data-carsvg="${id}"]`;
        const car = document.querySelector(`${carSvg}`) as HTMLElement;

        const animationTame = (distance / velocity) * 1000;

        try {
            animationCar(car, distance, animationTame);
            const response = await this.ui.switchEngineToDriveMode(id);
            if (response === 500) {
                throw new Error();
            }
        } catch (e) {
            console.log('!!! OOPS engine broke down');
            await stopAnimation(id);
            this.messageBrokenEngine(id, car);
            // const carEngine = `[data-engine="${id}"]`;
            // const brokMessage = document.querySelector(`${carEngine}`) as HTMLElement;
            // if (car.style.transform !== `translateX(0px)`) {
            //     brokMessage.innerText = '!!! OOPS engine broke down';
            // }
        }
    }

    async handleStopButtonClick(idA: string) {
        const id = Number(idA);
        this.undisableStartButton(idA);
        this.disableStopButton(idA);

        const carSvg = `[data-carsvg="${id}"]`;
        const car = document.querySelector(`${carSvg}`) as HTMLElement;
        await stopAnimation(id);
        car.style.transform = `translateX(0px)`;
    }

    async getCarVelocity(id: number) {
        const velocity = await this.ui.startEngine(id);
        return velocity;
    }

    async handleStartRaceButtonClick() {
        const linesArray = document.querySelectorAll('[data-start]');
        linesArray.forEach((element) => {
            const el = element as HTMLElement;
            const id = el.dataset.start;
            if (!id) throw new Error();
            this.handleStartButtonClick(id);
            this.disableStopButton(`${id}`);
        });
        this.disableRaceButton();
    }

    async handleStopRaceButtonClick() {
        const linesArray = document.querySelectorAll('[data-stop]');
        const message: HTMLElement | null = document.querySelector('.span-winner-message');
        if (message) {
            message.innerHTML = '';
        }
        linesArray.forEach((element) => {
            const el = element as HTMLElement;
            const id = el.dataset.stop;
            if (!id) throw new Error();
            this.handleStopButtonClick(id);
            this.clearMessageBrokenEngine(id);
        });
        this.undisableRaceButton();
    }

    messageBrokenEngine(id: number, car: HTMLElement) {
        const carEngine = `[data-engine="${id}"]`;
        const brokMessage = document.querySelector(`${carEngine}`) as HTMLElement;
        if (car.style.transform !== `translateX(0px)`) {
            brokMessage.innerText = '!!! OOPS engine broke down';
        }
    }

    clearMessageBrokenEngine(id: string) {
        const carEngine = `[data-engine="${id}"]`;
        const brokMessage = document.querySelector(`${carEngine}`) as HTMLElement;
        brokMessage.innerHTML = '';
    }
}
