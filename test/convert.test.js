const Modules = require('../client/components');

const { convert } = Modules;

describe('<Tracks />', () => {
  test('Should convert any integer inputted into a string representation of the inpout integer', async () => {
    expect(convert(126294843)).toBe('126M');
    expect(convert(26294843)).toBe('26.2M');
    expect(convert(6294843)).toBe('6.29M');
    expect(convert(294843)).toBe('294K');
    expect(convert(94843)).toBe('94.8K');
    expect(convert(4843)).toBe('4.84K');
    expect(convert(843)).toBe('843');
    expect(convert(43)).toBe('43');
    expect(convert(3)).toBe('3');
  });
});
