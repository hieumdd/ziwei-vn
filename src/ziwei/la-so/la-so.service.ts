import { DateTime } from 'luxon';
import { CalendarChinese } from 'date-chinese';

import * as Chis from '../chi/chi.enum';
import { getYearCan } from '../can/can.service';
import { Chi } from '../chi/chi.type';
import { getYearChi } from '../chi/chi.service';
import { getMenh } from '../menh/menh.service';
import { Cung } from '../cung/cung.type';
import { LaSo } from './la-so.type';
import { getBaseDiaChi, getMenhThanPredicate } from '../dia-chi/dia-chi.service';

const getLunarDate = (datetime: DateTime) => {
    const lunarDate = new CalendarChinese().fromDate(datetime.toJSDate());
    const [_, year, month, __, day] = lunarDate.get();

    return { date: lunarDate, year, month, day };
};

export const createLaSo = (gregorianDateString: string) => {
    const gregorianDate = DateTime.fromISO(gregorianDateString);
    const lunarDate = getLunarDate(gregorianDate);

    const lunarYear = {
        can: getYearCan(gregorianDate.year),
        chi: getYearChi(gregorianDate.year),
    };
    const menh = getMenh({ can: lunarYear.can, chi: lunarYear.chi });

    const diaChi = (() => {
        const { isMenh, isThan } = getMenhThanPredicate({ lunarMonth: lunarDate.month, lunarHour: 12 });

        return getBaseDiaChi().map((cung, i) => ({ ...cung, isMenh: isMenh(i), isThan: isThan(i) }));
    })();

    return {
        gregorianDate,
        lunarDate,
        lunarYear,
        menh,
        diaChi,
    };
};
