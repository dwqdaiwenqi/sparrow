import { createConstant } from '../../src/scale';

describe('createConstant', () => {
  test('createConstant() returns a constant function', () => {
    const s = createConstant({ domain: [1] });

    expect(s(1)).toBe(1);
    expect(s(true)).toBe(1);
    expect(s('hello world')).toBe(1);
    expect(s({ a: 1 })).toBe(1);
  });
});
