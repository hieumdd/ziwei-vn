import { ChiTuple } from '../chi/chi.tuple';

export const getBaseDiaChi = () => {
    return ChiTuple.map(({ name }) => ({ name }));
};

type GetDiaChiOptions = {
    lunarMonth: number;
    lunarHour: number;
};

export const getMenhThanPredicate = (options: GetDiaChiOptions) => {
    const menhIndex = 2 + (options.lunarMonth - 1) - (options.lunarHour - 1);
    const thanIndex = 2 + (options.lunarMonth - 1) + (options.lunarHour - 1);

    return {
        isMenh: (i: number) => i === menhIndex || i === getBaseDiaChi().length + menhIndex,
        isThan: (i: number) => i === thanIndex % getBaseDiaChi().length,
    };
};
