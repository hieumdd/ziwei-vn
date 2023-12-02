import { Can } from './can.type';
import * as Cans from './can.enum';

export const getYearCan = (year: number) => {
    const order = [
        Cans.Canh,
        Cans.Tan,
        Cans.Nham,
        Cans.Quy,
        Cans.Giap,
        Cans.At,
        Cans.Binh,
        Cans.Dinh,
        Cans.Mau,
        Cans.Ky,
    ];

    return order[year % 10] as Can;
};
