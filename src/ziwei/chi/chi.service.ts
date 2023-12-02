import { Chi } from './chi.type';
import * as Chis from './chi.enum';

const ChiCollection = Object.values(Chis);

export const getChiYear = (year: number) => {
    const order = [
        Chis.Than,
        Chis.Dau,
        Chis.Tuat,
        Chis.Hoi,
        Chis.Ty,
        Chis.Suu,
        Chis.Dan,
        Chis.Mao,
        Chis.Thin,
        Chis.Ti,
        Chis.Ngo,
        Chis.Mui,
    ];

    return order[year % 12] as Chi;
};

export const getChiMonth = (month: number) => {
    return Object.values(Chis).find(({ lunarMonth }) => lunarMonth === month) as Chi;
};
