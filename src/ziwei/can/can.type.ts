import { AmDuong } from '../am-duong.enum';
import { NguHanh } from '../ngu-hanh/ngu-hanh.type';

export type Can = {
    index: number;
    name: string;
    amDuong: AmDuong;
    nguHanh: NguHanh;
    menhRank: number;
};
