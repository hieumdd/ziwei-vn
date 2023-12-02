import { Can } from './can.type';
import { AmDuong } from '../am-duong.enum';
import { NguHanh } from '../ngu-hanh.enum';

export const Giap: Can = {
    name: 'Giáp',
    amDuong: AmDuong.Duong,
    nguHanh: NguHanh.Moc,
    menhRank: 1,
};

export const At: Can = {
    name: 'Ất',
    amDuong: AmDuong.Am,
    nguHanh: NguHanh.Moc,
    menhRank: 1,
};

export const Binh: Can = {
    name: 'Bính',
    amDuong: AmDuong.Duong,
    nguHanh: NguHanh.Hoa,
    menhRank: 2,
};

export const Dinh: Can = {
    name: 'Đinh',
    amDuong: AmDuong.Am,
    nguHanh: NguHanh.Hoa,
    menhRank: 2,
};

export const Mau: Can = {
    name: 'Mậu',
    amDuong: AmDuong.Duong,
    nguHanh: NguHanh.Tho,
    menhRank: 3,
};

export const Ky: Can = {
    name: 'Kỷ',
    amDuong: AmDuong.Am,
    nguHanh: NguHanh.Tho,
    menhRank: 3,
};

export const Canh: Can = {
    name: 'Canh',
    amDuong: AmDuong.Duong,
    nguHanh: NguHanh.Kim,
    menhRank: 4,
};

export const Tan: Can = {
    name: 'Tân',
    amDuong: AmDuong.Am,
    nguHanh: NguHanh.Kim,
    menhRank: 4,
};

export const Nham: Can = {
    name: 'Nhâm',
    amDuong: AmDuong.Duong,
    nguHanh: NguHanh.Thuy,
    menhRank: 5,
};

export const Quy: Can = {
    name: 'Quý',
    amDuong: AmDuong.Am,
    nguHanh: NguHanh.Thuy,
    menhRank: 5,
};
