import './garage.css';
import { BaseComponent } from '../../components/base-component';
import createNewElement from '../../components/createNewElement';

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
        this.nameCarInput.placeholder = 'Name car';
        this.inputWrapper.appendChild(this.nameCarInput);

        this.inputCarColor = document.createElement('input');
        this.inputCarColor.type = 'color';
        this.inputCarColor.value = '#e66465';
        this.inputWrapper.appendChild(this.inputCarColor);

        this.btnCreateCar = document.createElement('button');
        this.btnCreateCar.textContent = 'UPDATE';
        this.btnCreateCar.classList.add('btn-update');
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
    }
}
