import { NguHanh } from '../ngu-hanh/ngu-hanh.type';

export type Cuc = {
    name: string;
    nguHanh: NguHanh;
    rank: number;
    tuViMapping: [
        number[],
        number[],
        number[],
        number[],
        number[],
        number[],
        number[],
        number[],
        number[],
        number[],
        number[],
        number[],
    ];
};
