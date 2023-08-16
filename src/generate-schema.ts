/**
 * Generate JSON schema from value.
 *
 * @param value - Value.
 * @returns - JSON schema.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function generateSchema(value: any) {
  if (value === null) {
    return { type: 'null' };
  }

  if (typeof value === 'string') {
    return { type: 'string' };
  }

  if (typeof value === 'number') {
    if (Number.isInteger(value)) {
      return { type: 'integer' };
    } else {
      return { type: 'number' };
    }
  }
}
