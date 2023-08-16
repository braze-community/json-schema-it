import { generateSchema } from './index';

it('generates string', () => {
  expect(generateSchema('')).toEqual({ type: 'string' });
});
