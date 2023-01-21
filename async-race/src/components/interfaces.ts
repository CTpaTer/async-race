export interface ICar {
    color: string;
    id?: number;
    name: string;
}

export interface engineData {
    distance: number;
    velocity: number;
}

export interface IAnimationData {
    [key: string]: number;
}
