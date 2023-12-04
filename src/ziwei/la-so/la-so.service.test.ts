import { createLaSo } from './la-so.service';

it('createLaSo', () => {
    const laSo = createLaSo('1998-10-31');
    console.log(laSo);
    
    expect(laSo).toBeDefined();
    expect(laSo.lunarYear.can.name).toBe('Mậu');
    expect(laSo.lunarYear.chi.name).toBe('Dần');
    expect(laSo.menh.name).toBe('Thổ');
    expect(laSo.diaChi.at(-1)?.isMenh).toBe(true);
    expect(laSo.diaChi.at(9)?.isThan).toBe(true);
});
