import { generateSchema } from './index';

describe('undefined', () => {
  it('throws error', () => {
    expect(() => generateSchema(undefined)).toThrow(
      new TypeError('First argument must be a JSON value'),
    );
  });
});

describe('string', () => {
  it.each(['', 'foo'])('converts %p', (value) => {
    expect(generateSchema(value)).toEqual({ type: 'string' });
  });
});

describe('integer', () => {
  it.each([-1, 0, 1.0, 42])('converts %p', (value) => {
    expect(generateSchema(value)).toEqual({ type: 'integer' });
  });
});

describe('number', () => {
  it.each([-0.1, 3.14])('converts %p', (value) => {
    expect(generateSchema(value)).toEqual({ type: 'number' });
  });
});

describe('null', () => {
  it('converts null', () => {
    expect(generateSchema(null)).toEqual({ type: 'null' });
  });
});
