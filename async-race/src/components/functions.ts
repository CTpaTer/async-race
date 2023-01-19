import { UiComponent } from '../utils/ui';
import { getRandomCarName, getRandomColor } from './RandomCar';

const ui = new UiComponent();
const AMOUNT_RANDOM_CARS = 100;

export const insertAmountCars = async () => {
    const amountCars: HTMLButtonElement | null = document.querySelector('.span-amount-cars');
    if (!amountCars) throw new Error();
    const count = await ui.getCarsAmount();
    amountCars.innerText = `Garage: (${count})`;
};

// Generate random cars
export const generateRandomCars = async () => {
    for (let i = 0; i < AMOUNT_RANDOM_CARS; i++) {
        const nameCar = getRandomCarName();
        const colorCar = getRandomColor();
        const car = {
            name: nameCar,
            color: colorCar,
        };
        ui.createCar(car);
    }
};
