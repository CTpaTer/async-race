import { UiComponent } from '../utils/ui';
import { getRandomCarName, getRandomColor } from './RandomCar';
import { IAnimationData } from './interfaces';

const ui = new UiComponent();
const AMOUNT_RANDOM_CARS = 100;
let animationVar: IAnimationData = {};

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

// Animation
export function animationCar(car: HTMLElement, distance: number, animationTame: number) {
    let start: number | null = null;
    const state: IAnimationData = {};

    function step(timestamp: number) {
        if (!start) start = timestamp;
        const time = timestamp - start;
        const passed = Math.round(time * (distance / animationTame));

        car.style.transform = `translateX(${Math.min(passed, distance)}px)`;

        if (passed < distance) {
            state.id = window.requestAnimationFrame(step);
        }
    }

    state.id = window.requestAnimationFrame(step);
    animationVar = state;
    return state;
}

export function stopAnimation() {
    cancelAnimationFrame(animationVar.id);
}
