export interface ILieferant {
    id?: number;
    lname?: string;
}

export class Lieferant implements ILieferant {
    constructor(public id?: number, public lname?: string) {}
}
