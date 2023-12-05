import { AmDuong } from '../am-duong.const';
import { NguHanh } from '../ngu-hanh/ngu-hanh.type';

export type Can = {
    index: number;
    name: string;
    amDuong: AmDuong;
    nguHanh: NguHanh;
};
