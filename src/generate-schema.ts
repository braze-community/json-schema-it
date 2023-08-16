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

    case value instanceof Object:
      return { type: 'object' };

    case Number.isInteger(value):
      return { type: 'integer' };

    case typeof value === 'number':
      return { type: 'number' };

    case typeof value === 'string':
      return { type: 'string' };

    default:
      throw new TypeError('First argument must be a JSON value');
  }
}
