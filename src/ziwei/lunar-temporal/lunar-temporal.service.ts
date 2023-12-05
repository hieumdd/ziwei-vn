import { DateTime } from 'luxon';
import rotate from 'rotate-array';
import { chain, dropRight, range, zip } from 'lodash';

import { LunarTemporal } from './lunar-temporal.type';
import { Can } from '../can/can.type';
import * as Cans from '../can/can.const';
import { CanTuple } from '../can/can.tuple';
import { Chi } from '../chi/chi.type';
import * as Chis from '../chi/chi.const';
import { ChiTuple } from '../chi/chi.tuple';
import { neutralize } from '../ziwei.utils';

type GetLunarYear = (options: { gregorianYear: number }) => LunarTemporal;

export const getLunarYear: GetLunarYear = ({ gregorianYear }) => ({
    value: gregorianYear,
    can: rotate([...CanTuple], -4)[neutralize(gregorianYear, CanTuple.length)],
    chi: rotate([...ChiTuple], -4)[neutralize(gregorianYear, ChiTuple.length)],
});

type GetLunarMonth = (options: { lunarMonth: number; yearCan: Can }) => LunarTemporal;

export const getLunarMonth: GetLunarMonth = ({ lunarMonth, yearCan }) => {
    const [canRotation] = chain(CanTuple)
        .chunk(5)
        .flatMap((chunk) => chunk.map((canValue, i, arr) => [-2 * (arr.length - i - 1), canValue] as const))
        .find(([_, x]) => x.index === yearCan.index)
        .value() as [number, Can];

    return {
        value: lunarMonth,
        can: rotate([...CanTuple], canRotation)[neutralize(lunarMonth - 1, CanTuple.length)],
        chi: rotate([...ChiTuple], 2)[neutralize(lunarMonth - 1, ChiTuple.length)],
    };
};

type GetLunarDay = (options: { gregorianDate: DateTime; lunarDay: number }) => LunarTemporal;

export const getLunarDay: GetLunarDay = ({ gregorianDate, lunarDay }) => {
    const base = {
        gregorianDate: DateTime.fromISO('1900-01-01'),
        can: Cans.Giap,
        chi: Chis.Tuat,
    };

    const daysDiff = gregorianDate.diff(base.gregorianDate, 'day').days;

    return {
        value: lunarDay,
        can: rotate([...CanTuple], base.can.index)[neutralize(daysDiff, CanTuple.length)],
        chi: rotate([...ChiTuple], base.chi.index)[neutralize(daysDiff, ChiTuple.length)],
    };
};

type GetLunarHour = (options: { gregorianHour: number; dayCan: Can }) => LunarTemporal;

export const getLunarHour: GetLunarHour = ({ gregorianHour, dayCan }) => {
    const [chi] = (
        zip(ChiTuple, rotate(dropRight([...range(1, 25, 2), 1].map((x, i, arr) => [x, arr[i + 1]])), -1)) as [
            Chi,
            [number, number],
        ][]
    ).find(([_, [start, end]]) => gregorianHour >= start && gregorianHour < end)!;

    return {
        value: gregorianHour,
        can: rotate([...CanTuple], -2)[neutralize(dayCan.index, CanTuple.length)],
        chi,
    };
};
