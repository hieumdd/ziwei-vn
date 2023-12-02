import { createLaSo } from './la-so.service';

it('createLaSo', () => {
    const laSo = createLaSo('1998-10-31');
    expect(laSo).toBeDefined();
});
