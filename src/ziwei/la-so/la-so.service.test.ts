import { Nam } from '../gender/gender.const';
import { createLaSo } from './la-so.service';

describe('createLaSo', () => {
    let laSo: ReturnType<typeof createLaSo>;

    beforeAll(() => {
        laSo = createLaSo({
            gregorianDate: '1998-10-31',
            hour: 21,
            gender: Nam,
        });
    });

    describe('thien-ban', () => {
        it('lunar-year', () => {
            expect(laSo.lunarYear.can.name).toBe('Mậu');
            expect(laSo.lunarYear.chi.name).toBe('Dần');
        });

        it('lunar-month', () => {
            expect(laSo.lunarMonth.can.name).toBe('Nhâm');
            expect(laSo.lunarMonth.chi.name).toBe('Tuất');
        });

        it('lunar-day', () => {
            expect(laSo.lunarDay.can.name).toBe('Tân');
            expect(laSo.lunarDay.chi.name).toBe('Hợi');
        });

        it('menh/cuc', () => {
            expect(laSo.menh.name).toBe('Thổ');
            expect(laSo.cuc.name).toBe('Thuỷ Nhị Cục');
        });
    });

    describe('dia-chi', () => {
        it('menh/than', () => {
            expect(laSo.diaChi.at(-1)?.isMenh).toBe(true);
            expect(laSo.diaChi.at(9)?.isThan).toBe(true);
        });

        it('chinh-tinh', () => {
            expect(laSo.diaChi[0].chinhTinh).toContainEqual({ name: 'Cự Môn' });
            expect(laSo.diaChi[2].chinhTinh).toContainEqual({ name: 'Thiên Đồng' });
            expect(laSo.diaChi[2].chinhTinh).toContainEqual({ name: 'Thiên Lương' });
            expect(laSo.diaChi[5].chinhTinh.length).toBe(0);
        });

        describe('phu-tinh', () => {
            it('thai-tue', () => {
                expect(laSo.diaChi[0].phuTinh).toContainEqual({ name: 'Điếu Khách' });
                expect(laSo.diaChi[2].phuTinh).toContainEqual({ name: 'Thái Tuế' });
            });

            it('loc-ton', () => {
                expect(laSo.diaChi[5].phuTinh).toContainEqual({ name: 'Lộc Tồn' });
                expect(laSo.diaChi[5].phuTinh).toContainEqual({ name: 'Bác Sỹ' });
                expect(laSo.diaChi[9].phuTinh).toContainEqual({ name: 'Tướng Quân' });
            });
        });
    });
});
