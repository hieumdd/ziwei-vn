import rotate from 'rotate-array';

import { CanTuple } from './can.tuple';
import { neutralize } from '../ziwei.utils';

export const getYearCan = (year: number) => {
    return rotate([...CanTuple], -4)[neutralize(year, 10)];
};
