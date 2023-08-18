import { deepEqual } from './utils';

const error = new TypeError('First argument must be a JSON value');

/**
 * Generate JSON schema from value.
 *
 * @param value - Value.
 * @returns - JSON schema.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function generateSchema(value: any): any {
  switch (true) {
    case value === undefined:
    case typeof value === 'undefined':
    case typeof value === 'function':
    case typeof value === 'symbol':
    case value instanceof Date:
      throw error;

    case value === null:
      return { type: 'null' };

    case Number.isInteger(value):
      return { type: 'integer' };

    case typeof value === 'number':
      return { type: 'number' };

    case typeof value === 'string':
      return { type: 'string' };

    case typeof value === 'boolean':
      return { type: 'boolean' };

    case Array.isArray(value):
      if (value.length === 1) {
        return { type: 'array', items: generateSchema(value[0]) };
      }

      if (value.length > 1) {
        const items = value.map(generateSchema);
        if (deepEqual(...items)) {
          return { type: 'array', items: items[0] };
        }
      }

      return { type: 'array' };

    case value instanceof Object:
      if (!Object.keys(value).length) {
        return { type: 'object' };
      }

      return {
        type: 'object',
        properties: Object.entries(value).reduce(
          (accumulator, [key, value]) => {
            accumulator[key] = generateSchema(value);
            return accumulator;
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {} as Record<string, any>,
        ),
      };

    /* istanbul ignore next */
    default:
      throw error;
  }
}
