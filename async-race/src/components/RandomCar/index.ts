import { carBrands, carModels } from './carBrand';

export function getRandomCarName() {
    function getRandomNumber(max: number) {
        const random = Math.random() * (max + 1);
        return Math.floor(random);
    }

    const brandsLimit = carBrands.length - 1;
    const modelsLimit = carModels.length - 1;

    const brandIndex = getRandomNumber(brandsLimit);
    const modelIndex = getRandomNumber(modelsLimit);
    return carBrands[brandIndex] + ' ' + carModels[modelIndex];
}

export function getRandomColor() {
    const chars = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }
    return color;
}
