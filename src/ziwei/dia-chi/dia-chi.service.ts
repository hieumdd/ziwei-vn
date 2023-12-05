import * as Chis from '../chi/chi.const';
import { ChiTuple } from '../chi/chi.tuple';
import { Cuc } from '../cuc/cuc.type';
import { Sao } from '../sao/sao.type';
import * as SaoChinhTinhs from '../sao/chinh-tinh.const';
import * as SaoPhuTinhs from '../sao/phu-tinh.const';
import { neutralize } from '../ziwei.utils';
import { Chi } from '../chi/chi.type';

type Assigner = (i: number) => boolean;

export const getBaseDiaChi = () => {
    return ChiTuple.map(({ name }) => ({ name }));
};

type GetDiaChiOptions = { lunarMonth: number; lunarHour: number };

export const getMenhThanPredicate = (options: GetDiaChiOptions): { [key: string]: Assigner } => {
    const menhIndex = 2 + (options.lunarMonth - 1) - (options.lunarHour - 1);
    const thanIndex = 2 + (options.lunarMonth - 1) + (options.lunarHour - 1);

    return {
        isMenh: (i) => i === neutralize(menhIndex, ChiTuple.length),
        isThan: (i) => i === neutralize(thanIndex, ChiTuple.length),
    };
};

type GetChinhTinhAssigner = { cuc: Cuc; lunarDay: number };

export const getChinhTinhAssigners = ({ cuc, lunarDay }: GetChinhTinhAssigner): [Sao, Assigner][] => {
    const tuViIndex = cuc.tuViMapping.findIndex((values) => values.includes(lunarDay))!;
    const thienPhuIndex = neutralize(2 * Chis.Dan.index - tuViIndex, ChiTuple.length);

    return [
        [SaoChinhTinhs.TuVi, (i) => i === tuViIndex],
        [SaoChinhTinhs.LiemTrinh, (i) => i === neutralize(tuViIndex + 4, ChiTuple.length)],
        [SaoChinhTinhs.ThienDong, (i) => i === neutralize(tuViIndex + 7, ChiTuple.length)],
        [SaoChinhTinhs.VuKhuc, (i) => i === neutralize(tuViIndex + 8, ChiTuple.length)],
        [SaoChinhTinhs.ThaiDuong, (i) => i === neutralize(tuViIndex + 9, ChiTuple.length)],
        [SaoChinhTinhs.ThienCo, (i) => i === neutralize(tuViIndex + 11, ChiTuple.length)],

        [SaoChinhTinhs.ThienPhu, (i) => i === thienPhuIndex],
        [SaoChinhTinhs.ThaiAm, (i) => i === neutralize(thienPhuIndex + 1, ChiTuple.length)],
        [SaoChinhTinhs.ThamLang, (i) => i === neutralize(thienPhuIndex + 2, ChiTuple.length)],
        [SaoChinhTinhs.CuMon, (i) => i === neutralize(thienPhuIndex + 3, ChiTuple.length)],
        [SaoChinhTinhs.ThienTuong, (i) => i === neutralize(thienPhuIndex + 4, ChiTuple.length)],
        [SaoChinhTinhs.ThienLuong, (i) => i === neutralize(thienPhuIndex + 5, ChiTuple.length)],
        [SaoChinhTinhs.ThatSat, (i) => i === neutralize(thienPhuIndex + 6, ChiTuple.length)],
        [SaoChinhTinhs.PhaQuan, (i) => i === neutralize(thienPhuIndex + 10, ChiTuple.length)],
    ];
};

type GetThaiTueAssigners = (options: { chi: Chi }) => [Sao, Assigner][];

export const getThaiTueAssigners: GetThaiTueAssigners = ({ chi: { index: thaiTueIndex } }) => {
    return [
        [SaoPhuTinhs.ThaiTue, (i) => i === neutralize(thaiTueIndex, ChiTuple.length)],
        [SaoPhuTinhs.ThieuDuong, (i) => i === neutralize(thaiTueIndex + 1, ChiTuple.length)],
        [SaoPhuTinhs.TangMon, (i) => i === neutralize(thaiTueIndex + 2, ChiTuple.length)],
        [SaoPhuTinhs.ThieuAm, (i) => i === neutralize(thaiTueIndex + 3, ChiTuple.length)],
        [SaoPhuTinhs.QuanPhu, (i) => i === neutralize(thaiTueIndex + 4, ChiTuple.length)],
        [SaoPhuTinhs.TuPhu, (i) => i === neutralize(thaiTueIndex + 5, ChiTuple.length)],
        [SaoPhuTinhs.TuePha, (i) => i === neutralize(thaiTueIndex + 6, ChiTuple.length)],
        [SaoPhuTinhs.LongDuc, (i) => i === neutralize(thaiTueIndex + 7, ChiTuple.length)],
        [SaoPhuTinhs.BachHo, (i) => i === neutralize(thaiTueIndex + 8, ChiTuple.length)],
        [SaoPhuTinhs.PhucDuc, (i) => i === neutralize(thaiTueIndex + 9, ChiTuple.length)],
        [SaoPhuTinhs.DieuKhach, (i) => i === neutralize(thaiTueIndex + 10, ChiTuple.length)],
        [SaoPhuTinhs.TrucPhu, (i) => i === neutralize(thaiTueIndex + 11, ChiTuple.length)],
    ];
};
