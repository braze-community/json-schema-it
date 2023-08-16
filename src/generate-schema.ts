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

    case Array.isArray(value) && !value.length:
      return { type: 'array' };

    case Array.isArray(value):
      return { type: 'array', items: generateSchema(value[0]) };

    case !Object.keys(value).length:
      return { type: 'object' };

    case value instanceof Object:
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
