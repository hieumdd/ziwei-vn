import { Can } from '../can/can.type';
import { Chi } from '../chi/chi.type';
import { NguHanh } from '../ngu-hanh/ngu-hanh.type';
import * as NguHanhs from '../ngu-hanh/ngu-hanh.enum';

type GetMenhOptions = { can: Can; chi: Chi };

export const getMenh = ({ can, chi }: GetMenhOptions) => {
    const order = [NguHanhs.Kim, NguHanhs.Thuy, NguHanhs.Hoa, NguHanhs.Tho, NguHanhs.Moc];

    return order[((can.menhRank + chi.menhRank) % 5) - 1] as NguHanh;
};
