import { DateTime } from 'luxon';
import { CalendarChinese } from 'date-chinese';

import { Gender } from '../gender/gender.type';
import { getMenh } from '../menh/menh.service';
import { getCuc } from '../cuc/cuc.service';
import {
    getBaseDiaChi,
    getChinhTinhAssigners,
    getLocTonAssigners,
    getMenhThanAssigner,
    getThaiTueAssigners,
} from '../dia-chi/dia-chi.service';
import { getLunarDay, getLunarHour, getLunarMonth, getLunarYear } from '../lunar-temporal/lunar-temporal.service';

type CreateLaSoOptions = {
    gregorianDate: string;
    hour: number;
    gender: Gender;
};

export const createLaSo = ({ gregorianDate: gregorianDateString, hour, gender }: CreateLaSoOptions) => {
    const gregorianDate = DateTime.fromISO(gregorianDateString);
    const lunarDateValues = (() => {
        const date = new CalendarChinese().fromDate(gregorianDate.toJSDate());
        const [_, year, month, __, day] = date.get();

        return { year, month, day };
    })();

    const lunarYear = getLunarYear({ gregorianYear: gregorianDate.year });
    const lunarMonth = getLunarMonth({ lunarMonth: lunarDateValues.month, yearCan: lunarYear.can });
    const lunarDay = getLunarDay({ gregorianDate, lunarDay: lunarDateValues.day });
    const lunarHour = getLunarHour({ gregorianHour: hour, dayCan: lunarDay.can });

    const menh = getMenh({ can: lunarYear.can, chi: lunarYear.chi });
    const cuc = getCuc({ can: lunarYear.can, chi: lunarYear.chi });

    const diaChi = (() => {
        const { assignMenh, assignThan } = getMenhThanAssigner({ lunarMonth: lunarDateValues.month, lunarHour: 12 });
        const chinhTinhAssigners = getChinhTinhAssigners({ cuc, lunarDay: lunarDateValues.day });
        const thaiTueAssigners = getThaiTueAssigners({ chi: lunarYear.chi });
        const locTonAssigners = getLocTonAssigners({ can: lunarYear.can, gender });

        return getBaseDiaChi()
            .map((cung, i) => ({ ...cung, isMenh: assignMenh(i), isThan: assignThan(i) }))
            .map((cung, i) => ({
                ...cung,
                chinhTinh: chinhTinhAssigners.filter(([_, assigner]) => assigner(i)).map(([sao]) => sao),
                phuTinh: [
                    ...thaiTueAssigners.filter(([_, assigner]) => assigner(i)).map(([sao]) => sao),
                    ...locTonAssigners.filter(([_, assigner]) => assigner(i)).map(([sao]) => sao),
                ],
            }));
    })();

    return {
        gregorianDate,
        lunarDateValues,
        lunarYear,
        lunarMonth,
        lunarDay,
        lunarHour,
        menh,
        cuc,
        diaChi,
    };
};
