import { Cuc } from './cuc.type';
import * as NguHanhs from '../ngu-hanh/ngu-hanh.const';

export const ThuyNhiCuc: Cuc = {
    name: 'Thuỷ Nhị Cục',
    nguHanh: NguHanhs.Thuy,
    rank: 2,
    tuViMapping: [
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
};

export const MocTamCuc: Cuc = {
    name: 'Mộc Tam Cục',
    nguHanh: NguHanhs.Moc,
    rank: 3,
    tuViMapping: [
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
};

export const KimTuCuc: Cuc = {
    name: 'Kim Tứ Cục',
    nguHanh: NguHanhs.Kim,
    rank: 4,
    tuViMapping: [
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
};

export const ThoNguCuc: Cuc = {
    name: 'Thổ Ngũ Cục',
    nguHanh: NguHanhs.Tho,
    rank: 5,
    tuViMapping: [
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
};

export const HoaLucCuc: Cuc = {
    name: 'Hoả Lục Cục',
    nguHanh: NguHanhs.Hoa,
    rank: 6,
    tuViMapping: [
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
};
