import { Can } from './can.type';
import { AmDuong } from '../am-duong.enum';
import * as NguHanhs from '../ngu-hanh/ngu-hanh.enum';

export const Giap: Can = {
    index: 0,
    name: 'Giáp',
    amDuong: AmDuong.Duong,
    nguHanh: NguHanhs.Moc,
    menhRank: 1,
};

export const At: Can = {
    index: 1,
    name: 'Ất',
    amDuong: AmDuong.Am,
    nguHanh: NguHanhs.Moc,
    menhRank: 1,
};

export const Binh: Can = {
    index: 2,
    name: 'Bính',
    amDuong: AmDuong.Duong,
    nguHanh: NguHanhs.Hoa,
    menhRank: 2,
};

export const Dinh: Can = {
    index: 3,
    name: 'Đinh',
    amDuong: AmDuong.Am,
    nguHanh: NguHanhs.Hoa,
    menhRank: 2,
};

export const Mau: Can = {
    index: 4,
    name: 'Mậu',
    amDuong: AmDuong.Duong,
    nguHanh: NguHanhs.Tho,
    menhRank: 3,
};

export const Ky: Can = {
    index: 5,
    name: 'Kỷ',
    amDuong: AmDuong.Am,
    nguHanh: NguHanhs.Tho,
    menhRank: 3,
};

export const Canh: Can = {
    index: 6,
    name: 'Canh',
    amDuong: AmDuong.Duong,
    nguHanh: NguHanhs.Kim,
    menhRank: 4,
};

export const Tan: Can = {
    index: 7,
    name: 'Tân',
    amDuong: AmDuong.Am,
    nguHanh: NguHanhs.Kim,
    menhRank: 4,
};

export const Nham: Can = {
    index: 8,
    name: 'Nhâm',
    amDuong: AmDuong.Duong,
    nguHanh: NguHanhs.Thuy,
    menhRank: 5,
};

export const Quy: Can = {
    index: 9,
    name: 'Quý',
    amDuong: AmDuong.Am,
    nguHanh: NguHanhs.Thuy,
    menhRank: 5,
};
