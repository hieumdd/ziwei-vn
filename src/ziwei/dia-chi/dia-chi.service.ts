import * as Chis from '../chi/chi.enum';

type GetDiaChiOptions = {
    lunarMonth: number;
    lunarHour: number;
};

export const getDiaChi = (options: GetDiaChiOptions) => {
    const baseDiaChi = [
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

    const withMenhThan = ((diaChi) => {
        const menhIndex = 2 + (options.lunarMonth - 1) - (options.lunarHour - 1);
        const thanIndex = 2 + (options.lunarMonth - 1) + (options.lunarHour - 1);

        return diaChi.map((cung, i) => ({
            ...cung,
            isMenh: i === menhIndex || i === diaChi.length + menhIndex,
            isThan: i === thanIndex % diaChi.length,
        }));
    })(baseDiaChi);

    withMenhThan;
};
