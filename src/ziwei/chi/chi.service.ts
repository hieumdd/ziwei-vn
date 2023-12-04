import rotate from 'rotate-array';

import { Chi } from './chi.type';
import { ChiTuple } from './chi.tuple';

export const getYearChi = (year: number) => {
    return rotate([...ChiTuple], -4)[year % 12] as Chi;
};

export const getMonthChi = (month: number) => {
    return ChiTuple.find(({ lunarMonth }) => lunarMonth === month) as Chi;
};
