import { Chi } from './chi.type';
import * as Chis from './chi.enum';

export const getYearChi = (year: number) => {
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

export const getMonthChi = (month: number) => {
    return Object.values(Chis).find(({ lunarMonth }) => lunarMonth === month) as Chi;
};
