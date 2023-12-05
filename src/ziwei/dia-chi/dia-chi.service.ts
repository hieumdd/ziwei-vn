import { Can } from '../can/can.type';
import { Chi } from '../chi/chi.type';
import * as Chis from '../chi/chi.const';
import { ChiTuple } from '../chi/chi.tuple';
import { Cuc } from '../cuc/cuc.type';
import * as Cucs from '../cuc/cuc.const';
import { Gender } from '../gender.const';
import { Sao } from '../sao/sao.type';
import * as SaoChinhTinhs from '../sao/chinh-tinh.const';
import * as SaoThaiTues from '../sao/phu-tinh/thai-tue.const';
import { neutralize } from '../ziwei.utils';

export const getBaseDiaChi = () => {
    return ChiTuple.map(({ name }) => ({ name }));
};

type Assigner = (i: number) => boolean;

type GetDiaChiOptions = (options: { lunarMonth: number; lunarHour: number }) => { [key: string]: Assigner };

export const getMenhThanAssigner: GetDiaChiOptions = (options) => {
    const menhIndex = 2 + (options.lunarMonth - 1) - (options.lunarHour - 1);
    const thanIndex = 2 + (options.lunarMonth - 1) + (options.lunarHour - 1);

    return {
        assignMenh: (i) => i === neutralize(menhIndex, ChiTuple.length),
        assignThan: (i) => i === neutralize(thanIndex, ChiTuple.length),
    };
};

type GetChinhTinhAssigners = (options: { cuc: Cuc; lunarDay: number }) => [Sao, Assigner][];

export const getChinhTinhAssigners: GetChinhTinhAssigners = ({ cuc, lunarDay }) => {
    const tuViMapping = {
        [Cucs.ThuyNhiCuc.name]: [
            [22, 23],
            [1, 25, 24],
            [2, 3, 26, 27],
            [4, 5, 28, 29],
            [6, 7, 30],
            [8, 9],
            [10, 11],
            [12, 13],
            [14, 15],
            [16, 17],
            [18, 19],
            [20, 21],
        ],
        [Cucs.MocTamCuc.name]: [
            [25],
            [2, 28],
            [3, 5],
            [6, 8],
            [1, 9, 11],
            [4, 12, 14],
            [7, 15, 7],
            [10, 18, 20],
            [13, 21, 23],
            [16, 24, 26],
            [19, 27, 29],
            [22, 30],
        ],
        [Cucs.KimTuCuc.name]: [
            [5],
            [3, 9],
            [4, 7, 13],
            [8, 11, 17],
            [2, 12, 15, 21],
            [6, 16, 19, 25],
            [10, 20, 23, 29],
            [14, 21, 27],
            [18, 28],
            [22],
            [26],
            [1, 30],
        ],
        [Cucs.ThoNguCuc.name]: [
            [7],
            [4, 12],
            [5, 9, 17],
            [10, 14, 22],
            [3, 15, 19, 27],
            [8, 20, 24],
            [1, 13, 25, 29],
            [6, 18, 30],
            [11, 23],
            [16, 28],
            [21],
            [2, 26],
        ],
        [Cucs.HoaLucCuc.name]: [
            [9, 19],
            [5, 15, 25],
            [6, 11, 21],
            [12, 17, 27],
            [4, 18, 23],
            [10, 24, 29],
            [2, 16, 30],
            [8, 22],
            [14, 28],
            [1, 20],
            [7, 26],
            [3, 13],
        ],
    }[cuc.name];

    const tuViIndex = tuViMapping.findIndex((values) => values.includes(lunarDay))!;
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
        [SaoThaiTues.ThaiTue, (i) => i === neutralize(thaiTueIndex, ChiTuple.length)],
        [SaoThaiTues.ThieuDuong, (i) => i === neutralize(thaiTueIndex + 1, ChiTuple.length)],
        [SaoThaiTues.TangMon, (i) => i === neutralize(thaiTueIndex + 2, ChiTuple.length)],
        [SaoThaiTues.ThieuAm, (i) => i === neutralize(thaiTueIndex + 3, ChiTuple.length)],
        [SaoThaiTues.QuanPhuf, (i) => i === neutralize(thaiTueIndex + 4, ChiTuple.length)],
        [SaoThaiTues.TuPhu, (i) => i === neutralize(thaiTueIndex + 5, ChiTuple.length)],
        [SaoThaiTues.TuePha, (i) => i === neutralize(thaiTueIndex + 6, ChiTuple.length)],
        [SaoThaiTues.LongDuc, (i) => i === neutralize(thaiTueIndex + 7, ChiTuple.length)],
        [SaoThaiTues.BachHo, (i) => i === neutralize(thaiTueIndex + 8, ChiTuple.length)],
        [SaoThaiTues.PhucDuc, (i) => i === neutralize(thaiTueIndex + 9, ChiTuple.length)],
        [SaoThaiTues.DieuKhach, (i) => i === neutralize(thaiTueIndex + 10, ChiTuple.length)],
        [SaoThaiTues.TrucPhu, (i) => i === neutralize(thaiTueIndex + 11, ChiTuple.length)],
    ];
};
