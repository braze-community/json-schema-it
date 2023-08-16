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

    case typeof value === 'string':
      return { type: 'string' };

    case Number.isInteger(value):
      return { type: 'integer' };

    case typeof value === 'number':
      return { type: 'number' };

    default:
      throw new TypeError('First argument must be a JSON value');
  }
}
