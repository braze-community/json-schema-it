import { deepStrictEqual } from 'assert';

/**
 * Tests for deep equality between the `actual` and `expected` parameters.
 */
export function deepEqual(...args: unknown[]) {
  try {
    for (let index = 0, count = args.length; index < count; index++) {
      if (index + 1 === count) {
        continue;
      }
      deepStrictEqual(args[index], args[index + 1]);
    }
    return true;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return false;
  }
}
