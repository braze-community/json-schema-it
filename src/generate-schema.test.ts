import { generateSchema } from './index';

it.each(['', 'foo'])('generates string %p', (value) => {
  expect(generateSchema(value)).toEqual({ type: 'string' });
});

it.each([-1, 0, 1.0, 42])('generates integer %p', (value) => {
  expect(generateSchema(value)).toEqual({ type: 'integer' });
});

it.each([-0.1, 3.14])('generates number %p', (value) => {
  expect(generateSchema(value)).toEqual({ type: 'number' });
});
