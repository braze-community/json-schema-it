import { generateSchema } from './index';

describe('invalid JSON value', () => {
  it.each([undefined, () => {}, new Date(), Symbol('symbol')])(
    'throws error for %p',
    (value) => {
      expect(() => generateSchema(value)).toThrow(
        new TypeError('First argument must be a JSON value'),
      );
    },
  );
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

describe('object', () => {
  it('converts empty object', () => {
    expect(generateSchema({})).toEqual({ type: 'object' });
  });

  it('converts object with key-value', () => {
    expect(generateSchema({ a: 1 })).toEqual({
      type: 'object',
      properties: { a: { type: 'integer' } },
    });
  });

  it('converts object with key-value pairs', () => {
    expect(generateSchema({ a: 1 })).toEqual({
      type: 'object',
      properties: { a: { type: 'integer' } },
    });
  });

  it('converts object with key-value', () => {
    expect(generateSchema({ a: 1, b: 'two' })).toEqual({
      type: 'object',
      properties: { a: { type: 'integer' }, b: { type: 'string' } },
    });
  });

  it('converts nested object', () => {
    expect(generateSchema({ a: { b: 2.1 } })).toEqual({
      type: 'object',
      properties: {
        a: { type: 'object', properties: { b: { type: 'number' } } },
      },
    });
  });
});
