import { ICar } from '../components/interfaces';
import { createTrackView } from '../components/createTrackView';
import { engineData, IWinner } from '../components/interfaces';

export class UiComponent {
    baseLink: string;
    garage: string;
    engine: string;
    winners: string;

    constructor() {
        this.baseLink = 'http://localhost:3000';
        this.garage = `${this.baseLink}/garage`;
        this.engine = `${this.baseLink}/engine`;
        this.winners = `${this.baseLink}/winners`;
    }

    async getCarsAmount() {
        const response = await fetch(`${this.garage}`);
        const cars = await response.json();
        const carsCount = cars.length;
        return carsCount;
    }

    async createCar(body: ICar) {
        const response = await fetch(`${this.garage}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const cars = await response.json();
        return cars;
    }

    async createGarageCars(page = 1, limit = 7) {
        const response = await fetch(`${this.garage}?_page=${page}&_limit=${limit}`);
        const cars = await response.json();
        cars.forEach((element: ICar) => {
            createTrackView(element);
        });
    }

    async getCar(id: number) {
        const response = await fetch(`${this.garage}/${id}`);
        const car = await response.json();
        return car;
    }

    async updateCar(id: number, body: ICar) {
        const response = await fetch(`${this.garage}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const cars = response.json();
        return cars;
    }

    async deleteCar(id: number) {
        await fetch(`${this.garage}/${id}`, {
            method: 'DELETE',
        });
    }

    async startEngine(id: number): Promise<engineData> {
        const response = await fetch(`${this.engine}?id=${id}&status=started`, {
            method: 'PATCH',
        });
        const body = await response.json();
        return body;
    }

    async stopEngine(id: number): Promise<engineData> {
        const response = await fetch(`${this.engine}?id=${id}&status=stopped`, {
            method: 'PATCH',
        });
        const body = await response.json();
        return body;
    }

    async switchEngineToDriveMode(id: number) {
        const responce = await fetch(`${this.engine}?id=${id}&status=drive`, {
            method: 'PATCH',
        });
        return responce.status;
    }

    async getAllWinners(sort = 'wins', order = 'DESC', page = 1, limit = 10) {
        const response = await fetch(`${this.winners}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
        const winners = await response.json();
        return winners;
    }

    async createWinner(body: IWinner) {
        const response = await fetch(`${this.winners}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const winners = await response.json();
        return winners;
    }

    async getWinner(id: number) {
        const response = await fetch(`${this.winners}/${id}`);
        const winner = await response.json();
        return winner;
    }

    async updateWinner(id: number, body: IWinner) {
        const response = await fetch(`${this.winners}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const winners = response.json();
        return winners;
    }

    async deleteWinner(id: number) {
        await fetch(`${this.winners}/${id}`, {
            method: 'DELETE',
        });
    }
}
