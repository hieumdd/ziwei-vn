import { createLaSo } from './la-so.service';

it('createLaSo', () => {
    const laSo = createLaSo('1998-10-31');
    console.log(laSo);

    expect(laSo).toBeDefined();
    expect(laSo.lunarYear.can.name).toBe('Mậu');
    expect(laSo.lunarYear.chi.name).toBe('Dần');
    expect(laSo.menh.name).toBe('Thổ');
    expect(laSo.cuc.name).toBe('Thuỷ Nhị Cục');
    expect(laSo.diaChi.at(-1)?.isMenh).toBe(true);
    expect(laSo.diaChi.at(9)?.isThan).toBe(true);

    expect(laSo.diaChi[0].chinhTinh).toContainEqual({ name: 'Cự Môn' });
    expect(laSo.diaChi[2].chinhTinh).toContainEqual({ name: 'Thiên Đồng' });
    expect(laSo.diaChi[2].chinhTinh).toContainEqual({ name: 'Thiên Lương' });
    expect(laSo.diaChi[5].chinhTinh.length).toBe(0);
    expect(laSo.diaChi[7].chinhTinh).toContainEqual({ name: 'Tử Vi' });
    expect(laSo.diaChi[7].chinhTinh).toContainEqual({ name: 'Phá Quân' });
    expect(laSo.diaChi[9].chinhTinh).toContainEqual({ name: 'Thiên Phủ' });
});
