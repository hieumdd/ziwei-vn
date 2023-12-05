import { Can } from '../can/can.type';
import * as Cans from '../can/can.const';
import { Chi } from '../chi/chi.type';
import * as Chis from '../chi/chi.const';
import { ChiTuple } from '../chi/chi.tuple';
import { Cuc } from '../cuc/cuc.type';
import * as Cucs from '../cuc/cuc.const';
import { Gender } from '../gender/gender.type';
import { Sao } from '../sao/sao.type';
import * as SaoChinhTinhs from '../sao/chinh-tinh.const';
import * as SaoThaiTues from '../sao/phu-tinh/thai-tue.const';
import * as SaoLocTons from '../sao/phu-tinh/loc-ton.const';
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
        [SaoThaiTues.QuanPhu, (i) => i === neutralize(thaiTueIndex + 4, ChiTuple.length)],
        [SaoThaiTues.TuPhu, (i) => i === neutralize(thaiTueIndex + 5, ChiTuple.length)],
        [SaoThaiTues.TuePha, (i) => i === neutralize(thaiTueIndex + 6, ChiTuple.length)],
        [SaoThaiTues.LongDuc, (i) => i === neutralize(thaiTueIndex + 7, ChiTuple.length)],
        [SaoThaiTues.BachHo, (i) => i === neutralize(thaiTueIndex + 8, ChiTuple.length)],
        [SaoThaiTues.PhucDuc, (i) => i === neutralize(thaiTueIndex + 9, ChiTuple.length)],
        [SaoThaiTues.DieuKhach, (i) => i === neutralize(thaiTueIndex + 10, ChiTuple.length)],
        [SaoThaiTues.TrucPhu, (i) => i === neutralize(thaiTueIndex + 11, ChiTuple.length)],
    ];
};

type GetLocTonAssigners = (options: { can: Can; gender: Gender }) => [Sao, Assigner][];

export const getLocTonAssigners: GetLocTonAssigners = ({ can, gender }) => {
    let locTonIndex = 0;

    const canPredicate = (cans: Can[]) => cans.map(({ index }) => index).includes(can.index);

    if (canPredicate([Cans.Giap])) {
        locTonIndex = Chis.Dan.index;
    } else if (canPredicate([Cans.At])) {
        locTonIndex = Chis.Mao.index;
    } else if (canPredicate([Cans.Binh, Cans.Mau])) {
        locTonIndex = Chis.Ti.index;
    } else if (canPredicate([Cans.Dinh, Cans.Ky])) {
        locTonIndex = Chis.Ngo.index;
    } else if (canPredicate([Cans.Canh])) {
        locTonIndex = Chis.Than.index;
    } else if (canPredicate([Cans.Tan])) {
        locTonIndex = Chis.Dau.index;
    } else if (canPredicate([Cans.Nham])) {
        locTonIndex = Chis.Hoi.index;
    } else if (canPredicate([Cans.Quy])) {
        locTonIndex = Chis.Ty.index;
    }

    const locTonCoefficient = can.amDuong.value * gender.value;

    return [
        [SaoLocTons.LocTon, (i) => i === neutralize(locTonIndex + locTonCoefficient * 0, ChiTuple.length)],
        [SaoLocTons.BacSy, (i) => i === neutralize(locTonIndex + locTonCoefficient * 0, ChiTuple.length)],
        [SaoLocTons.LucSy, (i) => i === neutralize(locTonIndex + locTonCoefficient * 1, ChiTuple.length)],
        [SaoLocTons.ThanhLong, (i) => i === neutralize(locTonIndex + locTonCoefficient * 2, ChiTuple.length)],
        [SaoLocTons.TieuHao, (i) => i === neutralize(locTonIndex + locTonCoefficient * 3, ChiTuple.length)],
        [SaoLocTons.TuongQuan, (i) => i === neutralize(locTonIndex + locTonCoefficient * 4, ChiTuple.length)],
        [SaoLocTons.TauThu, (i) => i === neutralize(locTonIndex + locTonCoefficient * 5, ChiTuple.length)],
        [SaoLocTons.PhiLiem, (i) => i === neutralize(locTonIndex + locTonCoefficient * 6, ChiTuple.length)],
        [SaoLocTons.HyThan, (i) => i === neutralize(locTonIndex + locTonCoefficient * 7, ChiTuple.length)],
        [SaoLocTons.BenhPhu, (i) => i === neutralize(locTonIndex + locTonCoefficient * 8, ChiTuple.length)],
        [SaoLocTons.DaiHao, (i) => i === neutralize(locTonIndex + locTonCoefficient * 9, ChiTuple.length)],
        [SaoLocTons.PhucBinh, (i) => i === neutralize(locTonIndex + locTonCoefficient * 10, ChiTuple.length)],
        [SaoLocTons.QuanPhu, (i) => i === neutralize(locTonIndex + locTonCoefficient * 11, ChiTuple.length)],
    ];
};
