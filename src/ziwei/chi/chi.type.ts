import { AmDuong } from '../am-duong.enum';

export type Chi = {
    index: number;
    name: string;
    amDuong: AmDuong;
    lunarMonth: number;
    lunarHourStart: number;
    lunarHourEnd: number;
};
