import { UiComponent } from '../utils/ui';
import { getRandomCarName, getRandomColor } from './RandomCar';
import { IAnimationData, IWinnerWithID } from './interfaces';

const ui = new UiComponent();
const AMOUNT_RANDOM_CARS = 100;
let winnerPerRace = 0;

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
const state: IAnimationData = {};
export function animationCar(car: HTMLElement, distance: number, animationTame: number) {
    const raceButton = document.querySelector(`.btn-start`) as HTMLButtonElement;
    const startTime = Date.now();
    let start: number | null = null;
    const carID = car.dataset.carsvg as string;
    async function step(timestamp: number) {
        if (!start) start = timestamp;
        const time = timestamp - start;
        const passed = Math.round(time * (distance / animationTame));

        car.style.transform = `translateX(${Math.min(passed, distance)}px)`;

        if (passed < distance) {
            state['id' + carID] = window.requestAnimationFrame(step);
        } else if (raceButton.disabled === true) {
            const endTime = Date.now();
            let deltaTime = (endTime - startTime) / 1000;
            deltaTime = Number(deltaTime.toFixed(2));
            if (winnerPerRace === 0) {
                winnerPerRace = Number(carID);
                showWinnerMessage(winnerPerRace, deltaTime);
                const id = winnerPerRace;
                const winnerList = await getWinnersList();
                if (!winnerList.includes(id)) {
                    createWinner(id, deltaTime);
                } else {
                    updateWinner(id, deltaTime);
                }
            }
        }
    }

    state['id' + carID] = window.requestAnimationFrame(step);
    return state;
}

export async function stopAnimation(id: number) {
    const carID = 'id' + id;
    const response = await ui.stopEngine(id);
    if (response.velocity === 0) {
        cancelAnimationFrame(state[carID]);
    }
}

async function getWinnersList() {
    const winners = await ui.getAllWinners();
    const array: number[] = [];
    winners.forEach((winner: IWinnerWithID) => array.push(winner.id));
    return array;
}

export async function getAllWinners(sort: string, order: string) {
    const winners = await ui.getAllWinners(sort, order);
    const array: number[] = [];
    winners.forEach((winner: IWinnerWithID) => array.push(winner.id));
    return winners;
}

async function createWinner(id: number, time: number) {
    await ui.createWinner({
        id: id,
        wins: 1,
        time: time,
    });
}

async function updateWinner(id: number, time: number) {
    const winner = await ui.getWinner(id);
    let winnerWins = winner.wins;
    let winnerTime = winner.time;
    winnerTime = time < winnerTime ? time : winnerTime;
    winnerWins++;
    ui.updateWinner(id, { wins: winnerWins, time: winnerTime });
}

async function showWinnerMessage(id: number, deltaTime: number) {
    const message: HTMLElement | null = document.querySelector('.span-winner-message');
    const car = await ui.getCar(id);
    const name: string = car.name;
    if (message) {
        message.textContent = `WINNER ${name}! time: ${deltaTime}s.`;
    }
}

export function resetWinnerPerRace() {
    winnerPerRace = 0;
}
