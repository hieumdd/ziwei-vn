import { chain } from 'lodash';

import { Can } from '../can/can.type';
import { CanTuple } from '../can/can.tuple';
import { Chi } from '../chi/chi.type';
import { ChiTuple } from '../chi/chi.tuple';
import * as NguHanhs from '../ngu-hanh/ngu-hanh.enum';
import { neutralize } from '../ziwei.utils';

export const getMenh = ({ can, chi }: { can: Can; chi: Chi }) => {
    const [canRank] = chain(CanTuple)
        .chunk(2)
        .flatMap((chunk, i) => chunk.map((canValue) => [i + 1, canValue] as const))
        .find(([_, x]) => x.index === can.index)
        .value() as [number, Can];

    const [chiRank] = chain(ChiTuple)
        .chunk(2)
        .flatMap((chunk, i) => chunk.map((x) => [i % 3, x] as const))
        .find(([_, x]) => x.index === chi.index)
        .value() as [number, Chi];

    const nguHanhOrder = [NguHanhs.Kim, NguHanhs.Thuy, NguHanhs.Hoa, NguHanhs.Tho, NguHanhs.Moc];

    return nguHanhOrder[neutralize(canRank + chiRank, 5) - 1];
};
