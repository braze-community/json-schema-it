import { generateSchema } from './index';

describe('invalid JSON value', () => {
  it.each([undefined, () => {}, new Date(), Symbol('symbol')])(
    'throws error for %p',
    (value) => {
      expect(() => generateSchema(value)).toThrow(
        new TypeError(`Invalid JSON value: ${String(value)}`),
      );
    },
  );
});

describe('string', () => {
  describe('default', () => {
    it.each(['', 'foo'])('converts %p', (value) => {
      expect(generateSchema(value)).toEqual({ type: 'string' });
    });
  });

  describe('date-time', () => {
    it.each(['2018-11-13T20:20:39+00:00', '2022-11-02T09:03:19.967Z'])(
      'converts %p',
      (value) => {
        expect(generateSchema(value)).toEqual({
          type: 'string',
          format: 'date-time',
        });
      },
    );
  });

  describe('time', () => {
    it.each(['20:20:39+00:00', '20:20:39'])('converts %p', (value) => {
      expect(generateSchema(value)).toEqual({
        type: 'string',
        format: 'time',
      });
    });
  });

  describe('date', () => {
    it.each(['2018-11-13'])('converts %p', (value) => {
      expect(generateSchema(value)).toEqual({
        type: 'string',
        format: 'date',
      });
    });
  });

  describe('email', () => {
    it.each(['user@example.com'])('converts %p', (value) => {
      expect(generateSchema(value)).toEqual({
        type: 'string',
        format: 'email',
      });
    });
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

describe('boolean', () => {
  it.each([true, false])('converts %p', (value) => {
    expect(generateSchema(value)).toEqual({ type: 'boolean' });
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

describe('array', () => {
  it('converts empty array', () => {
    expect(generateSchema([])).toEqual({ type: 'array' });
  });

  it('converts array', () => {
    expect(generateSchema([1])).toEqual({
      type: 'array',
      items: { type: 'integer' },
    });
  });

  it('converts array with same types', () => {
    expect(generateSchema([1.2, 2.3])).toEqual({
      type: 'array',
      items: { type: 'number' },
    });
  });

  it('converts array with mixed types', () => {
    expect(generateSchema([1, 'two'])).toEqual({
      type: 'array',
    });
  });
});
