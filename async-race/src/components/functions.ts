import { UiComponent } from '../utils/ui';

const ui = new UiComponent();

export const insertAmountCars = async () => {
    const amountCars: HTMLButtonElement | null = document.querySelector('.span-amount-cars');
    if (!amountCars) throw new Error();
    const count = await ui.getCarsAmount();
    amountCars.innerText = `Garage: (${count})`;
};
