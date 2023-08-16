import { generateSchema } from './index';

describe('generateSchema', () => {
  it('generates string', () => {
    expect(generateSchema('')).toEqual({ type: 'string' });
  });
});
