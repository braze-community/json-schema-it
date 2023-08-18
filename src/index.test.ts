import { generateSchema } from './generate-schema';
import * as index from './index';

describe('generateSchema', () => {
  it('exports function', () => {
    expect(index.generateSchema).toBe(generateSchema);
  });

  it('generates basic schema', () => {
    expect(
      index.generateSchema({
        productId: 1,
        productName: 'A green door',
        price: 12.5,
        tags: ['home', 'green'],
      }),
    ).toEqual({
      type: 'object',
      properties: {
        productId: { type: 'integer' },
        productName: { type: 'string' },
        price: { type: 'number' },
        tags: { type: 'array', items: { type: 'string' } },
      },
    });
  });

  it('generates complex schema', () => {
    expect(
      index.generateSchema({
        productId: 1,
        productName: 'An ice sculpture',
        price: 12.5,
        tags: ['cold', 'ice'],
        dimensions: {
          length: 7.0,
          width: 12.0,
          height: 9.5,
        },
        warehouseLocation: {
          latitude: -78.75,
          longitude: 20.4,
        },
      }),
    ).toEqual({
      type: 'object',
      properties: {
        productId: { type: 'integer' },
        productName: { type: 'string' },
        price: { type: 'number' },
        tags: { type: 'array', items: { type: 'string' } },
        dimensions: {
          type: 'object',
          properties: {
            length: { type: 'integer' },
            width: { type: 'integer' },
            height: { type: 'number' },
          },
        },
        warehouseLocation: {
          type: 'object',
          properties: {
            latitude: { type: 'number' },
            longitude: { type: 'number' },
          },
        },
      },
    });
  });
});
