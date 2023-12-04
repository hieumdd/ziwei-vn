import rotate from 'rotate-array';

import { Can } from './can.type';
import { CanTuple } from './can.tuple';

export const getYearCan = (year: number) => {
    return rotate([...CanTuple], -4)[year % 10] as Can;
};
