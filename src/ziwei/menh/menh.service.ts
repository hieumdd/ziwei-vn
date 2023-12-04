import { chain } from 'lodash';

import { Can } from '../can/can.type';
import * as Cans from '../can/can.const';
import { Chi } from '../chi/chi.type';
import * as Chis from '../chi/chi.const';
import { NguHanh } from '../ngu-hanh/ngu-hanh.type';
import * as NguHanhs from '../ngu-hanh/ngu-hanh.enum';

export const getMenh = ({ can, chi }: { can: Can; chi: Chi }) => {
    const [canRank] = chain(Cans)
        .values()
        .chunk(2)
        .flatMap((chunk, i) => chunk.map((canValue) => [i + 1, canValue] as const))
        .find(([_, x]) => x.index === can.index)
        .value() as [number, Can];

    const [chiRank] = chain(Chis)
        .values()
        .chunk(2)
        .flatMap((chunk, i) => chunk.map((x) => [i % 3, x] as const))
        .find(([_, x]) => x.index === chi.index)
        .value() as [number, Chi];

    const order = [NguHanhs.Kim, NguHanhs.Thuy, NguHanhs.Hoa, NguHanhs.Tho, NguHanhs.Moc];

    return order[((canRank + chiRank) % 5) - 1] as NguHanh;
};
