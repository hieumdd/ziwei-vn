import rotate from 'rotate-array';

import * as Cucs from './cuc.const';
import { Can } from '../can/can.type';
import { Chi } from '../chi/chi.type';
import * as Chis from '../chi/chi.const';
import { neutralize } from '../ziwei.utils';

export const getCuc = ({ can, chi }: { can: Can; chi: Chi }) => {
    let rotation = 0;
    const cucTuple = [Cucs.ThuyNhiCuc, Cucs.HoaLucCuc, Cucs.ThoNguCuc, Cucs.MocTamCuc, Cucs.KimTuCuc];

    const rotationPredicate = (cs: Chi[]) => cs.find(({ index }) => index === chi.index);

    if (rotationPredicate([Chis.Ty, Chis.Suu])) {
        rotation = 0;
    } else if (rotationPredicate([Chis.Dan, Chis.Mao, Chis.Tuat, Chis.Hoi])) {
        rotation = 1;
    } else if (rotationPredicate([Chis.Thin, Chis.Ti])) {
        rotation = 2;
    } else if (rotationPredicate([Chis.Ngo, Chis.Mui])) {
        rotation = 3;
    } else if (rotationPredicate([Chis.Than, Chis.Dau])) {
        rotation = 4;
    }

    return rotate([...cucTuple], rotation)[neutralize(can.index, 5)];
};
