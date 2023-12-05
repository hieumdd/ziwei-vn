import rotate from 'rotate-array';

import { ChiTuple } from './chi.tuple';
import { neutralize } from '../ziwei.utils';

export const getYearChi = (year: number) => {
    return rotate([...ChiTuple], -4)[neutralize(year, 12)];
};

export const getMonthChi = (month: number) => {
    return ChiTuple.find(({ lunarMonth }) => lunarMonth === month)!;
};
