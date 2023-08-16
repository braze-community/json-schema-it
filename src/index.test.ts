import { generateSchema } from './index';

describe('generateSchema', () => {
  it('exports function', () => {
    expect(generateSchema).toBeInstanceOf(Function);
  });

  it('generates string', () => {
    expect(generateSchema('')).toEqual({ type: 'string' });
  });
});
