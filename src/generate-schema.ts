/**
 * Generate JSON schema from value.
 *
 * @param value - Value.
 * @returns - JSON schema.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function generateSchema(value: any) {
  switch (true) {
    case value === null:
      return { type: 'null' };

    case Number.isInteger(value):
      return { type: 'integer' };

    case typeof value === 'number':
      return { type: 'number' };

    case typeof value === 'string':
      return { type: 'string' };

    case value instanceof Object && !Object.keys(value).length:
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

    default:
      throw new TypeError('First argument must be a JSON value');
  }
}
