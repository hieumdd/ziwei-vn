import { Can } from './can.type';
import { AmDuong } from '../am-duong.enum';
import * as NguHanhs from '../ngu-hanh/ngu-hanh.enum';

export const Giap: Can = {
    name: 'Giáp',
    amDuong: AmDuong.Duong,
    nguHanh: NguHanhs.Moc,
    menhRank: 1,
};

export const At: Can = {
    name: 'Ất',
    amDuong: AmDuong.Am,
    nguHanh: NguHanhs.Moc,
    menhRank: 1,
};

export const Binh: Can = {
    name: 'Bính',
    amDuong: AmDuong.Duong,
    nguHanh: NguHanhs.Hoa,
    menhRank: 2,
};

export const Dinh: Can = {
    name: 'Đinh',
    amDuong: AmDuong.Am,
    nguHanh: NguHanhs.Hoa,
    menhRank: 2,
};

export const Mau: Can = {
    name: 'Mậu',
    amDuong: AmDuong.Duong,
    nguHanh: NguHanhs.Tho,
    menhRank: 3,
};

export const Ky: Can = {
    name: 'Kỷ',
    amDuong: AmDuong.Am,
    nguHanh: NguHanhs.Tho,
    menhRank: 3,
};

export const Canh: Can = {
    name: 'Canh',
    amDuong: AmDuong.Duong,
    nguHanh: NguHanhs.Kim,
    menhRank: 4,
};

export const Tan: Can = {
    name: 'Tân',
    amDuong: AmDuong.Am,
    nguHanh: NguHanhs.Kim,
    menhRank: 4,
};

export const Nham: Can = {
    name: 'Nhâm',
    amDuong: AmDuong.Duong,
    nguHanh: NguHanhs.Thuy,
    menhRank: 5,
};

export const Quy: Can = {
    name: 'Quý',
    amDuong: AmDuong.Am,
    nguHanh: NguHanhs.Thuy,
    menhRank: 5,
};
