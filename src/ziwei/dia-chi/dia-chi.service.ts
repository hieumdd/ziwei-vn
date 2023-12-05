import * as Chis from '../chi/chi.const';
import { ChiTuple } from '../chi/chi.tuple';
import { Cuc } from '../cuc/cuc.type';
import { Sao } from '../sao/sao.type';
import * as Saos from '../sao/chinh-tinh.const';
import { neutralize } from '../ziwei.utils';

type Assigner = (i: number) => boolean;

export const getBaseDiaChi = () => {
    return ChiTuple.map(({ name }) => ({ name }));
};

type GetDiaChiOptions = {
    lunarMonth: number;
    lunarHour: number;
};

export const getMenhThanPredicate = (options: GetDiaChiOptions): { [key: string]: Assigner } => {
    const menhIndex = 2 + (options.lunarMonth - 1) - (options.lunarHour - 1);
    const thanIndex = 2 + (options.lunarMonth - 1) + (options.lunarHour - 1);

    return {
        isMenh: (i) => i === menhIndex || i === ChiTuple.length + menhIndex,
        isThan: (i) => i === thanIndex % ChiTuple.length,
    };
};

type GetChinhTinhAssigner = { cuc: Cuc; lunarDay: number };

export const getChinhTinhAssigners = ({ cuc, lunarDay }: GetChinhTinhAssigner): [Sao, Assigner][] => {
    const tuViIndex = cuc.tuViMapping.findIndex((values) => values.includes(lunarDay))!;
    const thienPhuIndex = neutralize(2 * Chis.Dan.index - tuViIndex, ChiTuple.length);

    return [
        [Saos.TuVi, (i) => i === tuViIndex],
        [Saos.LiemTrinh, (i) => i === neutralize(tuViIndex + 4, ChiTuple.length)],
        [Saos.ThienDong, (i) => i === neutralize(tuViIndex + 7, ChiTuple.length)],
        [Saos.VuKhuc, (i) => i === neutralize(tuViIndex + 8, ChiTuple.length)],
        [Saos.ThaiDuong, (i) => i === neutralize(tuViIndex + 9, ChiTuple.length)],
        [Saos.ThienCo, (i) => i === neutralize(tuViIndex + 11, ChiTuple.length)],

        [Saos.ThienPhu, (i) => i === thienPhuIndex],
        [Saos.ThaiAm, (i) => i === neutralize(thienPhuIndex + 1, ChiTuple.length)],
        [Saos.ThamLang, (i) => i === neutralize(thienPhuIndex + 2, ChiTuple.length)],
        [Saos.CuMon, (i) => i === neutralize(thienPhuIndex + 3, ChiTuple.length)],
        [Saos.ThienTuong, (i) => i === neutralize(thienPhuIndex + 4, ChiTuple.length)],
        [Saos.ThienLuong, (i) => i === neutralize(thienPhuIndex + 5, ChiTuple.length)],
        [Saos.ThatSat, (i) => i === neutralize(thienPhuIndex + 6, ChiTuple.length)],
        [Saos.PhaQuan, (i) => i === neutralize(thienPhuIndex + 10, ChiTuple.length)],
    ];
};
