import './garage.css';
import { BaseComponent } from '../../utils/base-component';
import createNewElement from '../../utils/createNewElement';
import { UiComponent } from '../../utils/ui';

export class Garage extends BaseComponent {
    private garageTitle: HTMLElement;
    private spanTitle: HTMLElement;
    private inputFields: HTMLElement;
    private inputNewCar: HTMLElement;
    private inputWrapper: HTMLElement;
    private spanNewCar: HTMLElement;
    private nameCarInput: HTMLInputElement;
    private inputCarColor: HTMLInputElement;
    private btnCreateCar: HTMLButtonElement;
    private updateCar: HTMLElement;
    private spanUpdateCar: HTMLElement;
    private buttonsWrapper: HTMLElement;
    private btnStart: HTMLButtonElement;
    private btnReset: HTMLButtonElement;
    private btnGenCars: HTMLButtonElement;
    private textWrapper: HTMLElement;
    private spanNumberPage: HTMLElement;
    private spanAmountCars: HTMLElement;
    public spanPageNumber: HTMLElement;
    public spanWinnerMessage: HTMLElement;
    private garageGars: HTMLElement;
    constructor() {
        super('div', ['garage-wrapper']);

        this.garageTitle = createNewElement('div', 'garage__title');
        this.spanTitle = createNewElement('span', 'span-title');
        this.spanTitle.innerText = `Garage`;
        this.garageTitle.appendChild(this.spanTitle);
        this.container.appendChild(this.garageTitle);

        this.inputFields = createNewElement('div', 'input-fields');
        this.container.appendChild(this.inputFields);

        // Create new car

        this.inputNewCar = createNewElement('div', 'input-new-car');
        this.spanNewCar = createNewElement('span', 'span-title');
        this.spanNewCar.innerText = `Create new car`;
        this.inputNewCar.appendChild(this.spanNewCar);
        this.inputFields.appendChild(this.inputNewCar);

        this.inputWrapper = createNewElement('div', 'input-wrapper');

        this.nameCarInput = document.createElement('input');
        this.nameCarInput.type = 'text';
        this.nameCarInput.placeholder = 'Name car';
        this.inputWrapper.appendChild(this.nameCarInput);

        this.inputCarColor = document.createElement('input');
        this.inputCarColor.type = 'color';
        this.inputCarColor.value = '#f6b73c';
        this.inputWrapper.appendChild(this.inputCarColor);

        this.btnCreateCar = document.createElement('button');
        this.btnCreateCar.textContent = 'CREATE';
        this.btnCreateCar.classList.add('btn-create');
        this.inputWrapper.appendChild(this.btnCreateCar);

        this.inputNewCar.appendChild(this.inputWrapper);

        // Update car

        this.updateCar = createNewElement('div', 'update-car');
        this.spanUpdateCar = createNewElement('span', 'span-title');
        this.spanUpdateCar.innerText = `Update car`;
        this.updateCar.appendChild(this.spanUpdateCar);
        this.inputFields.appendChild(this.updateCar);

        this.inputWrapper = createNewElement('div', 'input-wrapper');

        this.nameCarInput = document.createElement('input');
        this.nameCarInput.type = 'text';
        this.nameCarInput.classList.add('update-car-name');
        this.nameCarInput.placeholder = 'Name car';
        this.inputWrapper.appendChild(this.nameCarInput);

        this.inputCarColor = document.createElement('input');
        this.inputCarColor.type = 'color';
        this.inputCarColor.classList.add('update-car-color');
        this.inputCarColor.value = '#e66465';
        this.inputWrapper.appendChild(this.inputCarColor);

        this.btnCreateCar = document.createElement('button');
        this.btnCreateCar.textContent = 'UPDATE';
        this.btnCreateCar.classList.add('btn-update');
        this.btnCreateCar.dataset.update = '0';
        this.inputWrapper.appendChild(this.btnCreateCar);

        this.updateCar.appendChild(this.inputWrapper);

        // Block of buttons

        this.buttonsWrapper = createNewElement('div', 'buttons-wrapper');

        this.btnStart = document.createElement('button');
        this.btnStart.textContent = 'RACE';
        this.btnStart.classList.add('btn-start');
        this.buttonsWrapper.appendChild(this.btnStart);

        this.btnReset = document.createElement('button');
        this.btnReset.textContent = 'RESET';
        this.btnReset.classList.add('btn-reset');
        this.buttonsWrapper.appendChild(this.btnReset);

        this.btnGenCars = document.createElement('button');
        this.btnGenCars.textContent = 'GENERATE CARS';
        this.btnGenCars.classList.add('btn-gen-cars');
        this.buttonsWrapper.appendChild(this.btnGenCars);

        this.container.appendChild(this.buttonsWrapper);

        this.textWrapper = createNewElement('div', 'text-wrapper');
        this.spanNumberPage = createNewElement('span', 'span-number-page');
        this.spanAmountCars = createNewElement('span', 'span-amount-cars') as HTMLElement;
        this.spanPageNumber = createNewElement('span', 'span-page-number') as HTMLElement;
        this.spanWinnerMessage = createNewElement('span', 'span-winner-message') as HTMLElement;
        this.textWrapper.appendChild(this.spanNumberPage);
        this.textWrapper.appendChild(this.spanAmountCars);
        this.textWrapper.appendChild(this.spanPageNumber);
        this.textWrapper.appendChild(this.spanWinnerMessage);

        this.container.appendChild(this.textWrapper);

        this.garageGars = createNewElement('div', 'garage-cars');

        this.container.appendChild(this.garageGars);

        // Pagination buttons

        const paginBtns = document.createElement('div');
        paginBtns.classList.add('pagin-btns');
        this.container.appendChild(paginBtns);

        const paginPrev = document.createElement('button');
        paginPrev.textContent = 'Prev';
        paginPrev.classList.add('btn-pagin-prev');
        paginPrev.dataset.select = ``;
        paginBtns.appendChild(paginPrev);

        const paginNext = document.createElement('button');
        paginNext.textContent = 'Next';
        paginNext.classList.add('btn-pagin-next');
        paginNext.dataset.select = ``;
        paginBtns.appendChild(paginNext);

        // =========================================

        const insertAmountCars = async () => {
            const count = await ui.getCarsAmount();
            this.spanAmountCars.innerText = `Garage: (${count})`;
        };

        insertAmountCars();
    }
}

const ui = new UiComponent();
