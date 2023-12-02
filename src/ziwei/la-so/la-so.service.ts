import { DateTime } from 'luxon';
import { CalendarChinese } from 'date-chinese';

export const createLaSo = (gregorianDateString: string) => {
    const gregorianDate = DateTime.fromISO(gregorianDateString);
    const lunarDate = new CalendarChinese().fromDate(gregorianDate.toJSDate());

};
