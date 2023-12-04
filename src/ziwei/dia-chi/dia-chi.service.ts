import * as Chis from '../chi/chi.enum';

export const getBaseDiaChi = () => {
    return [
        { name: Chis.Ty.name },
        { name: Chis.Suu.name },
        { name: Chis.Dan.name },
        { name: Chis.Mao.name },
        { name: Chis.Thin.name },
        { name: Chis.Ti.name },
        { name: Chis.Ngo.name },
        { name: Chis.Mui.name },
        { name: Chis.Than.name },
        { name: Chis.Dau.name },
        { name: Chis.Tuat.name },
        { name: Chis.Hoi.name },
    ] as const;
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
