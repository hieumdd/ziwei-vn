import { DateTime } from 'luxon';
import { CalendarChinese } from 'date-chinese';

import { getYearCan } from '../can/can.service';
import { getYearChi } from '../chi/chi.service';
import { getMenh } from '../menh/menh.service';
import { getCuc } from '../cuc/cuc.service';
import {
    getBaseDiaChi,
    getChinhTinhAssigners,
    getMenhThanAssigner,
    getThaiTueAssigners,
} from '../dia-chi/dia-chi.service';

export const createLaSo = (gregorianDateString: string) => {
    const gregorianDate = DateTime.fromISO(gregorianDateString);
    const lunarDate = (() => {
        const date = new CalendarChinese().fromDate(gregorianDate.toJSDate());
        const [_, year, month, __, day] = date.get();

        return { date: date, year, month, day };
    })();

    const lunarYear = {
        can: getYearCan(gregorianDate.year),
        chi: getYearChi(gregorianDate.year),
    };
    const menh = getMenh({ can: lunarYear.can, chi: lunarYear.chi });
    const cuc = getCuc({ can: lunarYear.can, chi: lunarYear.chi });

    const diaChi = (() => {
        const { assignMenh, assignThan } = getMenhThanAssigner({ lunarMonth: lunarDate.month, lunarHour: 12 });
        const chinhTinhAssigners = getChinhTinhAssigners({ cuc, lunarDay: lunarDate.day });
        const thaiTueAssigners = getThaiTueAssigners({ chi: lunarYear.chi });

        return getBaseDiaChi()
            .map((cung, i) => ({ ...cung, isMenh: assignMenh(i), isThan: assignThan(i) }))
            .map((cung, i) => ({
                ...cung,
                chinhTinh: chinhTinhAssigners.filter(([_, assigner]) => assigner(i)).map(([sao]) => sao),
                phuTinh: thaiTueAssigners.filter(([_, assigner]) => assigner(i)).map(([sao]) => sao),
            }));
    })();

    return {
        gregorianDate,
        lunarDate,
        lunarYear,
        menh,
        cuc,
        diaChi,
    };
};
