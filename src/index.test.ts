import { generateSchema } from './index';

describe('generateSchema', () => {
  it('exports function', () => {
    expect(generateSchema).toBeInstanceOf(Function);
  });

  it.each(['', 'foo'])('generates string', (value) => {
    expect(generateSchema(value)).toEqual({ type: 'string' });
  });

  it.each([-1, 0, 1, 42])('generates integer', (value) => {
    expect(generateSchema(value)).toEqual({ type: 'integer' });
  });
});
